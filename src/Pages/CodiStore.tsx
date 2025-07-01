import { Aside } from "@/Components/Aside";

export function CodiStore() {
  return (
    <div className="flex h-screen">
      <Aside />
      <div className="flex w-full flex-col gap-8 overflow-auto bg-gray-100 p-5">
        <header>
          <div>Titulo</div>
          <div> Botoes</div>
        </header>
        <div>
          <h1>Input</h1>
          <h1>Filtros</h1>
        </div>
        <main>
          <div>
            <h1>Cards Area</h1>
          </div>
        </main>
      </div>
    </div>
  );
}
