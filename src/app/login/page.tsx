import Logo from "@/components/Logo";
import LabelComponent from "@/components/ui/Login/Label";
import Link from "next/link";

export default function Login() {
  return (
    <main className="flex items-center justify-center w-screen h-screen bg-gradient-to-tr from-cyan-900 to-cyan-300">
      <div className="flex flex-col items-center w-3/12 h-4/6 bg-white m-auto rounded-3xl shadow-xl box-border p-5">
        <Logo />
        <h1 className="text-3xl font-bold text-cyan-950 mb-24">Bem-vindo de volta!</h1>
        <form className="flex flex-col items-center w-10/12 h-full gap-8">
          <LabelComponent
            label="E-mail"
            placeholder="E-mail"
            type="email"
          />
          <LabelComponent
            label="Password"
            placeholder="Password"
            type="password"
          />
          <button
            type="submit"
            className="w-10/12 h-12 bg-cyan-700 rounded-xl text-white font-bold hover:bg-cyan-600 active:bg-cyan-900
           focus:ring ring-cyan-300/50 mt-4"
          >
            Entrar
          </button>
          <Link href="/signup" className="mt-6 text-base text-cyan-700 font-medium hover:text-cyan-500">
            <h2>Ainda não tem uma conta? Clique aqui!</h2>
          </Link>
        </form>
      </div>
    </main>
  );
}
