import { Button } from "@/Components/ui/button";
import { useForm } from "react-hook-form";

import codiCashLogo from "../../assests/codiCashLogo.png";

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

export function Login() {
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
    <div className="flex h-screen flex-col bg-purple-900 lg:flex-row">
      <div className="flex flex-col items-center justify-center lg:w-1/2">
        <form
          onSubmit={handleSubmit(Login)}
          className="my-10 w-85 text-center text-amber-100"
        >
          <h1 className="mb-6 text-2xl font-bold text-white">Faça seu login</h1>

          <div className="flex h-14 items-center gap-3 rounded-lg border border-zinc-900 bg-zinc-800 px-3 py-2">
            <Mail />
            <input
              className="h-full flex-1 bg-transparent outline-none"
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

          <div className="mt-3 flex h-14 items-center gap-3 rounded-lg border border-zinc-900 bg-zinc-800 px-3 py-2">
            <LockKeyhole />
            <input
              className="h-full flex-1 bg-transparent outline-none"
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
          <Button
            type="button"
            onClick={handleNextDashboard}
            className="mt-5 h-12 w-full cursor-pointer bg-emerald-600 text-xl hover:bg-emerald-700"
          >
            Login
          </Button>
        </form>
      </div>
      <div className="flex items-center justify-center">
        <img
          src={codiCashLogo}
          alt=""
          className="h-72 object-cover lg:h-[580px] lg:w-[580px]"
        />
      </div>
    </div>
  );
}
