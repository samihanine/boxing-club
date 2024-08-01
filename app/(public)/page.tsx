import Hero from "@/components/hero";
import Cta from "@/components/cta";
import HomeAbout from "@/components/home-about";
import HomeDescription from "@/components/home-description";
import HomeStats from "@/components/home-stats";
import HomeOpeningHours from "@/components/home-opening-hours";

export default function Page() {
  return (
    <>
      <Hero />
      <HomeStats />
      <HomeDescription />
      <HomeAbout />
      <HomeOpeningHours />
      <Cta />
    </>
  );
}
