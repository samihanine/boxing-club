import {
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import { Logo } from "./ui/logo";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top area: Blocks */}
        <div className="flex flex-col justify-between sm:flex-row gap-8 py-8 md:py-12 border-t border-border">
          {/* 1st block */}
          <div className="sm:col-span-12 lg:col-span-3">
            <div className="mb-2">
              <Logo className="w-24 h-24 text-primary" />
            </div>
            <div className="text-sm text-muted-foreground">
              <a href="#0" className="text-muted-foreground">
                Terms
              </a>{" "}
              ·{" "}
              <a href="#0" className="text-muted-foreground">
                Privacy Policy
              </a>
            </div>
          </div>

          {/* 4th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-foreground font-medium mb-2">Plan du site</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link href="/" className="text-muted-foreground">
                  Accueil
                </Link>
              </li>
              <li className="mb-2">
                <a href="/services" className="text-muted-foreground">
                  Inscription
                </a>
              </li>

              <li className="mb-2">
                <a href="/about" className="text-muted-foreground">
                  À propos
                </a>
              </li>
              <li className="mb-2">
                <a href="/contact" className="text-muted-foreground">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* 5th block */}
          <div className=" flex flex-col gap-3">
            <h6 className="text-foreground font-medium">Contact</h6>
            <p className="text-sm">
              Email:{" "}
              <a
                href="mailto:contact@immovia.ca"
                className="text-secondary font-medium hover:underline"
              >
                contact@boxingclubcroixrousse.fr
              </a>
            </p>

            <p className="text-sm">
              Téléphone:{" "}
              <a
                href="tel:+3360254850"
                className="text-secondary font-medium hover:underline"
              >
                +3360254850
              </a>
            </p>

            <p className="text-sm">
              Adresse:{" "}
              <span className="text-foreground font-medium">
                1 Rue Dominique Perfetti, 69001 Lyon
              </span>
            </p>
          </div>
        </div>

        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-border">
          <div className="text-sm text-muted-foreground mr-4">
            &copy; Boxing Club Croix Rousse.fr. All rights reserved.
          </div>
          {/* Social as */}
          <ul className="flex mb-4 gap-5">
            <li>
              <a
                href="https://linkedin.com/company/boxingclubcroixrousse"
                rel="noreferrer"
                target="_blank"
                className="flex justify-center items-center text-foreground rounded-full shadow transition duration-150 ease-in-out"
                aria-label="Linkedin"
              >
                <LinkedinIcon size={24} />
              </a>
            </li>

            <li>
              <a
                href="https://instagram.com/boxingclubcroixrousse"
                rel="noreferrer"
                target="_blank"
                className="flex justify-center items-center text-foreground rounded-full shadow transition duration-150 ease-in-out"
                aria-label="Linkedin"
              >
                <InstagramIcon size={24} />
              </a>
            </li>

            <li>
              <a
                href="https://twitter.com/boxingclubcroixrousse"
                rel="noreferrer"
                target="_blank"
                className="flex justify-center items-center text-foreground rounded-full shadow transition duration-150 ease-in-out"
                aria-label="Linkedin"
              >
                <TwitterIcon size={24} />
              </a>
            </li>

            <li>
              <a
                href="https://youtube.com/boxingclubcroixrousse"
                rel="noreferrer"
                target="_blank"
                className="flex justify-center items-center text-foreground rounded-full shadow transition duration-150 ease-in-out"
                aria-label="Linkedin"
              >
                <YoutubeIcon size={24} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
