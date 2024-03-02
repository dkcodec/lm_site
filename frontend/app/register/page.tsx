"use client";

import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import ParticleBackground from "@/components/particleBackground";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import InputLogReg from "@/components/inputLogReg";

// регистрация

// isValidEmail - проверка на валидность email
// handleSubmit - реализация POST через Api в бек с последущим в БД

// ParticleBackground - компоненет бля baackground Particle
const Register = () => {
  const [error, setError] = useState("");
  const router = useRouter();

  const { data: session, status: sessionSatus } = useSession();

  // используя session через хук useEffect будет переадресация на Home page
  // добавил зависимости на изменение session и router
  useEffect(() => {
    if (sessionSatus === "authenticated") {
      router.replace("/");
    }
  }, [sessionSatus, router]);

  const isValidEmail = (email: string) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const username = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    if (!isValidEmail(email)) {
      setError("This email is invalid");
      return;
    }

    if (!password || password.length < 8) {
      setError("This password is invalid");
      return;
    }

    if (!username || username.length < 4) {
      setError("This user name is invalid or length less than 4");
    }

    try {
      const response = await fetch("", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          username,
        }),
      });

      if (response.status === 401) {
        setError("This email is alredy registered");
      }

      if (response.status === 200) {
        setError("");
        router.push("/login");
      }
    } catch (error) {
      setError("Error, try again :(");
      console.log(error);
    }
  };

  if (sessionSatus === "loading") {
    return <h1>Loagind...</h1>;
  }

  return (
    sessionSatus == "authenticated" && (
      <>
        <ParticleBackground />
        <div className="font-sans flex max-h-screen flex-col items-center justify-between p-14  max-sm:pt-40 max-sm:pb-0">
          <div className="bg-[#211a21a4] p-8 rounded-3xl shadow-3xl shadow-[#ffaaffa7] w-96 border-2 border-[#faf] backdrop-blur-xs max-sm:w-60 max-sm:p-5">
            <h1 className="text-4xl text-center font-semibold mb-8 max-sm:mb-4 max-sm:text-2xl">
              Sign Up
            </h1>
            <form onSubmit={handleSubmit} className={styles.reg__form}>
              <div className={styles.reg__box}>
                <InputLogReg
                  type="text"
                  name="user_name"
                  className={styles.reg__input}
                  id="username"
                  placeholder="User name"
                />
                <label htmlFor="username" className={styles.reg__label}>
                  User name
                </label>
              </div>

              <div className={styles.reg__box}>
                <InputLogReg
                  type="email"
                  name="user_email"
                  className={styles.reg__input}
                  id="email"
                  placeholder="Email Address"
                />
                <label htmlFor="email" className={styles.reg__label}>
                  Email Address
                </label>
              </div>

              <div className={styles.reg__box}>
                <InputLogReg
                  type="password"
                  name="user_password"
                  className={styles.reg__input}
                  id="password"
                  placeholder="Password"
                />
                <label htmlFor="password" className={styles.reg__label}>
                  Password
                </label>
              </div>

              <button
                type="submit"
                className="block mb-5 bg-[#211A21] ml-auto mr-auto w-1/2 border-2 text-white rounded-md text-xl hover:bg-opacity-0 hover:text-[#Faf] hover:transition-colors hover:ease-in-out hover:duration-100 max-sm:mb-3 max-sm:text-sm"
              >
                Submit
              </button>
              <p className="text-red-600 text-center text-[16px] mb-4 max-sm:mb-2">
                {error && error}
              </p>
            </form>

            <div className="text-sm text-center text-white mt-2 mb-2">
              — OR —
            </div>

            <Link
              href="/login"
              className=" block text-sm text-center font-semibold hover:text-[#Faf] hover:transition-colors hover:ease-in-out hover:duration-100"
            >
              Login with an existing account
            </Link>
          </div>
        </div>
      </>
    )
  );
};

export default Register;
