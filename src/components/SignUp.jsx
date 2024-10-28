

import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import coding from '../assets/images/coding.png';
import { Link } from "react-router-dom";


const MySchema = z.object({
  fname: z.string().min(1, "First name is required"),
  lname: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(MySchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen m-0 font-sans bg-background-color">
        <div className="signup-page flex w-[70%] bg-white shadow-[0_0_10px_rgba(0,0,0,0.1)] rounded-[10px] overflow-hidden">
          <img
            className="designer_avatar w-6/12 bg-main-color object-cover"
            src={coding}
            alt="developer_avatar"
          />

          <form 
            id="signupForm"
            onSubmit={handleSubmit(onSubmit)}
            className="w-6/12 p-5 flex flex-col justify-center"
          >
            <h1 className="mb-5 text-primary-text-button-color font-bold text-center text-[32px]">
              Join Coders Now!
            </h1>

            <input
              type="text"
              {...register("fname")}
              placeholder="First Name"
              className="form-control mb-[15px] p-2.5 border border-solid bg-main-color text-white placeholder-white rounded"
            />
            {errors.fname && <p className="text-red-500">{errors.fname.message}</p>}

            <input
              type="text"
              {...register("lname")}
              placeholder="Last Name"
              className="form-control mb-[15px] p-2.5 border border-solid bg-main-color text-white placeholder-white rounded"
            />
            {errors.lname && <p className="text-red-500">{errors.lname.message}</p>}

            <input
              type="email"
              {...register("email")}
              placeholder="Email"
              className="form-control mb-[15px] p-2.5 border border-solid bg-main-color text-white placeholder-white rounded"
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}

            <input
              type="password"
              {...register("password")}        
              placeholder="Password"
              className="form-control mb-[15px] p-2.5 border border-solid bg-main-color text-white placeholder-white rounded"
            />
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}

            <button
              type="submit"
              className="bg-[#007BFF] text-white no-underline py-2 px-4 rounded hover:bg-[#0056b3] transition duration-200 ease-in-out"
            >
              Sign up
            </button>

            <p className="mt-2.5 text-center text-[#666666]">
              Already have an account? <Link to="/signin" className="text-[#007BFF] no-underline">
                Log in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
