import ParticleBackground from "@/components/particleBackground";
import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

// Страница Логина SSR

// ParticleBackground - компоненет бля baackground Particle
const Login = () => {
  return (
    <>
      <ParticleBackground />
      <div className="font-sans flex max-h-screen flex-col items-center justify-between p-16">
        <div className="bg-[#211A21] p-8 rounded-3xl shadow-mxl shadow-[#Faf] w-96 border-2 border-[#faf]">
          <h1 className="text-4xl text-center font-semibold mb-8">Sign In</h1>
          <form className={styles.log__form}>
            <div className={styles.log__box}>
              <input
                type="email"
                name="user_email"
                className={styles.log__input}
                id="email"
                required
                placeholder="Email Address"
              />
              <label htmlFor="email" className={styles.log__label}>
                Email Address
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

            <button
              type="submit"
              className=" w-full bg-[#211A21] border-2 text-white rounded-md text-xl hover:bg-opacity-0 p-2 mb-2 hover:text-[#Faf] hover:transition-colors hover:ease-in-out hover:duration-100"
            >
              Sign In with GitHub
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
