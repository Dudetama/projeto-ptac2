# projeto-ptac2

# Painel de Tarefas

Um painel de tarefas desenvolvido em React com Vite, permitindo adicionar, concluir, editar e excluir tarefas.

## Tecnologias utilizadas

- React
- Vite
- JavaScript
- CSS

## Funcionamento

O sistema possui as seguintes funcionalidades:

- **Adicionar tarefas:** o usuário digita uma tarefa e adiciona à lista.
- **Concluir tarefas:** é possível marcar uma tarefa como concluída usando o checkbox.
- **Editar tarefas:** permite alterar o texto de uma tarefa já criada.
- **Excluir tarefas:** remove uma tarefa da lista.
- **Contador:** mostra a quantidade total de tarefas e quantas foram concluídas.
- **Validação:** não permite adicionar uma tarefa vazia.

## Estrutura do código

O arquivo `App.jsx` utiliza o `useState` do React para controlar as informações do sistema.

São utilizados três estados principais:

- `novaTarefa`: armazena o texto digitado no campo de nova tarefa.
- `tarefas`: armazena a lista de tarefas.
- `erro`: armazena uma mensagem caso o usuário tente adicionar uma tarefa vazia.

Cada tarefa possui a seguinte estrutura:

```js
{
  id: Date.now(),
  texto: "Nome da tarefa",
  concluida: false
}