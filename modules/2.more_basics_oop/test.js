   
class Studente {
     
    nome = ''
    cognome = ''

  constructor(nome,cognome) {
      
    this.nome = nome
    this.cognome = cognome

  }
  
  getName() {
      
    return this.nome
    }

   }
    
let studente = new Studente('fabio', 'di gloria')
let getName = studente.getName()
console.log(studente);
console.log(getName);
   