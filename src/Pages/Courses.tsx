import { Aside } from "@/Components/Aside";

import { CardsReports } from "@/Components/CardsReports";
import { CourseCard } from "@/Components/CourseCard";
import JavascriptLogo from "../assests/JavaScriptLogo.png";
import PhpLogo from "../assests/PhpLogo.png";
import PythonLogo from "../assests/PythonLogo.png";
import ReactLogo from "../assests/ReactLogo.png";
import FullstackLogo from "../assests/FullStackLogo.png";

import { ExpensesForm } from "@/Forms/ExpensesForm";
import { BookOpen, CircleDot, Clock, Star, UsersRound } from "lucide-react";

export function Courses() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Aside />
      <div className="flex w-full flex-col gap-2 overflow-auto p-5">
        {/*Header*/}
        <div className="grid items-center sm:grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col gap-1">
            <h1 className="text-4xl font-bold">Cursos</h1>
            <p className="text-[18px] text-gray-500">
              Gerencie o catálogo de cursos da escola
            </p>
          </div>
          <div className="flex justify-end">
            <ExpensesForm />
          </div>
        </div>
        {/*Cards com os tipos de despesas*/}
        <section className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4">
          <CardsReports
            title={"Total de cursos"}
            value={"4.413,00"}
            color={"white"}
            icon={BookOpen}
            bgColor={"white"}
          />
          <CardsReports
            title={"Ativos"}
            value={"10.440,00"}
            color={"white"}
            icon={CircleDot}
            bgColor={"white"}
          />
          <CardsReports
            title={"Total de estudantes"}
            value={"14.853,00"}
            color={"white"}
            icon={UsersRound}
            bgColor={"white"}
          />
          <CardsReports
            title={"Avaliação média"}
            value={"14.853,00"}
            color={"white"}
            icon={Star}
            bgColor={"white"}
          />
        </section>
        <section className="grid grid-cols-4 gap-2">
          <CourseCard
            title="Curso de PHP"
            imageUrl={PhpLogo}
            status="Ativo"
            description="Aprenda desenvolvimento web completo com PHP"
            students={1000}
            icon={UsersRound}
            iconMain={Clock}
            iconSecundary={Star}
            hours={200}
            rating={4.5}
            price={299}
          />
          <CourseCard
            title="Curso de Javascript"
            imageUrl={JavascriptLogo}
            status="Ativo"
            description="Aprenda desenvolvimento web completo com JavaScript, React e Node.js"
            students={1000}
            icon={UsersRound}
            iconMain={Clock}
            iconSecundary={Star}
            hours={200}
            rating={4.5}
            price={299}
          />
          <CourseCard
            title="Curso de React"
            imageUrl={ReactLogo}
            status="Ativo"
            description="Aprenda desenvolvimento web completo com JavaScript, React e Node.js"
            students={1000}
            icon={UsersRound}
            iconMain={Clock}
            iconSecundary={Star}
            hours={200}
            rating={4.5}
            price={299}
          />
          <CourseCard
            title="Curso de Python"
            imageUrl={PythonLogo}
            status="Ativo"
            description="Aprenda desenvolvimento e analise de dados completo com Python"
            students={1000}
            icon={UsersRound}
            iconMain={Clock}
            iconSecundary={Star}
            hours={200}
            rating={4.5}
            price={299}
          />
          <CourseCard
            title="Curso de Full Stack"
            imageUrl={FullstackLogo}
            status="Ativo"
            description="Aprenda desenvolvimento web completo com JavaScript, React e Node.js,Python e Django"
            students={1000}
            icon={UsersRound}
            iconMain={Clock}
            iconSecundary={Star}
            hours={200}
            rating={4.5}
            price={299}
          />
        </section>
      </div>
    </div>
  );
}
