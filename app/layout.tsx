import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
import { Libre_Franklin } from "next/font/google";
import "./globals.css";

const font = Libre_Franklin({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Boxing Club Croix Rousse",
  description:
    "Boxing Club Croix Rousse est une agence de chauffeurs privés à Lyon",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${font.className}`}>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
