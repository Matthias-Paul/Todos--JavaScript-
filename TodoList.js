let input = document.getElementById("todo");
let add = document.getElementById("btn");
let list = document.getElementById("list");

let todolist = [];
let todoItem = "";

add.addEventListener("click", function() {
    if (input.value.trim() !== "") {
        todolist.push(input.value.trim());
        input.value = "";
        renderList();
    }
});

function renderList() {
    let todoItem = "";
    for (let i = 0; i < todolist.length; i++) {
        let tod = todolist[i];
        todoItem += `
            <div>${tod}</div>
            <div><button class="del" onclick="deleteItem(${i})">Delete</button></div>
        `;
    }
    list.innerHTML = todoItem;
}

function deleteItem(index) {
    todolist.splice(index, 1);
    renderList();
}