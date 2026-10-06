import { useState } from 'react'
import './App.css'

function App() {
  const [novaIdeia, setNovaIdeia] = useState('')
  const [ideias, setIdeias] = useState([])

  return (
    <div>
      <h1>Painel de Ideias</h1>

      <form>
        <input
          type="text"
          placeholder="Digite uma ideia"
          value={novaIdeia}
          onChange={(e) => setNovaIdeia(e.target.value)}
        />

        <button>Adicionar</button>
      </form>

      <h2>Ideias</h2>

      <div>
         As ideias vão aparecer aqui
      </div>

      <p>0 ideias no painel - 0 concluídas</p>
    </div>
  )
}
