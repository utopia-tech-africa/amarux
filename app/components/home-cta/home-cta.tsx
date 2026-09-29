import Link from "next/link";
import { ArrowSquareUpRightIcon } from "@/assets/svg";
import { Container } from "@/components/container";

export function HomeCta() {
  return (
    <section aria-label="Call to action" className="bg-white py-16 md:py-20 lg:py-24">
      <Container className="flex flex-col gap-8 md:gap-10">
        <h2 className="max-w-[20ch] font-heading text-[clamp(1.5rem,2.5vw,2rem)] font-bold uppercase leading-[1.3] text-navy md:max-w-[29ch]">
          Let&apos;s talk about what peace of mind looks like for you
        </h2>

        <div className="grid gap-8 md:grid-cols-2 md:items-start md:gap-12 lg:gap-16">
          <p className="font-heading text-lg font-bold uppercase leading-[1.3] text-blue md:max-w-[28rem]">
            We don&apos;t have all properties on here by design, lets talk
          </p>

          <div className="flex flex-col gap-6 md:items-start">
            <p className="font-[Verdana,Geneva,sans-serif] text-lg leading-[1.3] text-ink md:max-w-[38rem]">
              No matter if you&apos;re dealing with a property issue, a complex
              dispute, or need assistance with a legal document, our dedicated
              team is fully prepared and eager to provide you with the support
              you need.
            </p>

            <Link
              href="/lets-talk"
              className="inline-flex cursor-pointer items-center gap-2.5 px-6 py-3 font-heading text-lg font-bold uppercase leading-[1.3] text-navy transition-opacity hover:opacity-80"
            >
              Let&apos;s talk
              <ArrowSquareUpRightIcon className="size-6" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
