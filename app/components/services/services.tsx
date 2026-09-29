import { SERVICE_IMAGES } from "@/assets/img";
import { Container } from "@/components/container";
import { ServiceCard } from "./service-card";

const SERVICES = [
  {
    title: "Property Due Diligence & Brokerage",
    description:
      "Comprehensive analysis and facilitation of property transactions.",
    image: SERVICE_IMAGES.property,
  },
  {
    title: "Mortgage Advisory",
    description: "Guidance on financing options and mortgage solutions.",
    image: SERVICE_IMAGES.mortgage,
  },
  {
    title: "Alternative Dispute Resolution (ADR)",
    description:
      "Mediation and arbitration services to resolve conflicts efficiently.",
    image: SERVICE_IMAGES.adr,
  },
  {
    title: "Paralegal Services",
    description:
      "Support with legal documentation, compliance, and advisory assistance.",
    image: SERVICE_IMAGES.paralegal,
  },
] as const;

export function Services() {
  return (
    <section id="services" aria-label="Services" className="bg-white py-16 md:py-20">
      <Container className="flex flex-col gap-6 md:gap-8">
        <div className="flex max-w-[40rem] flex-col gap-3">
          <h2 className="font-heading text-[clamp(1.5rem,2.5vw,2rem)] font-bold uppercase leading-[1.3] text-navy">
            Curious about what we offer? Let’s dive into our services
          </h2>
          <p className="font-[Verdana,Geneva,sans-serif] text-lg leading-[1.3] text-ink">
            A 360° partnership across property, dispute resolution, and paralegal
            services. Everything you need under one trusted roof.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => (
            <li key={service.title}>
              <ServiceCard {...service} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
