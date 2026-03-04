class ToDoTask {
  constructor(name) {
    this.name = name;
    this.state = new StateInProgress(this);
  }
  setState(state) {
    this.state = state;
  }
  edit(newText) {
    this.state.edit(newText);
  }
  submitForReview() {
    this.state.submitForReview();
  }
  markDone() {
    this.state.markDone();
  }
}

class TaskState {
  constructor(task) {
    this.task = task;
  }
  edit(newText) {}
  submitForReview() {}
  markDone() {}
}

class StateInProgress extends TaskState {
  edit(newText) {
    this.task.name = newText;
    console.log(`Task edited: ${this.task.name}`);
  }
  submitForReview() {
    console.log("Task submitted for review.");
    this.task.setState(new StateReadyForReview(this.task));
  }
}

class StateReadyForReview extends TaskState {
  edit(newText) {
    console.log("Task is under review. Moving back to In Progress to edit.");
    this.task.setState(new StateInProgress(this.task));
    this.task.edit(newText);
  }
  markDone() {
    console.log("Review passed. Task is now Done.");
    this.task.setState(new StateDone(this.task));
  }
}

class StateDone extends TaskState {
  edit(newText) {
    console.log("Task is done. It is locked and cannot be edited.");
  }
  submitForReview() {
    console.log("Task is already done.");
  }
  markDone() {
    console.log("Task is already done.");
  }
}

const myTask = new ToDoTask("Write unit tests");

myTask.edit("Write integration tests");
myTask.submitForReview();
myTask.edit("Fix typo");
myTask.submitForReview();
myTask.markDone();
myTask.edit("Add another test");
