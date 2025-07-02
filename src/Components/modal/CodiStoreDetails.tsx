import { X } from "lucide-react";

type modalProps = {
  open: () => void;
};
export function CardDetails({ open }: modalProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="relative w-full max-w-xl rounded-2xl bg-white p-10">
        {/* Header */}
        <header>
          <h1>Venda #0000</h1>
          <button onClick={open}>
            {" "}
            <X />
          </button>
        </header>
        {/* Details */}
        <div>
          <div>
            <h1>Professor Responsavel:</h1>
            <h2>Bruno</h2>
          </div>
          <div>
            <h1>Turno: </h1>
            <h2>Manhã</h2>
          </div>
        </div>

        {/* Itens */}
      </div>
    </div>
  );
}
