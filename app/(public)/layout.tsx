import Footer from "@/components/footer";
import Header from "@/components/header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Boxing Club Croix Rousse",
  description:
    "Boxing Club Croix Rousse est une agence de chauffeurs privés à Lyon",
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />

      <main className="w-full h-full">{children}</main>

      <Footer />
    </>
  );
}
