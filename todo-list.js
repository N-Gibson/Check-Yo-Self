class ToDoList {
  constructor(id, title, tasks, urgent) {
    this.id = id;
    this.title = title;
    this.tasks = tasks;
    this.urgent = urgent;
  }

  saveToStorage(toDoLists) {
  localStorage.setItem('array', JSON.stringify(storageArray))
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

class Task {
  constructor(id, task, checkStatus){
    this.id = Date.now() || this.id;
    this.task = itemInput.value;
    this.checkStatus = false;
  }
}