import { Container } from "@/components/container";

export function HomeAbout() {
  return (
    <section id="about" aria-label="About" className="bg-white py-16 md:py-20 lg:py-24">
      <Container className="grid gap-8 md:grid-cols-2 md:items-start md:gap-12 lg:gap-16 xl:gap-[5.5rem]">
        <h2 className="font-heading text-[clamp(1.5rem,2.5vw,2rem)] font-bold uppercase leading-[1.3] text-navy">
          You’re probably asking what Amarux is, here’s your answer
        </h2>
        <p className="max-w-[34rem] font-[Verdana,Geneva,sans-serif] text-lg leading-[1.3] text-ink">
          We provide a complete 360° partnership with a variety of services,
          including property management, expert dispute resolution, and
          professional paralegal support. With us, you’ll find everything you
          need conveniently under one trusted roof, ensuring a smooth experience
          for all your legal and property needs.
        </p>
      </Container>
    </section>
  );
}
