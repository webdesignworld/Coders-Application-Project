import React, { useState } from 'react';
import coding from '../assets/images/coding.png'

const SignUp = () => {
  const [form, setForm] = useState({
    fname: '',
    lname: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    fname: false,
    lname: false,
    email: false,
    password: false,
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm({ ...form, [id]: value });
    setErrors({ ...errors, [id]: !value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      fname: !form.fname,
      lname: !form.lname,
      email: !form.email,
      password: !form.password,
    };
    setErrors(newErrors);

    if (!Object.values(newErrors).includes(true)) {
    
      console.log("Form submitted successfully");
    }
  };

  return (
    <div className="signup_mail flex justify-center items-center h-screen m-0 font-sans bg-background-color">
      <div className="signup_form flex w-[70%] bg-white shadow-[0_0_10px_rgba(0,0,0,0.1)] rounded-[10px] overflow-hidden">
        <img
          className="developer_avatar w-6/12 bg-main-color object-cover"
          src={coding}
          alt="developer_avatar"
        />

        <form
          id="signupForm"
          onSubmit={handleSubmit}
          className="w-6/12 p-5 flex flex-col justify-center"
        >
          <h1 className="mb-5 text-primary-text-button-color font-bold text-center text-[32px]">
            Join Coders Now!
          </h1>

          <input
            type="text"
            id="fname"
            placeholder="First Name"
            value={form.fname}
            onChange={handleChange}
            className="mb-[15px] p-2.5 border border-solid bg-main-color text-white placeholder-white"
          />
          {errors.fname && <p className="error" id="fnameError">First Name is required!</p>}

          <input
            type="text"
            id="lname"
            placeholder="Last Name"
            value={form.lname}
            onChange={handleChange}
            className="mb-[15px] p-2.5 border border-solid bg-main-color text-white placeholder-white"
          />
          {errors.lname && <p className="error" id="lnameError">Last Name is required!</p>}

          <input
            type="text"
            id="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="mb-[15px] p-2.5 border border-solid bg-main-color text-white placeholder-white"
          />
          {errors.email && <p className="error" id="emailError">Email is required!</p>}

          <input
            type="password"
            id="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="mb-[15px] p-2.5 border border-solid bg-main-color text-white placeholder-white"
          />
          {errors.password && <p className="error" id="passwordError">Password is required!</p>}

          <input
            type="submit"
            id="submit"
            value="Sign Up"
            className="bg-[#007BFF] text-white mb-[15px] p-2.5 border-solid"
          />
          
          <p className="mt-2.5 text-center text-[#666666]">
            Already have an account?{" "}
            <a
              href="./login.html"
              target="_blank"
              className="text-[#007BFF] no-underline"
            >
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
