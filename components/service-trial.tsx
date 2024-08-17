import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

export default function ServiceTrial() {
  return (
    <section>
      <div className="py-12 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex gap-8 sm:gap-20 flex-col sm:flex-row items-center">
          <div data-aos="fade-right" className="flex-1">
            <Image
              src="/images/service-trial.jpg"
              width={1920}
              height={1080}
              className="h-auto w-full mx-auto"
              alt="Home description"
            />
          </div>

          <div data-aos="fade-left" className="flex-1 flex flex-col gap-10">
            <h2 className="text-3xl md:text-4xl font-bold w-full">
              Première séance gratuite !{" "}
            </h2>

            <p className="text-base text-muted-foreground">
              Votre première séance est un cours d&apos;essai offert, pour
              lequel vous n&apos;avez besoin que de votre tenue de sport. Aucun
              équipement spécifique n&apos;est nécessaire. Pour vous inscrire,
              veuillez remplir le formulaire ci-dessous.
            </p>

            <a
              href="https://forms.gle/iTc5UJbZT4QzHcBG9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size={"lg"} variant={"secondary"} className="w-fit">
                Remplir le formulaire d&apos;inscription
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
