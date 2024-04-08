

const taskInput = document.getElementById("task-input");

const addTaskBtn = document.getElementById("add-task-btn");

const taskList = document.getElementById("task-list");

addTaskBtn.addEventListener("click", function() {

  const taskText = taskInput.value;
  if(taskText.trim() == ""){
alert("Enter a task !!")
  }

  if (taskText.trim() !== "") {

    const taskItem = document.createElement("li");

    taskItem.innerText = taskText;

    taskItem.addEventListener("click", function() {

      taskItem.style.color="red";
      taskItem.style.opacity="50%";

    });

    taskList.appendChild(taskItem);

    taskInput.value = "";

  }

});

