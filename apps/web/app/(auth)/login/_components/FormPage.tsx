"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
enum Tabs {
  student = "student",
  teacher = "teacher",
}
interface Inputs {
  email: string;
  password: string;
}
export default function FormPage() {
  const [tab, setTab] = React.useState<Tabs>(Tabs.student);
  const LoginSchema = z.object({
    email: z.string().email({ message: "Please enter a valid email" }),
    password: z
      .string()
      .regex(
        /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{4,}$/,
        "Password must be at least 4 characters long and contain at least one uppercase letter, one digit, and one special character",
      ),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(LoginSchema),
  });
  const onSubmit = (data: Inputs) => {
    console.log({ ...data, role: tab });
  };
  return (
    <form
      className="flex w-full flex-col items-center gap-3"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex w-full gap-3 rounded-lg bg-black/15 p-1">
        <button
          onClick={() => setTab(Tabs.student)}
          className={`w-1/2 rounded-lg p-2 transition-colors duration-300 ease-in-out ${tab === Tabs.student ? "bg-white/95 text-slate-800" : "text-slate-600"}`}
        >
          Student
        </button>
        <button
          onClick={() => setTab(Tabs.teacher)}
          className={`w-1/2 rounded-lg p-2 transition-colors duration-300 ease-in-out ${tab === Tabs.teacher ? "bg-white/95 text-slate-800" : "text-slate-600"}`}
        >
          Teacher
        </button>
      </div>
      <input
        type="email"
        placeholder="Email"
        className="input"
        {...register("email")}
      />
      {errors.email && (
        <p className="w-full text-left text-red-500">{errors.email.message}</p>
      )}
      <input
        type="password"
        placeholder="Password"
        className="input"
        {...register("password")}
      />
      {errors.password && (
        <p className="w-full text-left text-red-500">
          {errors.password.message}
        </p>
      )}
      <button type="submit" className="btn">
        Login
      </button>
    </form>
  );
}
