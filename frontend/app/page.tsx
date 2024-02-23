import Image from "next/image";
import { Comfortaa } from "@next/font/google";

const comfortaa = Comfortaa({
  subsets: ["cyrillic", "latin"],
  weight: ["400", "700", "300"],
  variable: "--comfortaa",
});

export default function Home() {
  return (
    <>
      <main className=" flex min-h-screen flex-col items-center justify-between p-24">
        <h1>Home page</h1>
      </main>
    </>
  );
}
