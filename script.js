document.getElementById("myForm").addEventListener("submit", function(event){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    if(name === "" || email === ""){
        alert("Please fill all fields");
        event.preventDefault();
    }
    else{
        alert("Form Submitted Successfully");
    }
});

function addTask(){
    let taskInput = document.getElementById("taskInput");
    let task = taskInput.value;
    if(task === ""){
        alert("Enter a task");
        return;
    }
    let li = document.createElement("li");
    li.innerHTML = `
        ${task}
        <button class="delete" onclick="removeTask(this)">Delete</button>
    `;
    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
}

function removeTask(button){
    button.parentElement.remove();
}