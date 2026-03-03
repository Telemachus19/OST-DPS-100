class Student {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  showDetails() {
    console.log(
      `[${this.type}] ${this.name} is enrolled. Courses: ${this.courses.join(", ")}`,
    );
  }
}

class UndergraduateStudent extends Student {
  constructor(name) {
    super(name, "Undergraduate");
    this.courses = [
      "Intro to Computer Science",
      "Calculus I",
      "English Composition",
    ];
  }
}

class GraduateStudent extends Student {
  constructor(name) {
    super(name, "Graduate");
    this.courses = ["Advanced Machine Learning", "Thesis Research"];
  }
}

class PartTimeStudent extends Student {
  constructor(name) {
    super(name, "Part-Time");
    this.courses = ["Evening Web Development Bootcamp"];
  }
}

class StudentFactory {
  createStudent(name, studentType) {
    switch (studentType.toLowerCase()) {
      case "undergraduate":
        return new UndergraduateStudent(name);
      case "graduate":
        return new GraduateStudent(name);
      case "parttime":
        return new PartTimeStudent(name);
      default:
        throw new Error(`Unknown student type: ${studentType}`);
    }
  }
}

const factory = new StudentFactory();

const alice = factory.createStudent("Alice", "undergraduate");
const bob = factory.createStudent("Bob", "graduate");
const charlie = factory.createStudent("Charlie", "parttime");

alice.showDetails();
bob.showDetails();
charlie.showDetails();
