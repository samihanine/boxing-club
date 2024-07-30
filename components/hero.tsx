import HomeHeroImage from "../public/images/home-hero.jpg";
import ContactButton from "./contact-button";

export default function Hero() {
  const heroBackgroundStyle = {
    backgroundImage: `url(${HomeHeroImage.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div
      style={heroBackgroundStyle}
      className="relative min-h-screen h-fit bg-black w-full flex bg-cover justify-center items-center"
    >
      <div className="absolute inset-0 bg-opacity-50"></div>

      <div className="z-10 w-full pt-20 px-4 sm:px-10 min-h-screen h-fit flex justify-center flex-col gap-10 max-w-7xl">
        <h1 className="text-background text-4xl sm:text-7xl font-medium tracking-wider w-full max-w-lg">
          DEVENEZ UN CHAMPION AVEC NOUS
        </h1>

        <ContactButton className="w-fit" />
      </div>
    </div>
  );
}
