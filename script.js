const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', DoneDelete);


function addTodo(event){
    event.preventDefault(); 
    const todoDiv = document.createElement("div"); 
    todoDiv.classList.add("todo"); 
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item'); 
    todoDiv.appendChild(newTodo); 
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fa-sharp fa-solid fa-check"></i>';
    completedButton.classList.add("complete");
    todoDiv.appendChild(completedButton);
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    trashButton.classList.add("trash");
    todoDiv.appendChild(trashButton);
    todoList.appendChild(todoDiv);
    todoInput.value = ""
}

function DoneDelete(e) {
    const item = e.target;
    if (item.classList[0] === 'trash') {
        const todo = item.parentElement; 
        todo.addEventListener('click', function() {
            todo.remove();
        });  
    }
    if (item.classList[0] === 'complete'){
        const todo = item.parentElement;
        todo.classList.toggle("completed"); 
    }
}


  