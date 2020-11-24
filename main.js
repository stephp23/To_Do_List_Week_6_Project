//File: main.js

const addButton = document.querySelector('.addButton');
let input = document.querySelector('.input');
const container = document.querySelector('.container');

class item{
    constructor(itemName) {
    //create the item div
		    this.createDiv(itemName);
    }
  
    createDiv(itemName) {
        let input = document.createElement('input');
        input.value = itemName;
  	    input.disabled = true;
        input.classList.add('item_input');
        input.type = "text";
        
        let itemBox = document.createElement('div');
        itemBox.classList.add('item');
      
        let editTaskButton = document.createElement('button');
        editTaskButton.innerHTML = 'EDIT TASK (*Press Task Title)';
        editTaskButton.classList.add('editButton');
        
        let removeButton = document.createElement('button');
        removeButton.innerHTML = 'REMOVE';
        removeButton.classList.add('removeButton');
        
        container.appendChild(itemBox);

        itemBox.appendChild(input);
        itemBox.appendChild(editTaskButton);
        itemBox.appendChild(removeButton);
    
        editTaskButton.addEventListener('click', () => this.edit(input));
        removeButton.addEventListener('click', () => this.remove(itemBox));
    	  edit.innerHTML = "EDIT TASK"
    	
    }
  
    edit(input) {
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

    remove(item) {
        container.removeChild(item);
    }
}

function check() {
	if(input.value != ""){
		  new item(input.value);
        todos.push(inputValue.value);
        window.localStorage.setItem("todos", JSON.stringify(todos));
		  input.value = "";
	}
}

addButton.addEventListener('click', check);
window.addEventListener('keydown', (e) => {
	if(e.which == 13){
		check();
	}
})


new item("JS Week 6 Tech Project");
