const inputBox = document.getElementById("inputBox");
const taskList = document.getElementById("taskList");

function addTask() {
  if (inputBox.value === "") {
    alert("Let's add some text to your task first");
  } else {
    let newLi = document.createElement("li");
    //Creamos un nuevo elemento li HTML
    newLi.innerHTML = inputBox.value;
    //Añadimos el valor de inputBox al nuevo elemento li.
    taskList.appendChild(newLi);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    //"\u00d7" es para añadir el carácter de una X, esta X será para cancelar la tarea.
    newLi.appendChild(span);
    //Al elemento HTML taskList le añadimos el nuevo li que creamos.
    inputBox.value = "";
    saveData();
  }
}
//Function to create cookie to store tasks
function saveData() {
  localStorage.setItem("data", taskList.innerHTML);
}
//Function to request cookie with keyName data and show it
function showSavedData() {
  taskList.innerHTML = localStorage.getItem("data");
}

taskList.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      //si el tag de lo que se dio click en taskList es li entonces toma esta acción
      e.target.classList.toggle("checked");
      //Con esto añadimos la clase "checked" al elemento li
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
    }
    saveData();
  },
  false
);

showSavedData();
