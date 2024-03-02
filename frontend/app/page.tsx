"use client";

import { getServerSession } from "next-auth";
import { Comfortaa } from "@next/font/google";
import { redirect } from "next/navigation";
import { signOut } from "next-auth/react";
import NavBar from "@/components/navBar";

const comfortaa = Comfortaa({
  subsets: ["cyrillic", "latin"],
  weight: ["400", "700", "300"],
  variable: "--comfortaa",
});

export default async function Home() {
  const userSes = await getServerSession();
  if (!userSes) {
    redirect("/login");
  }

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className="flex min-h-screen flex-col items-center justify-between pl-24 pr-24 max-sm:pl-10 max-sm:pr-10"></main>
    </>
  );
}
