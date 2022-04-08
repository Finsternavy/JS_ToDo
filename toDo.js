let task = "";
let taskArray = new Array();

// add a task to the task array
function addTask(){
    //get the task from the user
    task = prompt("Enter a task: ");
    // only place the task in the array if a task is actually typed
    if(task != "" && task != null){
        // add the task
        taskArray.push(task);
        // keep track and verify
        console.log(taskArray);
    }
    
    // local variable to clear value automatically after each task creation
    let innerHTMLText = "";

    // iterated depending on number of elements in the array
    for(let i = 0; i < taskArray.length; i++){

        // add the html for each element into a single string
        // also dynamically creates delete button for each task
        innerHTMLText = innerHTMLText + `<div class="task-container"><button onclick="removeTask(${i});" class="list-button">X</button><li class="list-item">${taskArray[i]}</li></div>`;
    }

    document.getElementById("task-list").innerHTML=`
        ${innerHTMLText}
        `;
}

function removeTask(taskIndex){
    // remove the specific element from the array
    taskArray.splice(taskIndex, 1);
    
    console.log(taskArray);

    let innerHTMLText = "";

    for(let i = 0; i < taskArray.length; i++){
        innerHTMLText = innerHTMLText + `<div class="task-container"><button onclick="removeTask(${i});" class="list-button">X</button><li class="list-item">${taskArray[i]}</li></div>`;
    }

    document.getElementById("task-list").innerHTML=`
        ${innerHTMLText}
        `;
}