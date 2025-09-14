document.querySelector("#add").onclick = addTask;

// Set variables
let id = 0;

function addTask(e) {
  e.preventDefault();

  // Get the input value to create DOM elements
  const newTask = document.querySelector("input").value;
  const span = document.createElement("span");
  span.textContent = newTask;
  span.id = `text-${id}`;
  const li = document.createElement("li");
  li.id = `task-${id}`;

  // Add a checkbox for each task
  const checkbox = document.createElement("input");
  checkbox.id = `check-${id}`;
  checkbox.type = "checkbox";

  // Add a delete button for each task
  const deleteIcon = document.createElement("i");
  deleteIcon.id = `delete-${id}`;
  deleteIcon.classList = "fa-solid fa-trash fa-sm";

  // Add li to DOM
  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteIcon);

  document.querySelector("ul").appendChild(li);

  // Add event listener to delete icon
  document.querySelector(`#delete-${id}`).onclick = (e) => deleteTask(e);

  // Add event listener to checkbox
  document
    .querySelector(`#check-${id}`)
    .addEventListener("change", (e) => checkTask(e));

  id++;

  // Clear input
  document.querySelector("form").reset();
}

function deleteTask(e) {
  const taskId = e.target.id.split("-");
  const task = document.querySelector(`#task-${taskId[1]}`);
  task.remove();
}

function checkTask(e) {
  const box = e.target;
  const taskId = e.target.id.split("-");
  const text = document.querySelector(`#text-${taskId[1]}`);

  // Update styling for completed tasks
  if (box.checked) {
    text.style.textDecoration = "line-through";
    text.style.fontStyle = "italic";
    text.style.opacity = "0.4";
  } else {
    task.style.textDecoration = "unset";
    text.style.fontStyle = "unset";
    text.style.opacity = "1";
  }
}
