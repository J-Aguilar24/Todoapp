//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//Para event listener
todoButton.addEventListener('click', addTodo);

//FUNCIONES
function addTodo(event){
    event.preventDefault()
    console.log('HOLA')
}
