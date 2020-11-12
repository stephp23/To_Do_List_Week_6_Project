//File: main.js

const addButton = document.querySelector('.addButton');
const container = document.querySelector('.container');
var input = document.querySelector('.input');


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
    itemBox.classList.add('item');
      
    let editButton = document.createElement('button');
    editButton.classList.add('editButton');
    editButton.innerHTML = "EDIT";

    let removeButton = document.createElement('button');
    removeButton.classList.add('removeButton');
    removeButton.innerHTML = "REMOVE";
    
    container.appendChild(itemBox);

    itemBox.appendChild(input);
    itemBox.appendChild(editButton);
    itemBox.appendChild(removeButton);
    
    
    editButton.addEventListener('click', () => this.edit(input));

    removeButton.addEventListener('click', () => this.remove(itemBox));
    	// edit.innerHTML = "EDIT";

    	

    	
  }

  edit(input){
        // if(input.disabled == true){
           input.disabled = !input.disabled;
        }
    // 	else{
    //         input.disabled = !input.disabled;
    //         let indexof = todos.indexOf(name);
    //         todos[indexof] = input.value;
    //         window.localStorage.setItem("todos", JSON.stringify(todos));
    //     }
    // }

  remove(item) {
    //     itemBox.parentNode.removeChild(itemBox);
    //     let index = todos.indexOf(name);
    //     todos.splice(index, 1);
    //     window.localStorage.setItem("todos", JSON.stringify(todos));
    // }
    container.removeChild(item);
  }



function check(){
	if(input.value != ""){
		new item(input.value);
        // todos.push(inputValue.value);
        // window.localStorage.setItem("todos", JSON.stringify(todos));
		input.value = "";
	}
}

addButton.addEventListener('click', check);
window.addEventListener('keydown', (e) => {
	if(e.which == 13){
		check();
	}
})


new item("sport");
