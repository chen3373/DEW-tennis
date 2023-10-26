class Player {
  name;
  ranking;
  #gender;
  age;
  constructor(name, ranking = 0, gender = 'female', age) {
    this.name = name;
    this.ranking = ranking;
    if (gender == 'male') this.#gender = 'male';
    else this.#gender = 'female';

    if (age instanceof Date) {
      this.age = age;
    } else {
      const [day, month, year] = age.split('/');
      this.age = new Date([year, month, day].join('/'));
    }
    this.age = age;
  }

  calculateAge() {
    const now = new Date();
    const ageDate = new Date(this.age);

    const age = now.getFullYear() - ageDate.getFullYear();

    if (now.getMonth() < ageDate.getMonth() || (now.getMonth() === ageDate.getMonth() && now.getDate() < ageDate.getDate())) {
      age--;
    }
    return age;
  }

  get gender() { return this.#gender; }

  get category() {
    const age = this.calculateAge();

    if (age < 12) {
      return 'Benjamin';
    } else if (age >= 12 && age <= 15) {
      return 'Cadet';
    } else if (age >= 16 && age <= 19) {
      return 'Junior';
    } else {
      return 'Senior';
    }
  }
}

// // Esto son pruebas (ELIMINAR A PARTIR DE AQUI)

// let player1 = new Player("Juan");
// console.log(`Nombre del jugador: ${player1}`); // Juan

module.exports = Player;


