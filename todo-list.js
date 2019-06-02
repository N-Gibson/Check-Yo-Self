class toDoList {
  constructor(id, title, tasks, urgent) {
    this.id = id || Date.Now();
    this.title = title;
    this.tasks = tasks;
    this.urgent = urgent || false
  }

  saveToStorage() {
    localStorage.setItem('storageArray', JSON.stringify(storageArray));
    console.log(storageArray)
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