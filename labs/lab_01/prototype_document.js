class Document {
  constructor(header, footer, pages, text) {
    this.header = header;
    this.footer = footer;
    this.pages = pages;
    this.text = text;
  }
  clone() {
    return new Document(this.header, this.footer, this.pages, this.text);
  }

  printDocument() {
    console.log(`
      --- ${this.header} ---
      Pages: ${this.pages}
      Content: ${this.text}
      --- ${this.footer} ---
    `);
  }
}
const originalDoc = new Document(
  "Paragrah 1",
  "Paragrah 2",
  1,
  "Something is here maybe",
);

console.log("Original Document:");
originalDoc.printDocument();
const clonedDoc1 = originalDoc.clone();

clonedDoc1.text = "new temp";
clonedDoc1.pages = 15;

console.log("Cloned and Modified Document 1:");
clonedDoc1.printDocument();
const clonedDoc2 = originalDoc.clone();
clonedDoc2.header = "docment 2";
clonedDoc2.text = "some text here.";
console.log("Cloned and Modified Document 2:");
clonedDoc2.printDocument();
