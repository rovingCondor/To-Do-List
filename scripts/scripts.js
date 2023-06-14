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
    // Save data called after every function
    saveData();
}

addTask.addEventListener('click', addTasks);

listContainer.addEventListener('click', function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// Save data in brower
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();