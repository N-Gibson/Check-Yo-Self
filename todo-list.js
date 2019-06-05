class ToDoList {
  constructor(obj) {
    this.id = obj.id;
    this.title = obj.title;
    this.tasks = obj.tasks || [];
    this.urgent = obj.urgent || false;
  }

  saveToStorage(toDoLists) {
  localStorage.setItem('array', JSON.stringify(storageArray))
  }

  deleteFromStorage(index) {
    storageArray.splice(index, 1, );
    localStorage.setItem('array', JSON.stringify(storageArray));
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