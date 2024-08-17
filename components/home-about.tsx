import Image from "next/image";
import HomeService1 from "../public/images/home-service-1.jpg";
import HomeService2 from "../public/images/home-service-2.jpg";
import HomeService3 from "../public/images/home-service-3.jpg";
import HomeService4 from "../public/images/home-service-4.jpg";
import { Button } from "./ui/button";

export default function HomeAbout() {
  return (
    <section className="bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20 flex gap-5 sm:gap-20 items-center flex-col sm:flex-row">
        <div data-aos="fade-right" className="flex-1 flex flex-col gap-10">
          <h2 className="text-3xl md:text-4xl font-bold">
            Boxe anglaise et thaïlandaise{" "}
          </h2>
          <p className="text-base text-muted-foreground">
            Nous dispensons des cours de boxe anglaise et thaïlandaise pour tous
            les niveaux, de 6 à 76 ans, dans un esprit de petit groupe pour un
            coaching personnalisé. Nous prônons l&apos;excellence dans
            l&apos;enseignement avec des cours adaptés à tous les niveaux.
            <br />
            <br />
            Nos cours commencent par un échauffement et une séance de cardio
            guidée par le coach. Ensuite, nous travaillons sur la technique,
            suivie d&apos;un peu de sparring. Les séances se terminent par des
            exercices d&apos;abdominaux et des étirements, toujours sous la
            supervision du coach. Les séances du samedi sont spécialement axées
            sur les combats, offrant une immersion complète dans
            l&apos;expérience du ring.
          </p>

          <Button size={"lg"} variant={"secondary"} className="w-fit">
            {"S'inscrire !"}
          </Button>
        </div>
        <div data-aos="fade-left" className="flex-1">
          <div className="w-full max-w-lg mx-auto flex flex-col gap-5 ">
            <div className="grid grid-flow-row-dense grid-cols-4 gap-5">
              <Image
                src={HomeService1}
                className="col-span-3 h-full bg-cover"
                alt="Trainer"
              />
              <Image
                src={HomeService2}
                className="col-span-1 h-full bg-cover"
                alt="Boxing Training"
              />
            </div>
            <div className="grid grid-flow-row-dense grid-cols-4 gap-5">
              <Image
                src={HomeService4}
                className="col-span-1 h-full bg-cover"
                alt="Boxing Training"
              />
              <Image
                src={HomeService3}
                className="col-span-3 h-full bg-cover"
                alt="Trainer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
