import React, { useState } from "react";
import coding from '../assets/images/coding.png'

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: false, password: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {
      email: !email,
      password: !password,
    };
    setErrors(newErrors);

    if (!newErrors.email && !newErrors.password) {
  
      console.log("Logged in successfully");
    }
  };

  return (
    <div className="login-mail flex justify-center items-center h-screen m-0 font-sans bg-background-color">
      <div className="signing-page flex w-[70%] bg-white shadow-[0_0_10px_rgba(0,0,0,0.1)] rounded-[10px] overflow-hidden">
        <img
          className="designer_avatar w-6/12 bg-main-color object-cover"
          src={coding}
          alt="developer_avatar"
        />
        <form
          id="loginForm"
          onSubmit={handleSubmit}
          className="w-6/12 p-5 flex flex-col justify-center"
        >
          <h1 className="mb-5 text-primary-text-button-color font-bold text-center text-[32px]">
            Login Now!
          </h1>

          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="mb-[15px] p-2.5 border border-solid bg-main-color text-white placeholder-white"
          />
          {errors.email && (
            <p className="error" id="emailError">
              Email is required!
            </p>
          )}

          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="mb-[15px] p-2.5 border border-solid bg-main-color text-white placeholder-white"
          />
          {errors.password && (
            <p className="error" id="passwordError">
              Password is required!
            </p>
          )}

          <input
            type="submit"
            id="submit"
            value="Sign In"
            className="bg-[#007BFF] text-white mb-[15px] p-2.5 border-solid"
          />

          <p className="mt-2.5 text-center text-[#666666]">
            New to CodeCLA?{" "}
            <a href="#" className="text-[#007BFF] no-underline">
              Sign Up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
