const todoList = document.getElementById("todo-list");
const todoform = document.getElementById("todo-form")
let todoarr = [];

//로컬 저장소에 저장하기
function saveTodos(){
    const todoString = JSON.stringify(todoarr);
    localStorage.setItem("myTodos", todoString);
}

//로털 저장소에서 가져오기
function loadTodos(){
    const myTodos = localStorage.getItem("myTodos");
    if(myTodos !== null){ //추가해주면 안전하게 불러오기 가능
        todoarr = JSON.parse(myTodos); //todoarr 갱신해주기
        displayTodos();
    }
}
loadTodos()

// 할일 삭제하기
function handleTodoDelBtnClick(clickedId){
    todoarr = todoarr.filter(function(atodo){
        return atodo.todoId !== clickedId;
    })
    displayTodos();
}

// 할일 수정하기
function handleTodoItemClick(clickedId){
    todoarr = todoarr.map(function(atodo){
        if(atodo.todoId === clickedId){
            return {
                ...atodo, todoDone: !atodo.todoDone //todoDone을 반전시켜서 다시 넣어줌
            }
        } else{
            return atodo;
        }
    })
    displayTodos();
}

// 할일 보여주기
function displayTodos(){
    todoList.innerHTML="" //기존의 내용을 전부 지운 후 추가
    todoarr.forEach(function(atodo){
        const todoItem = document.createElement("li");
        const todoDelbtn = document.createElement("span");
        todoDelbtn.textContent = "x";
        todoItem.textContent = atodo.todoText;
        todoItem.title = "클릭하면 완료"
        if (atodo.todoDone){ //todoDone이 True일때: 완료했을때
            todoItem.classList.add("done")
        } else{ //todoDone이 False일때: 완료하지 않았을때
            todoItem.classList.add("yet")
        }
        todoDelbtn.title = "클릭하면 삭제"

        todoItem.addEventListener("click", function(){
            handleTodoItemClick(atodo.todoId)
        }) 
        todoDelbtn.addEventListener("click", function(){
            handleTodoDelBtnClick(atodo.todoId)
        })

        todoItem.appendChild(todoDelbtn);
        todoList.appendChild(todoItem);
    })
}

// 할일 추가하기
todoform.addEventListener("submit", function(e){
    e.preventDefault(); //새로고침 제한
    const toBeAdded = {
        todoText: todoform.todo.value,
        todoId: new Date().getTime(),
        todoDone: false //추가할 때마다 하지 않은 상태
    }
    todoform.todo.value = "";
    todoarr.push(toBeAdded);
    displayTodos()
    saveTodos()
})
