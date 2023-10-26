class Students {
  // classe

  members: number; //proprietà della classe

  constructor(members: number) {
    //costruttore della classe
    this.members = members;
  }

  static members(): number {
    return 10;
  }
}
let students = new Students(23);

console.log(students);
// istanza della classe
let membersStudents = Students.members(); // chiamo il metodo static
console.log(membersStudents);
