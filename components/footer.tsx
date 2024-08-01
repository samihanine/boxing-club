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
          </div>
        </div>

        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-border">
          {/* Social as */}
          <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
            <li>
              <a
                href="https://linkedin.com/company/boxingclubcroixrousse"
                rel="noreferrer"
                target="_blank"
                className="flex justify-center items-center text-foreground rounded-full shadow transition duration-150 ease-in-out"
                aria-label="Linkedin"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path
                    fill="currentColor"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                  />
                </svg>
              </a>
            </li>
          </ul>

          {/* Copyrights note */}
          <div className="text-sm text-muted-foreground mr-4">
            &copy; Boxing Club Croix Rousse.fr. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
