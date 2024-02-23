import React from "react";
import styles from "./page.module.css";

const Register = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="bg-[#211A21] p-8 rounded shadow-md w-96">
        <h1 className="text-4xl text-center font-semibold mb-8">Sign Up</h1>
        <form>
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
        </form>
      </div>
    </div>
  );
};

export default Register;
