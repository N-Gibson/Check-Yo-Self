// Global variables
var storageArray = [];
var taskStorrageArray = [];
var asideListen = document.querySelector('.aside');
var mainListen = document.querySelector('.main');
var newListItem = document.querySelector('.aside__new__idea');
var titleInput = document.querySelector('.aside__input__task');
var itemInput = document.querySelector('.aside__add__task');
var plusButton = document.querySelector('.aside__image__plus');
var taskButton = document.getElementById('make__task__list');
var clearButton = document.getElementById('clear__all');
var listItem = document.querySelector('li__append');

// Event listeners
mainListen.addEventListener('click', mainAll);
asideListen.addEventListener('click', asideAll);
taskButton.addEventListener('click', taskAll);
plusButton.addEventListener('click', plusAll);
clearButton.addEventListener('click', clearAll);

// Main event listener
function mainAll(){

}

function asideAll(){
  // deleteTask(event);
}

// Task button functions
function taskAll() {
  createList()
  // toDoListCreator(ToDoList);
  clearTaskTitle();
  clearTaskInput();
}

// Plus button Functions
function plusAll() {
  newTaskCreator(Task);
  clearTaskInput();
}

// Clearing functions

function clearAll(){

}

function clearTaskTitle() {
  titleInput.value = '';
  makeTaskListEnable()
  clearAllEnable();
}

function clearTaskInput() {
  itemInput.value = '';
  makeTaskListEnable()
  clearAllEnable();
}

// function deleteTask(event) {
//   event.target.closest(listItem).remove()
// }

// Functions on page load
  makeTaskListEnable();
  clearAllEnable();
  promptToDo();

function clearAllEnable() {
  // if(titleInput.value === '' || itemInput === '') {
  //   clearButton.disabled = false;
  // } else {
    clearButton.disabled = false;
  // }
} 

function makeTaskListEnable() {
  // if(titleInput.value === '' || newListItem.value === undefined) {
  //   taskButton.disabled = false;
  // } else {
    taskButton.disabled = false;
  // }
}

function promptToDo() {
  if(localStorage.length === 0) {
    mainListen.insertAdjacentHTML('afterbegin', `<div class="prompt__container"><p class="main__idea__prompt"> Please create a <span class="prompt__span"> To-Do </span> List! </p> </div>`)
  } else {
    return
  }
}

function createList() {
  var newList = new ToDoList(Date.now(), titleInput.value, taskStorrageArray, false)
  storageArray.push(newList);
  newList.saveToStorage();
  toDoListCreator(newList);
}

// function loadPopulation() {
//   for (var i = 0; i < storageArray.length; i++) {
//     toDoListCreator(storageArray[i]);
//   }
// }

function newTaskCreator(taskObject) {
  // debugger;
  if(itemInput.value === '' || newListItem === undefined) {
    return
  } else {
  var newTask = new Task(Date.now(), itemInput.value, false)
  var individualTask = newListItem.insertAdjacentHTML('afterbegin', `<li class="li__append" data-id=${newTask.id}> <input class="aside__image__delete svg" type="image" src="images/delete.svg" alt="delete the new task"></input>
      <p class="aside__append__idea"> ${newTask.task} </p> </li>`)
  }
  console.log(newTask.task);
  console.log(newTask.id);
  taskStorrageArray.push(newTask);
}

function toDoListCreator(obj) {
  debugger;
  var newCard = mainListen.insertAdjacentHTML('afterbegin', `<article class="article" data-id=${obj.id}>
      <h2> ${obj.title} </h2>
      <div class="article__div__one">
        <input class="article__image__checkbox svg" type="image" src="images/checkbox.svg" alt="mark task as complete"></input>
      <p> ${obj.tasks} </p>
      <section class="article__section__footer">
        <div class="article__section__urgent">
          <input class="article__image__urgent svg" type="image" src="images/urgent.svg" alt="mark task as urgent"></input>
          <p class="article__section__p__urgent"> URGENT </p>
        </div>
        <div class="article__section__delete">
          <input class="article__image__delete svg" type="image" src="images/delete.svg" alt="delete the task card"></input>
          <p class="article__section__p__delete"> DELETE </p>
        </div>
      </section>
    </article>`)
  console.log(obj.id)
  console.log(obj.title)
  console.log(obj.tasks)
}