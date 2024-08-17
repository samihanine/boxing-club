export default function RegistrationDescription() {
  const elements = [
    {
      title: "Abonnements",
      description:
        "Nous fonctionnons uniquement par abonnement, sans possibilité de cours à la carte. Les cours sont dispensés de septembre à juin. Pour connaître nos tarifs d'abonnement, veuillez <strong>parler directement avec notre coach</strong> qui vous fournira toutes les informations nécessaires.",
    },
    {
      title: "Équipement",
      description:
        "Le club propose à la vente un <strong>pack d'équipement à 60 €</strong> incluant gants, bandes, corde à sauter et protège-dents. Aucun prêt ou location de matériel n'est disponible pour des raisons sanitaires.",
    },
  ];

  return (
    <section>
      <div className="py-12 md:py-20 bg-[#E8E5D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex gap-10 sm:gap-12 flex-col items-center">
          <div
            data-aos="fade-up"
            className="flex-1 flex flex-col items-center gap-3"
          >
            <h2 className="text-3xl md:text-4xl font-bold w-full text-center">
              Condition d&apos;inscription{" "}
            </h2>

            <p className="text-base text-muted-foreground text-center w-full max-w-4xl">
              Avant de vous inscrire, testez un entraienement lors d’une séance
              gratuite. Vous pourrez discuter de vos attentes et objectifs, et
              découvrir nos tarifs et abonnements. Pour la réserver cliquer sur
              ce{" "}
              <a
                href="https://forms.gle/iTc5UJbZT4QzHcBG9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-bold"
              >
                lien
              </a>
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {elements.map((element, index) => (
              <div key={index} className="flex flex-col" data-aos="fade-up">
                <div className="bg-secondary text-background p-5">
                  <h3 className="text-2xl font-medium text-center">
                    {element.title}
                  </h3>
                </div>
                <div className="bg-background p-5 py-10 flex-1">
                  <p
                    className="text-base text-foreground"
                    dangerouslySetInnerHTML={{ __html: element.description }}
                  ></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
