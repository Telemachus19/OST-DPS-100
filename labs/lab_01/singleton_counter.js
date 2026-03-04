class InstanceCounter {
  constructor() {
    if (InstanceCounter.instance) {
      return InstanceCounter.instance;
    }
    this.activeInstances = 0;
    InstanceCounter.instance = this;
  }

  increment() {
    this.activeInstances++;
    console.log(`Instance added. Total active: ${this.activeInstances}`);
  }

  decrement() {
    if (this.activeInstances > 0) {
      this.activeInstances--;
    }
    console.log(`Instance removed. Total active: ${this.activeInstances}`);
  }

  getCount() {
    return this.activeInstances;
  }
}

const counter1 = new InstanceCounter();
counter1.increment();
counter1.increment();
const counter2 = new InstanceCounter();
counter2.increment();
const counter3 = new InstanceCounter();
counter3.decrement();
console.log(
  `\nAre counter1 and counter2 the exact same object? ${counter1 === counter2}`,
);
console.log(`Final count via counter3: ${counter3.getCount()}`);
