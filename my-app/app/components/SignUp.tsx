// app/components/SignUp.tsx
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useSignUp, useSignIn } from "@clerk/nextjs";
import { useState } from "react";
import Image from "next/image";

const signUpSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export default function SignUp() {
  const { signUp, isLoaded: isSignUpLoaded } = useSignUp();
  const { signIn, isLoaded: isSignInLoaded } = useSignIn();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data: any) => {
    if (!isSignUpLoaded) return; // Ensure Clerk is loaded before sign-up
    setLoading(true);
    setError(null);

    try {
      const result = await signUp!.create({
        emailAddress: data.email,
        password: data.password,
      });

      // Send email verification
      await signUp!.prepareEmailAddressVerification({ strategy: "email_code" });

      alert("Verification email sent! Please check your email.");
    } catch (err: any) {
      setError(err.errors?.[0]?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  const handleSignIn = async (data: any) => {
    if (!isSignInLoaded || !signIn) {
      setError("Sign-in is not available. Please try again later.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      await signIn.create({
        identifier: data.email,
        password: data.password,
      });

      alert("Successfully signed in!");
      // Redirect to dashboard or any protected route
    } catch (err: any) {
      setError(err.errors?.[0]?.message || "Invalid credentials!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-14">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Sign Up</h2>

        {error && <p className="text-red-500">{error}</p>}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <input
              type="text"
              placeholder="Name"
              {...register("name")}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message?.toString()}</p>}
          </div>

          <div>
            <input
              type="email"
              placeholder="Enter your email"
              {...register("email")}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message?.toString()}</p>}
          </div>

          <div>
            <input
              type="password"
              placeholder="Enter your password"
              {...register("password")}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message?.toString()}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-[#ff9f0d] text-white py-2 rounded-lg font-medium hover:bg-orange-400 transition duration-300"
            disabled={loading}
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>

        <div className="flex items-center my-6">
          <div className="w-full h-px bg-gray-300"></div>
          <span className="mx-4 text-gray-500">OR</span>
          <div className="w-full h-px bg-gray-300"></div>
        </div>

        <button
          onClick={handleSubmit(handleSignIn)}
          className="w-full bg-blue-500 text-white py-2 rounded-lg font-medium hover:bg-blue-400 transition duration-300"
          disabled={loading}
        >
          {loading ? "Signing In..." : "Sign In"}
        </button>

        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-[#ff9f0d] hover:underline font-medium">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
}
