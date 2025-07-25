import React, { JSX } from "react";
import Header from "@/components/home/Header";
import Main from "@/components/home/Main";
import Footer from "@/components/home/Footer";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}
