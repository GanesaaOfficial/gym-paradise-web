import Link from "next/link";

export default function MobileStickyCta() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-void/95 backdrop-blur-xl border-t border-gold/20 px-4 py-3 flex gap-3">
      <Link href="/pricing" className="btn-primary flex-1 justify-center py-3.5">
        Join Now
      </Link>
      <a
        href="https://wa.me/601126898810"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-outline flex-1 justify-center py-3.5"
      >
        WhatsApp
      </a>
    </div>
  );
}
