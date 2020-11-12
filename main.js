//File: main.js

const addButton = document.querySelector('.addButton');
const container = document.querySelector('.container');
var inputValue = document.querySelector('.input');


// if(window.localStorage.getItem("todos") == undefined){
//      var todos = [];
//      window.localStorage.setItem("todos", JSON.stringify(todos));
// }

// var todosEX = window.localStorage.getItem("todos");
// var todos = JSON.parse(todosEX);


class item{
  constructor(itemName) {
    //create the item div
		this.createDiv(itemName);
	}
  createDiv(itemName){
    let input = document.createElement('input');
  	input.type = "text";
  	input.disabled = true;
   	input.value = itemName;
    input.classList.add('item_input');
      
    let itemBox = document.createElement('div');
    itemBox
      
    let editButton = document.createElement('button');
    editButton.classList.add('editButton');

    let removeButton = document.createElement('button');
    removeButton.classList.add('removeButton');
      

    	remove.addEventListener('click', () => this.remove(itemBox, name));
    	edit.innerHTML = "EDIT";
    	edit.addEventListener('click', () => this.edit(input, name));

    	

    	container.appendChild(itemBox);

        itemBox.appendChild(input);
        itemBox.appendChild(edit);
        itemBox.appendChild(remove);

    }

    edit(input, name){
        if(input.disabled == true){
           input.disabled = !input.disabled;
        }
    	else{
            input.disabled = !input.disabled;
            let indexof = todos.indexOf(name);
            todos[indexof] = input.value;
            window.localStorage.setItem("todos", JSON.stringify(todos));
        }
    }

    remove(itemBox, name){
        itemBox.parentNode.removeChild(itemBox);
        let index = todos.indexOf(name);
        todos.splice(index, 1);
        window.localStorage.setItem("todos", JSON.stringify(todos));
    }
}

add.addEventListener('click', check);
window.addEventListener('keydown', (e) => {
	if(e.which == 13){
		check();
	}
})

function check(){
	if(inputValue.value != ""){
		new item(inputValue.value);
        todos.push(inputValue.value);
        window.localStorage.setItem("todos", JSON.stringify(todos));
		inputValue.value = "";
	}
}


for (var v = 0 ; v < todos.length ; v++){
    new item(todos[v]);
}


new item("sport");
