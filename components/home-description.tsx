import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

export default function HomeDescription() {
  return (
    <section>
      <div className="py-12 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex gap-10 flex-col sm:flex-row items-center">
          <div data-aos="fade-right" className="flex-1">
            <Link href="/about">
              <Image
                src="/images/home-description.jpg"
                width={1920}
                height={1080}
                className="max-w-md h-auto w-full mx-auto grayscale hover:grayscale-0"
                alt="Home description"
              />
            </Link>
          </div>

          <div
            data-aos="fade-left"
            className="flex-1 flex flex-col items-center gap-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold w-full">
              Qui sommes-nous ?{" "}
            </h2>

            <p className="text-base text-muted-foreground">
              Niché dans les pentes de la Croix-Rousse à Lyon, notre club
              historique, fondé en 1947 et présidé par Hacene Cherifi. Il offre
              une immersion dans la boxe anglaise et thaïlandaise pour tous.
              <br />
              <br />
              Situé au gymnase Genty, nous proposons des cours adaptés à tous
              les niveaux, avec un coaching personnalisé en petits groupes. Nos
              valeurs sont la qualité, la cohésion, et l'engagement
              communautaire, notamment contre les violences faites aux femmes et
              la pédophilie dans le sport.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
