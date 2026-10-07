import { useState } from 'react'
import './App.css'

function App() {
  const [novaTarefa, setNovaTarefa] = useState('')
  const [tarefas, setTarefas] = useState([])
  const [erro, setErro] = useState('')

  function adicionarTarefa(e) {
    e.preventDefault()

    if (novaTarefa.trim() === '') {
      setErro('Digite uma tarefa!')
      return
    }

    const nova = {
      id: Date.now(),
      texto: novaTarefa,
      concluida: false
    }

    setTarefas([...tarefas, nova])
    setNovaTarefa('')
    setErro('')
  }

  function concluirTarefa(id) {
    const novasTarefas = tarefas.map((tarefa) => {
      if (tarefa.id === id) {
        return {
          ...tarefa,
          concluida: !tarefa.concluida
        }
      }

      return tarefa
    })

    setTarefas(novasTarefas)
  }

  function excluirTarefa(id) {
    const novasTarefas = tarefas.filter((tarefa) => tarefa.id !== id)

    setTarefas(novasTarefas)
  }

  function editarTarefa(id) {
    const tarefaNova = prompt('Digite a nova tarefa:')

    if (tarefaNova === null || tarefaNova.trim() === '') {
      return
    }

    const novasTarefas = tarefas.map((tarefa) => {
      if (tarefa.id === id) {
        return {
          ...tarefa,
          texto: tarefaNova
        }
      }

      return tarefa
    })

    setTarefas(novasTarefas)
  }

  const concluidas = tarefas.filter((tarefa) => tarefa.concluida).length

  return (
    <div>
      <h1>Painel de Tarefas</h1>

      <form onSubmit={adicionarTarefa}>
        <input
          type="text"
          placeholder="Digite uma tarefa"
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
        />

        <button>Adicionar</button>
      </form>

      {erro && <p>{erro}</p>}

      <h2>Tarefas</h2>

      <div>
        {tarefas.map((tarefa) => (
          <div key={tarefa.id}>
            <input
              type="checkbox"
              checked={tarefa.concluida}
              onChange={() => concluirTarefa(tarefa.id)}
            />

            <span>
              {tarefa.texto}
            </span>

            <button onClick={() => editarTarefa(tarefa.id)}>
              Editar
            </button>

            <button onClick={() => excluirTarefa(tarefa.id)}>
              Excluir
            </button>
          </div>
        ))}
      </div>

      <p>
        {tarefas.length} tarefas no painel - {concluidas} concluídas
      </p>
    </div>
  )
}

export default App