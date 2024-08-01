import "aos/dist/aos.css";
import type { Metadata } from "next";
import { Libre_Franklin } from "next/font/google";
import "./globals.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const font = Libre_Franklin({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Boxing Club Croix Rousse",
  description:
    "Boxing Club Croix Rousse est une association sportive de boxe anglaise et thaïlandaise située à Lyon. Venez découvrir nos cours de boxe pour tous les niveaux.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${font.className}`}>
        <ToastContainer />
        {children}
      </body>
    </html>
  );
}
