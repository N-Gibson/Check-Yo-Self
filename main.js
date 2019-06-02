// Variables

var storageArray = [];
var asideListen = document.querySelector('.aside');
var mainListen = document.querySelector('.main');
// var articlePopulation = document.querySelector('.article');
var newListItem = document.querySelector('.aside__new__idea');
var titleInput = document.querySelector('.aside__input__task');
var itemInput = document.querySelector('.aside__add__task');
var plusButton = document.querySelector('.aside__image__plus');
var taskButton = document.getElementById('make__task__list');
var clearButton = document.getElementById('clear__all');

// Event Listeners

asideListen.addEventListener('click', asideAll);
mainListen.addEventListener('click', mainAll);
plusButton.addEventListener('click', plusAll);
taskButton.addEventListener('click', taskAll);
clearButton.addEventListener('click', clearAll);
titleInput.addEventListener('keyup', titleInputKeyup);
itemInput.addEventListener('keyup', itemInputKeyup);

function titleInputKeyup() {
  makeTaskListEnable();
  clearAllEnable();
}

function itemInputKeyup(){
  makeTaskListEnable();
  clearAllEnable();
}

function plusAll() {
  newIdeaCreator(event);
  clearTaskInput();
}

function taskAll() {
  newListInstantiator();
  clearTaskTitle();
  clearTaskInput();
}

function clearAll() {
  clearTaskInput();
  clearTaskTitle();
}

// Functions on page load
makeTaskListEnable();
clearAllEnable();
promptToDo();
arrayParse();

function promptToDo() {
  if(localStorage.length === 0) {
    mainListen.insertAdjacentHTML('afterbegin', `<div class="prompt__container"><p class="main__idea__prompt"> Please create a <span class="prompt__span"> To-Do </span> List! </p> </div>`)
  } else {
    return
  }
}

// Functions on aside

function asideAll() {
  // newIdeaCreator(event)
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

function clearAllEnable() {
  if(titleInput.value === '' || itemInput.value === '') {
    clearButton.disabled = true;
  } else {
    clearButton.disabled = false;
  }
} 

function makeTaskListEnable() {
  debugger;
  if(titleInput.value === '' || itemInput.value === '') {
    taskButton.disabled = true;
  } else {
    taskButton.disabled = false;
  }
}

function newListInstantiator() {
  var newToDoList = new toDoList(Date.now(), titleInput.value, itemInput.value, false);
  storageArray.push(newToDoList);
  newToDoList.saveToStorage();
  toDoCardCreator(newToDoList);
}

function toDoCardCreator(toDoList) {
  mainListen.insertAdjacentHTML('afterbegin', `<article class="article" data-id=${toDoList.id}>
      <h2> ${toDoList.title} </h2>
      <div class="article__div__one">
        <input class="article__image__checkbox svg" type="image" src="images/checkbox.svg" alt="mark task as complete"></input>
      <p> ${toDoList.tasks} </p>
      </div>
      <div class="article__div__two">
        <input class="articel__image__checkbox svg" type="image" src="images/checkbox.svg" alt="mark task as complete"></input>
        <p> ${toDoList.tasks} </p>
      </div>
      <div class="article__div__three">
        <input class="articel__image__checkbox svg" type="image" src="images/checkbox.svg" alt="mark task as complete"></input>
        <p> ${toDoList.tasks} </p>
      </div>
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
} 

function arrayParse() {
  if(localStorage.length === 0){
    return
  } else {
  var newArray = JSON.parse(localStorage.getItem('list')).map(function(toDoList){
    return new toDoList(list.id, list.title, list.tasks, list.urgent)
  })
  console.log(newArray)
  storageArray = newArray;
  persistIdeas();
  }
}


function persistIdeas() {
  for (var i = 0; i < storageArray.length; i++) {
    toDoCardCreator(storageArray[i]);
  }
}
// Function to make new idea list on aside -- needs work

function newIdeaCreator(event) {
  newListItem.insertAdjacentHTML('afterbegin', `<input class="aside__image__delete svg" type="image" src="images/delete.svg" alt="delete the new task"></input>
      <p class="aside__append__idea"> ${itemInput.value} </p>`)
}

// Functions on main

function mainAll() {
  getId(event);
}

function getId(event) {
  return event.target.closest('.article').getAttribute('data-id');
}
