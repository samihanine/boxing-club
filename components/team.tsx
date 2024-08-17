import Image from "next/image";
import AbdelChaaba from "../public/images/abdel-chaaba.png";
import SarahHanine from "../public/images/sarah-hanine.png";
import Mohammed from "../public/images/mohammed.png";
import Placeholder from "../public/images/team-placeholder.png";

export default function Team() {
  const members = [
    {
      name: "Hacene",
      role: "Président du club",
      image: Placeholder,
    },
    {
      name: "Abdel",
      role: "Gérent du club et coach de thaï",
      image: AbdelChaaba,
    },
    {
      name: "Mohammed",
      role: "Coach d'anglaise",
      image: Mohammed,
    },
    {
      name: "Sarah",
      role: "Secrétaire du club",
      image: SarahHanine,
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
                <Image
                  className="object-cover h-full"
                  src={member.image}
                  alt={member.name}
                />

                <div className="flex flex-col gap-2 items-center h-full justify-end w-full mt-5">
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
