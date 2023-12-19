class Animal {
  constructor(nome) {
    this.nome = nome;
  }

  fazerSom() {
    throw new Error("Método abstrato. Deve ser implementado nas classes filhas.");
  }
}

class Cachorro extends Animal {
  fazerSom() {
    return `${this.nome} faz woof woof!`;
  }
}

class Gato extends Animal {
  fazerSom() {
    return `${this.nome} faz miau!`;
  }
}

const rex = new Cachorro('Rex');
const whiskers = new Gato('Whiskers');
const lassie = new Cachorro('Lassie');

console.log(rex.fazerSom());      
console.log(whiskers.fazerSom());  
console.log(lassie.fazerSom());     
