const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = [];

function deleteToDos(event) {
  const btn = event.target;
  const byeButtonLi = btn.parentNode;
  toDoList.removeChild(byeButtonLi);
  const cleanToDos = toDos.filter(function(toDo) {
    return toDo.id !== parseInt(byeButtonLi.id);
  });
  toDos = cleanToDos;
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  span.innerText = text;
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteToDos);
  li.appendChild(delBtn);
  li.appendChild(span);
  toDoList.appendChild(li);
  const newId = toDos.length + 1;
  li.id = newId;
  const toDoObject = {
    text: text,
    id: newId
  };
  toDos.push(toDoObject);
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  toDoInput.value = "";
  paintToDo(currentValue);
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    // const bringToDo = loadedToDos;
    const parsedToDos = JSON.parse(loadedToDos);
    // console.log(parsedToDos);
    parsedToDos.forEach(function(toDo) {
      paintToDo(toDo.text);
      // console.log(toDo.text);
    });
  }
}
function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
