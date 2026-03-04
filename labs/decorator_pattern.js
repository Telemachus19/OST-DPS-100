class Teacher {
  constructor(name) {
    this.name = name;
  }
  getDetails() {
    return `Teacher: ${this.name}`;
  }
}

function withSalary(teacher, salary) {
  teacher.salary = salary;
  const originalGetDetails = teacher.getDetails.bind(teacher);
  teacher.getDetails = () =>
    `${originalGetDetails()} | Salary: $${teacher.salary}`;
  return teacher;
}

function withNationality(teacher, nationality) {
  teacher.nationality = nationality;
  const originalGetDetails = teacher.getDetails.bind(teacher);
  teacher.getDetails = () =>
    `${originalGetDetails()} | Nationality: ${teacher.nationality}`;
  return teacher;
}

function withStreet(teacher, street) {
  teacher.street = street;
  const originalGetDetails = teacher.getDetails.bind(teacher);
  teacher.getDetails = () =>
    `${originalGetDetails()} | Street: ${teacher.street}`;
  return teacher;
}

let mrSmith = new Teacher("Mr. Smith");
mrSmith = withSalary(mrSmith, 50000);
mrSmith = withNationality(mrSmith, "Canadian");
mrSmith = withStreet(mrSmith, "123 Maple St");

console.log(mrSmith.getDetails());
