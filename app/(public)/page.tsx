import Hero from "@/components/hero";
import Cta from "@/components/cta";
import HomeAbout from "@/components/home-about";
import HomeDescription from "@/components/home-description";
import HomeStats from "@/components/home-stats";

export default function Page() {
  return (
    <>
      <Hero />
      <HomeStats />
      <HomeDescription />
      <HomeAbout />
      <Cta />
    </>
  );
}
