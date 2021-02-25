//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//Para event listener
todoButton.addEventListener('click', addTodo);

//FUNCIONES
function addTodo(event){
    //Para que no se refresque por default
    event.preventDefault();
    //Creando el Todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //Creando li
    const newTodo = document.createElement('li');
    newTodo.innerHTML = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //CHECK mark button
    const completedButton = document.createElement('button');
    
    //! Se debe usar inner html para agregar la clase
    completedButton.innerHTML = '<i class="fas fa-check">&#10004;</i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

    //CHECK trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash-alt">&#x1F5D1;</i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);
    //APEND TO LIST
    todoList.appendChild(todoDiv);
    //Clear todo input value
    todoInput.value = "";
}
