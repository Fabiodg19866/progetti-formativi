// intersection type
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  employe: string;
  startDate: Date;
};

// interface ElevatedEmployee extends Employee, Admin {}

type ElevatedEmployee = Admin & Employee;

const employe: ElevatedEmployee = {
  name: 'Max',
  employe: 'Technical Lead',
  privileges: ['Coordinator Team'],
  startDate: new Date()
};

console.log(employe);



type Nome = { nome: string };
type Eta = { eta: number };
type PersonaCompleta = Nome & Eta;

const persona: PersonaCompleta = { nome: "Sara", eta: 25 };
console.log(persona);








