let task = "";
let taskArray = new Array();

function addTask(){
    task = prompt("Enter a task: ");
    if(task != "" && task != null){
        taskArray.push(task);
        console.log(taskArray);
    }
    
    let innerHTMLText = "";
    for(let i = 0; i < taskArray.length; i++){
        innerHTMLText = innerHTMLText + `<div class="task-container"><button onclick="removeTask(${i});" class="list-button">X</button><li class="list-item">${(i+1) + ". " + taskArray[i]}</li></div>`;
    }

    document.getElementById("task-list").innerHTML=`
        ${innerHTMLText}
        `;
}

function removeTask(taskIndex){
    taskArray.splice(taskIndex, 1);
    
    console.log(taskArray);

    let innerHTMLText = "";
    for(let i = 0; i < taskArray.length; i++){
        innerHTMLText = innerHTMLText + `<div class="task-container"><button onclick="removeTask(${i});" class="list-button">X</button><li class="list-item">${(i+1) + ". " + taskArray[i]}</li></div>`;
    }

    document.getElementById("task-list").innerHTML=`
        ${innerHTMLText}
        `;
}