var todos = [];

var input = prompt("new-create todo, list-show todos, delete-delete todos, quit-quit app?");

while(input !== "quit"){
	if(input === "list") {
		printList();
	} else if(input === "new") {
		addTodo();
	} else if(input === "delete") {
		deleteTodo();
	}
	input = prompt("new-create todo, list-show todos, delete-delete todos, quit-quit app?");
}
console.log("you quit");

function printList() {
	console.log("YOUR TODOS LIST");	
	todos.forEach(function(todo, index){
		console.log(index + "."+ todo);
	});
}

function addTodo(){
	var newTodo = prompt("Enter new todo");
	todos.push(newTodo);
	console.log(newTodo + " added to list")
}

function deleteTodo(){
	var index = prompt("Enter index of todo to delete");
	todos.splice(index, 1);
	console.log("Todo Removed")
}