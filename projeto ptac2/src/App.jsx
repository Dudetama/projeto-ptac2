import { useState } from 'react'
import './App.css'

function App() {
  const [novaTarefa, setNovaTarefa] = useState('')
  const [Tarefas, setTarefas] = useState([])
  const [erro, setErro] = useState('')

  function adicionarTarefa(e) {
  e.preventDefault()

    if (novaTarefa === '') {
        setErro('Digite alguma coisa!')
      return
    }

  setTarefas([...Tarefas, novaTarefa])
  setNovaTarefa('')
  setErro('')
}

  return (
    <div>
      <h1>Lista de Tarefas</h1>

      <form onSubmit={adicionarTarefa}>
        {erro && <p>{erro}</p>}
        <input
          type="text"
          placeholder="Digite uma nova tarefa"
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
        />

        <button>Adicionar</button>
      </form>

      

      <div>
         {Tarefas.map((tarefa) => (
           <p>{tarefa}</p>
          ))}
      </div>

      <p>0 ideias no painel - 0 concluídas</p>
    </div>
  )
}

export default App