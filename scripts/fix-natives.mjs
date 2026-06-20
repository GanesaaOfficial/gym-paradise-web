#!/usr/bin/env node
/**
 * Restores missing @next/swc native binary on macOS arm64 when npm skips optional deps.
 */
import { execSync } from "node:child_process";
import { cpSync, existsSync, mkdirSync, readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const nodeModules = join(root, "node_modules");

const packages = [
  {
    name: "@next/swc-darwin-arm64",
    file: "next-swc.darwin-arm64.node",
    copyTo: ["@next/swc-darwin-arm64"],
  },
];

function resolveVersion(pkgName) {
  const pkgJson = join(nodeModules, ...pkgName.split("/"), "package.json");
  if (!existsSync(pkgJson)) return null;
  return JSON.parse(readFileSync(pkgJson, "utf8")).version;
}

function installBinary({ name, file, copyTo }) {
  const version = resolveVersion(name);
  if (!version) return true;

  const targetFile = join(nodeModules, ...name.split("/"), file);
  if (existsSync(targetFile)) return true;

  const work = join(tmpdir(), `fix-natives-${Date.now()}`);
  mkdirSync(work, { recursive: true });

  try {
    const packOutput = execSync(`npm pack ${name}@${version}`, {
      cwd: work,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "pipe"],
    }).trim();
    const tarball = packOutput.split("\n").pop().trim();
    execSync(`tar -xzf "${tarball}"`, { cwd: work, stdio: "pipe" });

    const source = join(work, "package", file);
    if (!existsSync(source)) {
      console.warn(`[warn] ${file} missing for ${name}`);
      return false;
    }

    for (const dest of copyTo) {
      const dir = join(nodeModules, ...dest.split("/"));
      mkdirSync(dir, { recursive: true });
      cpSync(source, join(dir, file));
    }

    console.log(`[fixed] ${name}/${file}`);
    return true;
  } finally {
    rmSync(work, { recursive: true, force: true });
  }
}

let ok = true;
for (const pkg of packages) {
  if (!installBinary(pkg)) ok = false;
}

if (process.platform === "darwin") {
  try {
    execSync(`xattr -cr "${nodeModules}"`, { stdio: "pipe" });
  } catch {
    /* optional */
  }
}

if (!ok) process.exit(1);
