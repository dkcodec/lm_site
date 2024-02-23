"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import ParticleBackground from "@/components/particleBackground";
import Link from "next/link";
import { useRouter } from "next/navigation";

// регистрация

// isValidEmail - проверка на валидность email
// handleSubmit - реализация POST через Api в бек с последущим в БД

// ParticleBackground - компоненет бля baackground Particle
const Register = () => {
  const [error, setError] = useState("");
  const router = useRouter();

  const isValidEmail = (email: string) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    if (!isValidEmail(email)) {
      setError("This email is invalid");
      return;
    }

    if (!password || password.length < 8) {
      setError("This password is invalid");
      return;
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

  return (
    <>
      <ParticleBackground />
      <div className="font-sans flex max-h-screen flex-col items-center justify-between p-16">
        <div className="bg-[#211A21] p-8 rounded-3xl shadow-mxl shadow-[#Faf] w-96 border-2 border-[#faf]">
          <h1 className="text-4xl text-center font-semibold mb-8">Sign Up</h1>
          <form onSubmit={handleSubmit} className={styles.reg__form}>
            <div className={styles.reg__box}>
              <input
                type="email"
                name="user_email"
                className={styles.reg__input}
                id="email"
                required
                placeholder="Email Address"
              />
              <label htmlFor="email" className={styles.reg__label}>
                Email Address
              </label>
            </div>

            <div className={styles.reg__box}>
              <input
                type="password"
                name="user_password"
                className={styles.reg__input}
                id="password"
                required
                placeholder="Password"
              />
              <label htmlFor="password" className={styles.reg__label}>
                Password
              </label>
            </div>

            <button
              type="submit"
              className="block mb-5 bg-[#211A21] ml-auto mr-auto w-1/2 border-2 text-white rounded-md text-xl hover:bg-opacity-0 hover:text-[#Faf] hover:transition-colors hover:ease-in-out hover:duration-100 "
            >
              Submit
            </button>
            <p className="text-red-600 text-center text-[16px] mb-4">
              {error && error}
            </p>
          </form>

          <div className="text-sm text-center text-white mt-2 mb-2">— OR —</div>

          <Link
            href="/login"
            className=" block text-sm text-center font-semibold hover:text-[#Faf] hover:transition-colors hover:ease-in-out hover:duration-100"
          >
            Login with an existing account
          </Link>
        </div>
      </div>
    </>
  );
};

export default Register;
