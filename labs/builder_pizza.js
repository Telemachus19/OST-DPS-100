class Pizza {
  constructor() {
    this.crust = "regular";
    this.sauce = "tomato";
    this.cheese = "turkey";
    this.toppings = [];
  }

  describe() {
    console.log(`
      Delivering your Pizza:
      - Crust: ${this.crust}
      - Sauce: ${this.sauce}
      - Cheese: ${this.cheese}
      - Toppings: ${this.toppings.length ? this.toppings.join(", ") : "None (Cheese pizza)"}
    `);
  }
}
class PizzaBuilder {
  constructor() {
    this.reset();
  }
  reset() {
    this.pizza = new Pizza();
    return this;
  }

  setCrust(crustType) {
    this.pizza.crust = crustType;
    return this;
  }

  setSauce(sauceType) {
    this.pizza.sauce = sauceType;
    return this;
  }

  setCheese(cheeseType) {
    this.pizza.cheese = cheeseType;
    return this;
  }

  addTopping(topping) {
    this.pizza.toppings.push(topping);
    return this;
  }
  build() {
    const finishedPizza = this.pizza;
    this.reset();
    return finishedPizza;
  }
}

const builder = new PizzaBuilder();
console.log("Building Customer 1's Pizza:");
const customPizza = builder
  .setCrust("thin")
  .setSauce("pesto")
  .setCheese("provolone")
  .addTopping("ranch")
  .addTopping("turkey")
  .addTopping("grilled chicken")
  .build();

customPizza.describe();
console.log("Building Customer 2's Pizza:");
const pepperoniPizza = builder
  .setCrust("stuffed")
  .addTopping("pepperoni")
  .build();
pepperoniPizza.describe();
