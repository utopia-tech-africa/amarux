import Image from "next/image";
import { propertyOverview } from "@/assets/img";
import { Container } from "@/components/container";

export function PropertyOverview() {
  return (
    <section aria-label="Property overview" className="bg-white py-4 md:py-8 lg:py-10">
      <Container>
        <div className="relative aspect-[1280/482] w-full overflow-hidden">
          <Image
            src={propertyOverview}
            alt="Property overview"
            fill
            className="object-cover"
            sizes="100vw"
            priority={false}
          />
        </div>
      </Container>
    </section>
  );
}
