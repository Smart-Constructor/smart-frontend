"use client";

import Logo from "@/components/Logo";
import LabelComponent from "@/components/ui/Login/Label";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation"
import { useState } from "react";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const router = useRouter();

  const handleForm = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const promise = await axios.post(
        "http://localhost:3000/auth/signin",
        form
      );
      localStorage.setItem("token", promise.data.access_token);
      router.push('/dashboard');
    } catch (error: any) {
      console.log(error.response.data.error);
    }
  };

  return (
    <main className="flex items-center justify-center w-screen h-screen bg-gradient-to-tr from-cyan-900 to-cyan-300">
      <div className="flex flex-col items-center w-3/12 h-4/6 bg-white m-auto rounded-3xl shadow-xl box-border p-5">
        <Logo />
        <h1 className="text-3xl font-bold text-cyan-950 mb-24">Bem-vindo !</h1>
        <form
          className="flex flex-col items-center w-10/12 h-full gap-8"
          onSubmit={handleSubmit}
        >
          <LabelComponent
            label="E-mail"
            placeholder="E-mail"
            type="email"
            handleForm={handleForm}
          />
          <LabelComponent
            label="Password"
            placeholder="Password"
            type="password"
            handleForm={handleForm}
          />
          <button
            type="submit"
            className="w-10/12 h-12 bg-cyan-700 rounded-xl text-white font-bold hover:bg-cyan-600 active:bg-cyan-900
           focus:ring ring-cyan-300/50 mt-4"
          >
            Entrar
          </button>
          <Link
            href="/signup"
            className="mt-6 text-base text-cyan-700 font-medium hover:text-cyan-500"
          >
            <h2>Ainda não tem uma conta? Clique aqui!</h2>
          </Link>
        </form>
      </div>
    </main>
  );
}
