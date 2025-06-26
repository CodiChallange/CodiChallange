import { Button } from "@/Components/ui/button";
import { useForm } from "react-hook-form";

import CodiLogo from "../assests/CodiLogo.png";
import CodiLogoAside from "../assests/CodiLogoAside.png";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router-dom";

import { Mail, LockKeyhole } from "lucide-react";

const formSchema = z.object({
  email: z
    .string({ message: "O campo email é obrigatório" })
    .email({ message: "Digite um email válido" }),

  password: z.string({ message: "O campo senha é obrigatório" }),
});

type formSchema = z.infer<typeof formSchema>;

export function Logon() {
  const navigate = useNavigate();

  function handleNextDashboard() {
    navigate("/dashboard");
  }
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<formSchema>({
    resolver: zodResolver(formSchema),
  });
  return (
    <div className="from-fuchia-500 flex h-screen bg-linear-60 to-purple-900">
      <div className="flex w-1/2 flex-col items-center justify-center">
        <img src={CodiLogoAside} alt="Logo Codi Cash" />

        <form
          onSubmit={handleSubmit(Logon)}
          className="my-10 w-85 text-center text-amber-100"
        >
          <h1 className="mb-6 text-xl font-bold text-[#4b206d]">
            Faça seu logon
          </h1>

          <div className="border border-zinc-900 bg-zinc-800 rounded-lg flex items-center gap-3 px-3 py-2 h-14">
            <Mail/>
            <input
          className="bg-transparent flex-1 h-full outline-none"
            type="email"
            placeholder="Email"
            {...register("email")}
            required
          />
          {errors?.email && (
            <span className="text-left text-sm text-red-500">
              {errors.email.message}
            </span>
          )}
          </div>
          
          <div className="border border-zinc-900 bg-zinc-800 rounded-lg flex items-center gap-3 px-3 py-2 h-14 mt-3">
            <LockKeyhole/>
            <input
          className="bg-transparent flex-1 h-full outline-none"
            type="password"
            placeholder="Senha"
            {...register("password")}
            required
          />
          {errors?.password && (
            <span className="text-left text-sm text-red-500">
              {errors.password.message}
            </span>
          )}
          </div>
          <Button type="button" onClick={handleNextDashboard}
          className="mt-5 bg-purple-500 hover:bg-purple-600 cursor-pointer w-full h-12"
          >
            Login
          </Button>
        </form>
      </div>
      <div className="flex w-1/2 items-center justify-center">
        <img src={CodiLogo} alt="" className="h-[600px] w-[600px]" />
      </div>
    </div>
  );
}
