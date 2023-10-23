class Player{
    name;
    ranking;
    #gender;
    constructor(name, ranking= 0, gender = 'female') {
        this.name = name;
        this.ranking = ranking;
        if(gender=='male') this.#gender = 'male';
        else this.#gender = 'female';
    }

    get gender(){return this.#gender;}
}

// // Esto son pruebas (ELIMINAR A PARTIR DE AQUI)

// let player1 = new Player("Juan");
// console.log(`Nombre del jugador: ${player1}`); // Juan

module.exports = Player;


