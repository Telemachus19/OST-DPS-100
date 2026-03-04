class ItemComponent {
  getPages() {
    throw new Error("Method must be implemented");
  }
}

class Book extends ItemComponent {
  constructor(title, pages) {
    super();
    this.title = title;
    this.pages = pages;
  }
  getPages() {
    return this.pages;
  }
}

class Box extends ItemComponent {
  constructor(name) {
    super();
    this.name = name;
    this.children = [];
  }
  add(component) {
    this.children.push(component);
  }
  getPages() {
    return this.children.reduce((sum, child) => sum + child.getPages(), 0);
  }
}

const book1 = new Book("JS Fundamentals", 300);
const book2 = new Book("Design Patterns", 450);
const book3 = new Book("Advanced JS", 500);

const smallBox = new Box("Small Box");
smallBox.add(book1);
smallBox.add(book2);

const bigBox = new Box("Big Box");
bigBox.add(smallBox);
bigBox.add(book3);

console.log(`Total pages in Big Box: ${bigBox.getPages()}`);
