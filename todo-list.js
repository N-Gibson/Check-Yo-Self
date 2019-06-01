class toDoList {
  constructor(id, title, tasks, urgent) {
    this.id = id || Date.Now();
    this.title = title;
    this.tasks = tasks;
    this.urgent = urgent || false
  }

  saveToStorage() {
    localStorage.setItem('array', JSON.stringify(storageArray));
  }

  deleteFromStorage() {
  
  }

  updateToDo() {
  // (should update the todo’s title and urgency)
  } 

updateTask() {
// (should update a task’s content and if it has been completed)
  }
}