export default function HomeStats() {
  return (
    <section>
      <div className="py-6 md:py-9 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex gap-10 flex-col sm:flex-row items-center">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <dl className="grid grid-cols-1 gap-x-12 gap-y-16 text-center lg:grid-cols-3">
              <div
                data-aos="fade-right"
                className="mx-auto flex max-w-xs flex-col gap-y-4"
              >
                <dt className="text-base leading-7 text-background">
                  Quantité de femme adhérentes
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-background sm:text-5xl">
                  50%
                </dd>
              </div>
              <div
                data-aos="zoom-in"
                className="mx-auto flex max-w-xs flex-col gap-y-4"
              >
                <dt className="text-base leading-7 text-background">
                  Nombre d'adhérents actifs, chaque année
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-background sm:text-5xl">
                  100+
                </dd>
              </div>

              <div
                data-aos="fade-left"
                className="mx-auto flex max-w-xs flex-col gap-y-4"
              >
                <dt className="text-base leading-7 text-background">
                  {" "}
                  Fondé il y a plus de 70 ans
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-background sm:text-5xl">
                  1947
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
