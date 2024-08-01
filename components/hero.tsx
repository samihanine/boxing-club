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
      className="relative bg-fixed min-h-[calc(100vh-80px)] h-fit bg-black w-full flex bg-cover justify-center items-center"
    >
      <div className="absolute inset-0 bg-opacity-50"></div>

      <div
        data-aos="fade-right"
        className="z-10 w-full pt-20 px-4 sm:px-10 min-h-full h-fit flex justify-center flex-col gap-10 max-w-7xl"
      >
        <h1 className="text-background text-4xl sm:text-7xl font-bold tracking-wider w-full max-w-lg">
          Vos cours de boxe thaï et anglaise à Lyon
        </h1>

        <ContactButton className="w-fit" />
      </div>
    </div>
  );
}
