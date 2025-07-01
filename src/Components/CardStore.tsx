export function CardStore() {
  return (
    <div>
      {/* Header */}
      <header>
        <h1>Venda #0000</h1>
      </header>

      {/* Info Area */}
      <div>
        <h2>Bruno</h2>
        <h2>
          <span>Turno: </span>Manhã
        </h2>
      </div>

      {/* Content */}
      <main>
        <h1>Itens:</h1>
        <ul>
          <li>
            <span>1x</span> Coca-Cola
          </li>
          <li>
            <span>1x</span> Hamburguer
          </li>
          <li>
            <span>1x</span> Suco
          </li>
        </ul>
      </main>

      {/* Valor e Botão */}
      <footer>
        <div>
          <h1>Valor:</h1>
          <span>R$ 58,56</span>
        </div>
        <button>Detalhes</button>
      </footer>
    </div>
  );
}
