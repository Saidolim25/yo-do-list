let inform = document.querySelector('.inform');
let informinp = document.querySelector('.infor__minp');
let list = document.querySelector('.list');


let todoObj = JSON.parse(localStorage.getItem('list'))
? JSON.parse(localStorage.getItem('list'))
:[]


function setTodo(todo) {
    localStorage.setItem('list',JSON.stringify(todo))

}

let todoId = 0
inform.addEventListener('submit',(event) =>{
    event.preventDefault()
    list.innerHTML = ''


    todoObj.push(
        {
            id: todoId,
            todoText: informinp.value
        }
    )

    creatlist(todoObj)

    todoId++
    inform.reset()
    setTodo(todoObj)
})

function creatlist(list){
    list.forEach(item => {
        list.innerHTML += `
        <li class="item">
        <p class="item__text">${item.todoText}</p>
        <div class="item__editor">
        <i class="fa-thin fa-pen"></i>
        <i class="fa-thin fa-trash"></i>
        </div>
        </li>
        `
    });
}

creatlist(todoObj)


list.addEventListener('click',(event) => {
    if(event.target.classList[1] =='fa-trash'){
        event.target.parenElement.parenElement.remove()
        let childList = event.target.parenElement.parenElement.children[0].innerText
        todoObj = todoObj.filter(item => item.todoText != childList)
        creatlist(todoObj)
    }
})