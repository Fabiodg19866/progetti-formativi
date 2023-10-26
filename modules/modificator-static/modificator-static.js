class Students {
  constructor(members) {
    this.members = members;
  }
  static members() {
    return 10;
  }
}
let students = new Students(23);
console.log(students);
// istanza della classe
let membersStudents = Students.members(); // chiamo il metodo static
console.log(membersStudents);
//# sourceMappingURL=modificator-static.js.map
