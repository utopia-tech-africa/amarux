import {
  ClientLogos,
  HomeAbout,
  HomeCta,
  HomeHero,
  PropertyListings,
  PropertyOverview,
  Services,
  Values,
} from "./components";

export default function HomePage() {
  return (
    <main className="flex-1">
      <HomeHero />
      <HomeAbout />
      <ClientLogos />
      <Services />
      <Values />
      <PropertyListings />
      <PropertyOverview />
      <HomeCta />
    </main>
  );
}
