let inputEL = document.querySelectorAll(".todo-input");
let paraEL = document.querySelectorAll(".printAllTodo")
todoArray = []
function add() {
    // console.log("func");
    let newTodo = inputEL[0].value
    todoArray.push(newTodo)
    // console.log(newTodo);
    // console.log(todoArray);
    printAllTodo();
    inputEL[0].value = ""
}

function printAllTodo() {
    paraEL[0].innerHTML = ""
    for (let i = 0; i < todoArray.length; i++) {
        paraEL[0].innerHTML += `<p id="todo-${i}"> ${todoArray[i]}
        
        <button onclick="editTodo(${i})">Edit</button>
        <button onclick="deleteTodo(${i})">Delete</button>
        </p>
        `
    }
}
function deleteTodo(index) {
    todoArray.splice(index,1);
    printAllTodo();
    // agr kisi khas pr par edit or delete kharna haa toh splice use hoo gaa
    // console.log("edit function called",index,todoArray);

}

function editTodo(index) {
    console.log("edit function called",index,todoArray);
}
// crud
