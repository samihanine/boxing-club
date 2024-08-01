export default function RegistrationDescription() {
  const elements = [
    {
      title: "Abonnements",
      description:
        "Nous fonctionnons uniquement par abonnement, sans possibilité de cours à la carte. Les cours sont dispensés de <strong>septembre à juin</strong>.",
    },
    {
      title: "Tarifs",
      description:
        "Disponibles pour les <strong>adultes</strong> et <strong>les moins de 16 ans</strong>. Venez tester un cours et rencontrer notre coach ! Cela vous permettra de discuter de vos attentes et de découvrir nos tarifs directement sur place.",
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
          <div className="flex-1 flex flex-col items-center gap-3">
            <h2 className="text-3xl md:text-4xl font-bold w-full text-center">
              Condition d&apos;inscription{" "}
            </h2>

            <p className="text-base text-muted-foreground text-center w-full max-w-4xl">
              Pour vous inscrire, il vous suffit de venir au club lors des
              horaires de cours et de vous présenter à notre coach. Vous pourrez
              ainsi discuter de vos attentes et de vos objectifs, et découvrir
              nos tarifs et nos abonnements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
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
