import { Container } from "@/components/container";
import { Fragment } from "react";

const TOP_VALUES = [
  {
    title: "Confidentiality",
    description:
      "We safeguard client information and interests with the highest level of discretion, ensuring sensitive matters remain private and protected.",
  },
  {
    title: "Integrity",
    description:
      "We uphold ethical, transparent, and accountable practices, building confidence through honesty and professionalism in every engagement.",
  },
  {
    title: "Trust",
    description:
      "We foster lasting relationships by consistently delivering on our commitments and putting our clients’ interests at the heart of our work.",
  },
] as const;

const BOTTOM_VALUES = [
  {
    title: "Innovation",
    description:
      "We develop practical, tailored solutions that address each client’s unique challenges and deliver smarter, premium and more effective outcomes.",
  },
  {
    title: "Sustainability",
    description:
      "We focus on solutions that create lasting value, supporting responsible decisions and outcomes that remain beneficial for our clients.",
  },
] as const;

function ValueItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-1 flex-col gap-2.5 text-center">
      <h3 className="font-heading text-[clamp(1.125rem,2vw,1.375rem)] font-bold uppercase leading-[1.5] text-navy">
        {title}
      </h3>
      <p className="font-[Verdana,Geneva,sans-serif] text-lg leading-[1.3] text-ink">
        {description}
      </p>
    </div>
  );
}

function ValueDivider() {
  return (
    <div
      className="hidden w-1 shrink-0 self-stretch bg-[#d9d9d9] md:block"
      aria-hidden
    />
  );
}

export function Values() {
  return (
    <section aria-label="Values" className="bg-white py-16 md:py-20 lg:py-24">
      <Container className="flex flex-col items-center gap-12 md:gap-14 lg:gap-[60px]">
        <div className="flex max-w-[40rem] flex-col items-center gap-3 text-center">
          <h2 className="font-heading text-[clamp(1.5rem,2.5vw,2rem)] font-bold uppercase leading-[1.3] text-navy">
            Built on trust,
            <br />
            delivered with care
          </h2>
          <p className="font-[Verdana,Geneva,sans-serif] text-lg leading-[1.3] text-ink">
            AMARUX operates on a verified portfolio model for every sale and
            letting. We offer a complete partnership built on five pillars.
          </p>
        </div>

        <div className="flex w-full flex-col items-center gap-10">
          <div className="flex w-full flex-col gap-8 md:flex-row md:items-stretch md:gap-10">
            {TOP_VALUES.map((value, index) => (
              <Fragment key={value.title}>
                {index > 0 ? <ValueDivider /> : null}
                <ValueItem {...value} />
              </Fragment>
            ))}
          </div>

          <div className="flex w-full max-w-[54.75rem] flex-col gap-8 md:flex-row md:items-stretch md:gap-10">
            {BOTTOM_VALUES.map((value, index) => (
              <Fragment key={value.title}>
                {index > 0 ? <ValueDivider /> : null}
                <ValueItem {...value} />
              </Fragment>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
