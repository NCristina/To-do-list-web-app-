document.getElementById('form-Task').addEventListener('submit', saveTask);
 
// Save new task
function saveTask(e) {
 
  let title = document.getElementById('title').value;
  let description = document.getElementById('description').value;
 
 
  let task = {
    title,
    description
  };
 
  if (localStorage.getItem('tasks') === null) {
    let tasks = [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  } else {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
 
  getTasks();
 
  // Reset form
  document.getElementById('form-Task').reset();
  e.preventDefault();
 
}
 
// Delete task
function deleteTask(title) {
 
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].title == title) {
      tasks.splice(i, 1);
    }
  }
 
  localStorage.setItem('tasks', JSON.stringify(tasks));
  getTasks();
}
 
// Show task list
function getTasks() {
 
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  let tasksView = document.getElementById('tasks');
  tasksView.innerHTML = '';
 
  for (let i = 0; i < tasks.length; i++) {
    let title = tasks[i].title;
    let description = tasks[i].description;
 
    tasksView.innerHTML +=
      `<div id="taskTitle">${title}</div>
      <div id="taskDescription">${description}</div>
      <div id="deleteTask">
        <a href="#" onclick="deleteTask('${title}')"><i class="fas fa-trash-alt"></i></a>
      </div>`;
  }
 
}
 
getTasks();