import Image from "next/image";
import { CLIENT_LOGOS } from "@/assets/img";
import { Container } from "@/components/container";

export function ClientLogos() {
  return (
    <section aria-label="Client logos" className="bg-white py-12 md:py-16">
      <Container className="flex flex-col gap-6 md:gap-8">
        <h2 className="text-center font-heading text-[clamp(1.25rem,2vw,1.375rem)] font-bold uppercase leading-[1.5] text-navy">
          Some of the people we&apos;ve worked with
        </h2>

        <ul className="grid grid-cols-2 items-center gap-x-6 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 lg:gap-x-4">
          {CLIENT_LOGOS.map((logo, index) => (
            <li
              key={`client-logo-${index}`}
              className="flex h-16 w-full items-center justify-center md:h-20 lg:h-24"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="h-auto max-h-14 w-full max-w-full object-contain opacity-80 md:max-h-16 lg:max-h-20"
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
