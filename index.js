console.log('==== Show Todo Texts ====')

const todos = ['Write the letter', 'Eat some lunch', 'Run around the city']

const showTodos = data => {
  for (let index = 0; index < data.length; index++) {
    const item = data[index]
    console.log(`[${index+1}] ${item}`)
  }
}

showTodos(todos)

console.log('\n==== Search Todo Texts ====')

const searchTodos = (data, textToSearch) => {
  let newTodos = []
  for (let index = 0; index < data.length; index++) {
    const item = data[index]

    const lowerCasedItem = item.toLowerCase()
    const lowerCasedText = textToSearch.toLowerCase()

    if (lowerCasedItem.includes(lowerCasedText)) {
      newTodos.push(item)
    }
  }

  return newTodos
}

console.log(`\n==== => Show Todo Texts ('run')====`)
const foundTodos = searchTodos(todos, 'run')
showTodos(foundTodos)

console.log(`\n==== => Show Todo Texts ('THE')====`)
const foundTodos2 = searchTodos(todos, 'THE')
showTodos(foundTodos2)


console.log(`\n==== add Todo Texts ('Flying to the moon') ====`)

const addTodo = (todoName, newTodo) => {
  todoName.push(newTodo)
  showTodos(todoName)
}

addTodo(todos, 'Flying to the moon')


console.log(`\n==== delete Todo Texts ('Eat some lunch') ====`)

const deleteTodo = (todoName, todoIndex) => {
  todoName.splice(todoIndex, 1)
  showTodos(todoName)
}

deleteTodo(todos, 1)