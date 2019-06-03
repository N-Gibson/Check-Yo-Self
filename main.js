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
var listItem = document.querySelector('li__append');
// var listPTask = document.querySelector('aside__append__idea');
// Event Listeners

// asideListen.addEventListener('click', asideAll);
mainListen.addEventListener('click', mainAll);
plusButton.addEventListener('click', plusAll);
taskButton.addEventListener('click', taskAll);
clearButton.addEventListener('click', clearAll);
// titleInput.addEventListener('keyup', titleInputKeyup);
// itemInput.addEventListener('keyup', itemInputKeyup);

// Functions on page load

makeTaskListEnable();
clearAllEnable();
promptToDo();
arrayParse();


function clearAllEnable() {
  // if(titleInput.value === '' || itemInput === '') {
  //   clearButton.disabled = false;
  // } else {
    clearButton.disabled = false;
  // }
} 

function arrayParse() {
  if(localStorage.length === 0){
    return
  } else {
  var newArray = JSON.parse(localStorage.getItem('toDoArray')).map(function(toDoList){
    return new toDoList(storageArray.id, storageArray.title, storageArray.tasks, storageArray.urgent)
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

// Title related Functions

function titleInputKeyup() {
  makeTaskListEnable();
  clearAllEnable();
}

// Task related Functions

function itemInputKeyup(){
  makeTaskListEnable();
  clearAllEnable();
}

// Plus button Functions

function plusAll() {
  // newIdeaCreator();
  ideaObject()
  clearTaskInput();
}

function ideaObject() {
  var newIdeaObject = {
    title: titleInput.value,
    task: itemInput.value,
    id: Date.now(),
    urgent: false,
  }
  newIdeaCreator(newIdeaObject)
}

function newIdeaCreator(ideaObject) {
  if(itemInput.value === '' || newListItem === undefined) {
    return
  } else {
    console.log(ideaObject);
  newListItem.insertAdjacentHTML('afterbegin', `<li class="li__append" data-id=${ideaObject.id}> <input class="aside__image__delete svg" type="image" src="images/delete.svg" alt="delete the new task"></input>
      <p class="aside__append__idea"> ${ideaObject.task} </p> </li>`)
  }
}

// Task button Functions

function taskAll() {
  newListInstantiator();
  clearTaskTitle();
  clearTaskInput();
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
      // </div>
      // <div class="article__div__two">
      //   <input class="articel__image__checkbox svg" type="image" src="images/checkbox.svg" alt="mark task as complete"></input>
      //   <p> ${toDoList.tasks} </p>
      // </div>
      // <div class="article__div__three">
      //   <input class="articel__image__checkbox svg" type="image" src="images/checkbox.svg" alt="mark task as complete"></input>
      //   <p> ${toDoList.tasks} </p>
      // </div>

// Clear button Functions

function clearAll() {
  clearTaskInput();
  clearTaskTitle();
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

// Functions on aside

// function asideAll() {
  // newIdeaCreator(event)
// }

// Functions on main

function mainAll() {
  // getId(event);
  // getIndex(event);
  deleteFromStorage();
  deleteCard(event);
}


function deleteCard(event) {
  if(event.target.className === 'article__image__delete') {
  e.target.closest('.article').remove();
  storageArray[index].deleteFromStorage(index)
  ideaPrompter();
    }
  }