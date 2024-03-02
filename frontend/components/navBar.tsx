import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import ava from "../app/public/avaExample.png";
import ava2 from "../app/public/avaExample2.png";
import { signOut } from "next-auth/react";

const NavBar = async () => {
  const userSes = await getServerSession();
  if (!userSes) {
    redirect("/login");
  }
  return (
    <div className="flex p-5 justify-around m-8 items-center bg-[#211a21a4] rounded-3xl shadow-3xl shadow-[#ffaaffa7] border-2 border-[#faf] max-sm:p-3 max-sm:m-5">
      <Link
        href="/profile"
        className="flex justify-between items-center w-96 max-sm:mr-5"
      >
        <div>
          <Image
            src={ava2}
            alt="Account image"
            className=" max-h-20 max-w-20 rounded-xl max-sm:max-h-10 max-sm:max-w-10"
          />
        </div>
        <div className="flex justify-between items-center max-w-96 max-sm:max-w-20">
          <div className=" text-xl max-w-40 max-sm:max-w-20 max-sm:text-sm">
            {userSes.user?.name}
          </div>
        </div>
      </Link>
      <button
        onClick={() => {
          signOut();
        }}
        className="p-2 px-5 bg-[#211A21] text-xl border rounded-full border-[#fafb] max-sm:p-1 max-sm:px-3 max-sm:text-sm"
      >
        LogOut
      </button>
    </div>
  );
};

export default NavBar;
