"use client";

import ParticleBackground from "@/components/particleBackground";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";

// Страница Логина SSR

// ParticleBackground - компоненет бля baackground Particle
const Login = () => {
  const [error, setError] = useState("");
  const router = useRouter();
  // дает статус пользовтеля авторизован или нет (так называемый статус пользователя)
  const session = useSession();

  // используя session через хук useEffect будет переадресация на Home page
  // добавил зависимости на изменение session и router
  useEffect(() => {
    if (session?.status === "authenticated") {
      router.replace("/home");
    }
  }, [session, router]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    if (!password || password.length < 8) {
      setError("This password is invalid");
      return;
    }

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      setError("Invalid Email / User name or Pasword");
      if (res?.url) router.replace("/home");
    } else {
      setError("");
    }
  };

  return (
    <>
      <ParticleBackground />
      <div className="font-sans flex max-h-screen flex-col items-center justify-between p-16">
        <div className="bg-[#211A21] p-8 rounded-3xl shadow-mxl shadow-[#Faf] w-96 border-2 border-[#faf]">
          <h1 className="text-4xl text-center font-semibold mb-8">Sign In</h1>
          <form onSubmit={handleSubmit} className={styles.log__form}>
            <div className={styles.log__box}>
              <input
                type="text"
                name="user_email"
                className={styles.log__input}
                id="email"
                required
                placeholder="Email Address or User name"
              />
              <label htmlFor="email" className={styles.log__label}>
                Email Address or User name
              </label>
            </div>

            <div className={styles.log__box}>
              <input
                type="password"
                name="user_password"
                className={styles.log__input}
                id="password"
                required
                placeholder="Password"
              />
              <label htmlFor="password" className={styles.log__label}>
                Password
              </label>
            </div>

            <button
              type="submit"
              className="block bg-[#211A21] ml-auto mr-auto w-1/2 border-2 text-white rounded-md text-xl hover:bg-opacity-0 mb-5 hover:text-[#Faf] hover:transition-colors hover:ease-in-out hover:duration-100"
            >
              {""}
              Submit
            </button>

            <p className="text-red-600 text-center text-[16px] mb-4">
              {error && error}
            </p>

            <button
              type="submit"
              className=" w-full bg-[#211A21] border-2 text-white rounded-md text-xl hover:bg-opacity-0 p-2 mb-2 hover:text-[#Faf] hover:transition-colors hover:ease-in-out hover:duration-100"
            >
              <div className="flex justify-around">
                <p className="block text-center">Sign In with GitHub</p>
                <div className={styles.iconGitHub}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 0C4.475 0 1.45954e-06 4.475 1.45954e-06 10C-0.00113276 12.0993 0.658815 14.1456 1.88622 15.8487C3.11362 17.5517 4.84615 18.8251 6.838 19.488C7.338 19.575 7.525 19.275 7.525 19.012C7.525 18.775 7.512 17.988 7.512 17.15C5 17.613 4.35 16.538 4.15 15.975C4.037 15.687 3.55 14.8 3.125 14.562C2.775 14.375 2.275 13.912 3.112 13.9C3.9 13.887 4.462 14.625 4.65 14.925C5.55 16.437 6.988 16.012 7.562 15.75C7.65 15.1 7.912 14.663 8.2 14.413C5.975 14.163 3.65 13.3 3.65 9.475C3.65 8.387 4.037 7.488 4.675 6.787C4.575 6.537 4.225 5.512 4.775 4.137C4.775 4.137 5.612 3.875 7.525 5.163C8.33906 4.93706 9.18017 4.82334 10.025 4.825C10.875 4.825 11.725 4.937 12.525 5.162C14.437 3.862 15.275 4.138 15.275 4.138C15.825 5.513 15.475 6.538 15.375 6.788C16.012 7.488 16.4 8.375 16.4 9.475C16.4 13.313 14.063 14.163 11.838 14.413C12.2 14.725 12.513 15.325 12.513 16.263C12.513 17.6 12.5 18.675 12.5 19.013C12.5 19.275 12.688 19.587 13.188 19.487C15.173 18.8168 16.8979 17.541 18.1199 15.8392C19.3419 14.1373 19.9994 12.0951 20 10C20 4.475 15.525 0 10 0Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </button>
          </form>

          <div className="text-sm text-center text-white mt-2 mb-2">— OR —</div>

          <Link
            href="/register"
            className=" block text-sm text-center font-semibold hover:text-[#Faf] hover:transition-colors hover:ease-in-out hover:duration-100"
          >
            Create a new account
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
