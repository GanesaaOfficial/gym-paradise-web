import Image from "next/image";
import Link from "next/link";
import { IconArrowRight } from "./components/icons";

export default function NotFound() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/Photos/unnamed-33.webp"
          alt="Gym Paradise training floor at night"
          fill
          quality={80}
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-void/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/70 to-void/60" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-xl">
        <p className="font-display font-semibold text-[clamp(80px,18vw,160px)] leading-none text-gold-gradient">
          404
        </p>
        <h1 className="type-display-lg text-cream mt-2 mb-4">Page Not Found</h1>
        <p className="text-body text-mist mb-8">
          Looks like this rep doesn&apos;t exist. Let&apos;s get you back to the training floor.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="btn-primary justify-center">
            Back Home
            <IconArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/facilities" className="btn-outline justify-center">
            Explore Facilities
          </Link>
        </div>
      </div>
    </section>
  );
}
