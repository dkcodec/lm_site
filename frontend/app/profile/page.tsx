import Image from "next/image";
import ava2 from "../public/avaExample2.png";
import { Session, getServerSession } from "next-auth";
import TextAnimation from "@/components/TextAnimation";

const Profile = async () => {
  const session = await getServerSession();

  return (
    <main className="grid grid-cols-2 grid-rows-4 min-h-screen items-center justify-center pl-24 pr-24 max-sm:pl-10 max-sm:pr-10">
      <div className="flex items-center justify-center">
        <Image
          src={ava2}
          alt="Account image"
          className="max-h-28 max-w-28 rounded-xl border-2 border-[#Faf] shadow-3xl shadow-[#Faf] max-sm:max-h-16 max-sm:max-w-16"
        />
      </div>
      <div className="text-white">
        <h1>Animated Text Example</h1>
        <TextAnimation text="hello world" />
      </div>
      <div className="">hello</div>
      <div className="">hello</div>
    </main>
  );
};

export default Profile;
