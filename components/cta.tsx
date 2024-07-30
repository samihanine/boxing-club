import ContactButton from "./contact-button";

export default function HomeAbout() {
  return (
    <section>
      <div className="py-12 md:py-20 bg-secondary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="relative max-w-3xl mx-auto text-center pb-12 md:pb-16 flex flex-col items-center gap-10">
            <h2 className="text-3xl md:text-4xl font-bold text-background">
              S&apos;ENTRAÎNER, COMBATTRE, GAGNER
            </h2>

            <p className="text-lg text-muted-foreground">
              Contactez-nous pour découvrir nos abonnements et nos services pour
              vous aider à atteindre vos objectifs. Nous vous accompagnons dans
              votre entraînement, votre préparation physique et mentale, et
              votre récupération.
            </p>

            <ContactButton />
          </div>
        </div>
      </div>
    </section>
  );
}
