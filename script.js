const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

const addTask = () => {
    if(inputBox.value === ''){
        alert("Please do not write empty tasks!");
    }
    else{
        let li = document.createElement("li");
        let span = document.createElement("span");
        li.innerHTML = inputBox.value;
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        listContainer.appendChild(li);
    }
    inputBox.value = "";
    saveData();
};

listContainer.addEventListener('click', function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
});

const saveData = () => {
    localStorage.setItem("data", listContainer.innerHTML);
};

const showTasks = () => {
    listContainer.innerHTML = localStorage.getItem("data");
};

// Loading the Data
showTasks();