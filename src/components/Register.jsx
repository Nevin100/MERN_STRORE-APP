import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";

const Register = () => {
  const [message, setmessage] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const handleGoogleSignIn = () => {};
  return (
    <div className="h-[calc(100vh-120px)] flex justify center items-center">
      <div className="w-full max-w-sm mx-auto bg-neutral-200/85 shadow-lg rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl font-semibold mb-3 text-center text-gray-800">
          Please Register
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-md font-bold mb-2 "
              htmlFor="email"
            >
              Email
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              name="email"
              id="email"
              placeholder="Email Address "
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-md font-bold mb-2 "
              htmlFor="password"
            >
              Password
            </label>
            <input
              {...register("password", { required: true })}
              type="password"
              name="password"
              id="password"
              placeholder="Password "
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow"
            />
          </div>
          {message && <p className="text-red-500 text-sm py-1">{message}</p>}
          <div className="flex justify-center items-center">
            <button className="bg-blue-500 hover:bg-blue-700 w-full text-white font-bold py-2 px-8 rounded-lg focus:outline-none">
              Register
            </button>
          </div>
        </form>
        <p className="align-baseline font-medium mt-4 text-md text-center">
          Have an Account?? Please{" "}
          <Link to="/login" className="text-blue-500">
            Login
          </Link>
        </p>
        <div className="mt-4">
          <button
            onClick={handleGoogleSignIn}
            className="w-full flex flex-wrap gap-1 justify-center items-center bg-secondary hover:bg-blue-500 text-white rounded font-bold py-2 px-4 focus:outline-none"
          >
            <FaGoogle mr-2 />
            Sign in with Google
          </button>
        </div>
        <p className="mt-5 text-center text-gray-500 text-sm">
          2025 BookStore. All rights reserved.{" "}
        </p>
      </div>
    </div>
  );
};

export default Register;
