class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  
  confrontaEta(altroUtente) {
    if (this.age > altroUtente.age) {
      return `${this.firstName} ${this.lastName} è più vecchio di ${altroUtente.firstName} ${altroUtente.lastName}`;
    } else if (this.age < altroUtente.age) {
      return `${this.firstName} ${this.lastName} è più giovane di ${altroUtente.firstName} ${altroUtente.lastName}`;
    } else {
      return `${this.firstName} ${this.lastName} e ${altroUtente.firstName} ${altroUtente.lastName} hanno la stessa età.`;
    }
  }
}

const utente1 = new User("Marco", "Cresta", 35, "Parma");
const utente2 = new User("Luca", "Castagna", 28, "Milano");


console.log(utente1.confrontaEta(utente2));
console.log(utente2.confrontaEta(utente1));


class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }

  
  hasSameOwner(otherPet) {
    return this.ownerName.toLowerCase() === otherPet.ownerName.toLowerCase();
  }
}


const pet1 = new Pet("Ciro", "Luca", "Cane", "Mastino Napoletano");
const pet2 = new Pet("Spank", "Anna", "Gatto", "Soriano");
const pet3 = new Pet("Tyson", "Luca", "Cane", "Dogo Argentino");


console.log("Animali creati:");
console.log(pet1);
console.log(pet2);
console.log(pet3);


console.log("\nControllo padroni uguali:");
console.log(`${pet1.petName} e ${pet2.petName} stesso padrone?`, pet1.hasSameOwner(pet2));
console.log(`${pet1.petName} e ${pet3.petName} stesso padrone?`, pet1.hasSameOwner(pet3));
console.log(`${pet2.petName} e ${pet3.petName} stesso padrone?`, pet2.hasSameOwner(pet3));
