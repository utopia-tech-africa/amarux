import { HERO_VIDEO_SRC } from "@/constants";

export function HomeHero() {
  return (
    <section
      aria-label="Hero"
      className="relative isolate min-h-svh overflow-hidden bg-navy text-white"
    >
      <video
        className="absolute inset-0 size-full object-cover"
        src={HERO_VIDEO_SRC}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden
      />
      <div className="absolute inset-0 bg-black/50" aria-hidden />

      <div className="relative z-10 flex min-h-svh flex-col justify-end px-[var(--page-gutter)] pb-16 pt-32 md:pb-20 lg:pb-24">
        <div className="w-full">
          <h1 className="hero-fade-in whitespace-nowrap font-heading text-[clamp(1.75rem,4.5vw,3.75rem)] font-bold uppercase leading-[1.2] text-white">
            Tailored solutions
          </h1>

          <div className="mt-6 flex flex-col gap-6 md:mt-8 md:flex-row md:items-end md:gap-10 lg:gap-14">
            <p className="hero-fade-in hero-fade-in-delay-1 order-last max-w-[24rem] shrink [font-family:var(--font-poppins)] text-lg leading-[1.2] text-white md:order-none">
              AMARUX offers due diligence, legal protection, and guidance for
              property decisions. Whether buying a home or investing, we support
              you.
            </p>
            <p className="hero-fade-in hero-fade-in-delay-2 whitespace-nowrap font-heading text-[clamp(1.75rem,4.5vw,3.75rem)] font-bold uppercase leading-[1.2] text-white">
              sustainable results
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
