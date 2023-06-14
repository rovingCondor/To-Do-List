const inputBox = document.querySelector('#input-box');
const listContainer = document.querySelector('#list-container');
const addTask = document.querySelector('#addTask');

function addTasks(){
    if(inputBox.value === ''){
        alert("Enter a task!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        // add 'x' to li
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
}

addTask.addEventListener('click', addTasks);

listContainer.addEventListener('click', function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false);