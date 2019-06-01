// Variables

var storageArray = [];
var asideListen = document.querySelector('.aside');
var mainListen = document.querySelector('.main');
var articlePopulation = document.querySelector('.article');
var newListItem = document.querySelector('.aside__new__idea');
var titleInput = document.querySelector('.aside__input__task');
var itemInput = document.querySelector('.aside__add__task');

// Event Listeners

asideListen.addEventListener('click', asideAll)
mainListen.addEventListener('click', mainAll)

// Functions on page load

promptToDo();

function promptToDo() {
  if(storageArray.length === 0 || localStorage.length === 0) {
    mainListen.insertAdjacentHTML('afterbegin', `<div class="prompt__container"><p class="main__idea__prompt"> Please create a <span class="prompt__span"> To-Do </span> List! </p> </div>`)
  } else {
    return
  }
}

// Functions on aside

function asideAll() {
  // newIdeaCreator(event)
  newListInstantiator();
}

function newListInstantiator() {
  var newToDoList = new toDoList(Date.now(), titleInput.value, itemInput.value, false);
  storageArray.push(newToDoList);
  newToDoList.saveToStorage();
  toDoCardCreator(newToDoList);
}

function toDoCardCreator(toDoList) {
  articlePopulation.insertAdjacentHTML('afterbegin', `<article class="article" data-id=${toDoList.id}>
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

// Function to make new idea list on aside -- needs work

// function newIdeaCreator(event) {
//   if(event.target.className === 'aside__image__plus') {
//   newListItem.insertAdjacentHTML('afterbegin' `<input class="aside__image__delete svg" type="image" src="images/delete.svg" alt="delete the new task"></input>
//       <p class="aside__append__idea"> ${userinput} </p>`)
//   }
// }


// Functions on main

function mainAll() {
  getId(event);
}

function getId(event) {
  return event.target.closest('.article').getAttribute('data-id');
}


