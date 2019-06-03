class toDoList {
  constructor(id, title, tasks, urgent) {
    this.id = id || Date.Now();
    this.title = title;
    this.tasks = tasks;
    this.urgent = urgent || false
  }

  saveToStorage(toDoLists) {
  var lists = JSON.stringify(toDoLists);
  localStorage.setItem('toDoArray', lists);
  }

  deleteFromStorage() {
    if(storageArray.length === 0) {
      localStorage.clear();
    }
  }

  updateToDo() {
  // (should update the todo’s title and urgency)
  } 

updateTask() {
// (should update a task’s content and if it has been completed)
  }
}