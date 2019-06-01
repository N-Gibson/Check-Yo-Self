var storageArray = [];
var asideListen = document.querySelector('.aside');
var mainListen = document.querySelector('.main');
var articlePopulation = document.querySelector('.article');
var newListItem = document.querySelector('.aside__new__idea');

asideListen.addEventListener('click', asideAll)
mainListen.addEventListener('click', mainAll)

promptToDo();

function asideAll() {
  newIdeaCreator()
}

function mainAll() {
  getId(event);
}

function getId(event) {
  var ideaId = event.target.closest('.article').getAttribute('data-id')
  var targetId = toDoId
}

function promptToDo() {
  if(storageArray.length === 0 || localStorage.length === 0) {
    mainListen.insertAdjacentHTML('afterbegin', `<div class="prompt__container"><p class="main__idea__prompt"> Please create a <span class="prompt__span"> To-Do </span> List! </p> </div>`)
  } else {
    return
  }
}

// function newIdeaCreator(event) {
//   if(event.target.className === 'aside__image__plus') {
//   newListItem.insertAdjacentHTML('afterbegin' `<input class="aside__image__delete svg" type="image" src="images/delete.svg" alt="delete the new task"></input>
//       <p class="aside__append__idea"> Don't ever play your self. </p>`)
//   }
// }


// if(e.target.className === 'inactive-button-x') {
//   var id = getId(e);
//   var index = getIndex(e);
//   e.target.closest('#idea-card').remove();
//   storageArray[index].deleteFromStorage(index)
//   ideaPrompter();




// function toDoCardCreator(toDoList) {
//   articlePopulation.insertAdjacentHTML('afterbegin', `<article class="article" data-id=${toDoList.id}>
//       <h2> ${toDoList.title} </h2>
//       <div class="article__div__one">
//         <input class="article__image__checkbox svg" type="image" src="images/checkbox.svg" alt="mark task as complete"></input>
//       <p> ${toDoList.tasks} </p>
//       </div>
//       <div class="article__div__two">
//         <input class="articel__image__checkbox svg" type="image" src="images/checkbox.svg" alt="mark task as complete"></input>
//         <p> ${toDoList.tasks} </p>
//       </div>
//       <div class="article__div__three">
//         <input class="articel__image__checkbox svg" type="image" src="images/checkbox.svg" alt="mark task as complete"></input>
//         <p> ${toDoList.tasks} </p>
//       </div>
//       <section class="article__section__footer">
//         <div class="article__section__urgent">
//           <input class="article__image__urgent svg" type="image" src="images/urgent.svg" alt="mark task as urgent"></input>
//           <p class="article__section__p__urgent"> URGENT </p>
//         </div>
//         <div class="article__section__delete">
//           <input class="article__image__delete svg" type="image" src="images/delete.svg" alt="delete the task card"></input>
//           <p class="article__section__p__delete"> DELETE </p>
//         </div>
//       </section>
//     </article>`)
// } 