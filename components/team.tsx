import Image from "next/image";
import AbdelChaaba from "../public/images/abdel-chaaba.jpg";
export default function Team() {
  const members = [
    {
      name: "Hacene",
      role: "Président du club",
      image: AbdelChaaba,
    },
    {
      name: "Abdel",
      role: "Gérent du club et coach de thaï",
      image: AbdelChaaba,
    },
    {
      name: "Mohammed",
      role: "Coach d'anglaise",
      image: AbdelChaaba,
    },
    {
      name: "Sarah",
      role: "Secrétaire du club",
      image: AbdelChaaba,
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
              Notre équipe
            </h2>

            <p className="text-base text-muted-foreground text-center w-full max-w-4xl">
              Découvrez les membres de notre équipe, tous passionnés par la boxe
              et la préparation physique.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {members.map((member, index) => (
              <div key={index} className="flex flex-col" data-aos="fade-up">
                <Image src={member.image} alt={member.name} />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

                <div className="flex flex-col gap-2 items-center absolute text-white h-full justify-end w-full p-5">
                  <h3 className="text-2xl font-medium text-center">
                    {member.name}
                  </h3>
                  <p className="text-secondary font-medium text-center">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
