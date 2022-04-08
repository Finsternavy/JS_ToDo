let task = "";
let taskArray = new Array();

function addTask(){
    task = prompt("Enter a task: ");
    taskArray.push(task);
    console.log(taskArray);
    
    let innerHTMLText = "";
    for(let i = 0; i < taskArray.length; i++){
        innerHTMLText = innerHTMLText + `<li>${taskArray[i]}<button  onclick="removeTask(${i});" class="list-button"</button>Delete</li>`;
    }

    document.getElementById("task-list").innerHTML=`
        ${innerHTMLText}
        `;
}

function removeTask(taskIndex){
    taskArray.splice(taskIndex, 1);
    
    let innerHTMLText = "";
    for(let i = 0; i < taskArray.length; i++){
        innerHTMLText = innerHTMLText + `<li>${taskArray[i]}<button  onclick="removeTask(${i});" class="list-button"</button>Delete</li>`;
    }

    document.getElementById("task-list").innerHTML=`
        ${innerHTMLText}
        `;
}