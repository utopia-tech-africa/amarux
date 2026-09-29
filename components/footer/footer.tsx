import Image from "next/image";
import Link from "next/link";
import { amaruxLogoFooter } from "@/assets/img";
import { ArrowSquareUpRightIcon } from "@/assets/svg";
import { Container } from "@/components/container";
import { NAV_LINKS } from "@/constants";

const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://instagram.com",
    src: "/footer/instagram-logo.svg",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    src: "/footer/linkedin-logo.svg",
  },
  {
    label: "Facebook",
    href: "https://facebook.com",
    src: "/footer/facebook-logo.svg",
  },
] as const;

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy text-[#dfdfdf]">
      <img
        src="/footer/footer-decor.svg"
        alt=""
        aria-hidden
        className="pointer-events-none absolute -top-4 -right-[18%] h-[90%] w-auto max-w-[70%] object-contain object-right opacity-70 sm:-right-[12%] sm:h-[100%] sm:max-w-[55%] sm:opacity-80 lg:-right-[8%] lg:h-[115%] lg:max-w-[45%]"
      />

      <Container className="relative z-10 flex flex-col gap-12 py-12 md:gap-16 md:py-16 lg:min-h-[505px] lg:justify-between lg:py-12">
        <div className="flex flex-col gap-8 lg:items-end">
          <a
            href="mailto:info@amarux.org"
            className="inline-flex cursor-pointer items-center gap-2.5 font-heading text-[clamp(1.75rem,4vw,3rem)] font-semibold uppercase leading-[1.3] text-gold-soft transition-opacity hover:opacity-80"
          >
            INFo@AMARUX.org
            <ArrowSquareUpRightIcon className="size-8 shrink-0 text-gold-soft md:size-12" />
          </a>

          <div className="flex w-full flex-col gap-8 sm:flex-row sm:justify-between lg:max-w-[36rem] lg:gap-10">
            <div className="flex max-w-[19rem] flex-col gap-2.5 font-[Verdana,Geneva,sans-serif] text-lg leading-[1.3]">
              <a
                href="tel:0597898181"
                className="cursor-pointer transition-opacity hover:opacity-80"
              >
                0597898181
              </a>
              <p>NO. 19 Nii Adjei Onanao Street, East Legon, Accra Ghana</p>
            </div>

            <nav aria-label="Footer">
              <ul className="flex flex-col gap-2.5 font-[Verdana,Geneva,sans-serif] text-lg leading-[1.3]">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="cursor-pointer capitalize transition-opacity hover:opacity-80"
                    >
                      {link.label === "Let’s talk" ? "Lets talk" : link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <ul className="flex gap-3">
              {SOCIAL_LINKS.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="block cursor-pointer transition-opacity hover:opacity-80"
                  >
                    <img
                      src={social.src}
                      alt=""
                      width={32}
                      height={32}
                      className="size-8"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col gap-1">
            <Link href="/" className="relative block h-[83px] w-[190px]">
              <Image
                src={amaruxLogoFooter}
                alt="Amarux"
                fill
                className="object-contain object-left"
                sizes="190px"
              />
            </Link>
            <p className="font-[Verdana,Geneva,sans-serif] text-lg uppercase leading-[1.3] text-white">
              Tailored Solutions. Sustainable Results
            </p>
          </div>

          <div className="flex flex-col gap-3 font-[Verdana,Geneva,sans-serif] text-sm leading-[1.5] text-[#c4c4c4] sm:flex-row sm:flex-wrap sm:items-center sm:gap-8 lg:gap-10">
            <Link
              href="/privacy-policy"
              className="cursor-pointer transition-opacity hover:opacity-80"
            >
              Privacy Policy
            </Link>
            <p>Powered by Utopia Tech</p>
            <p>© 2026 Amarux LTD</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
