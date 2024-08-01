"use client";

import AOS from "aos";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { useEffect } from "react";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
      <Header />

      <main className="w-full h-full">{children}</main>

      <Footer />
    </>
  );
}
