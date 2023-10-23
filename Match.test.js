const Match = require('./Match');
const Player = require('./Player');

test('Crear un partido, ', () => {
    const partido1 = new Match();
    expect(partido1).toEqual({
        players: [],
        winner: null
    });
    expect(partido1 instanceof Match).toBeTruthy();
});

test('Insertar un jugador en un partido sin jugadores', ()=>{
    const partido1 = new Match();
    const jugador1 = new Player('Pepe');
    partido1.insertPlayer(jugador1);
    const jugador2 = new Player('Juan');
    partido1.insertPlayer(jugador2);

    //expect(partido1.players[0]).toBe(jugador1);
    //expect(partido1.players[1]).toBe(jugador2);
    expect(partido1.players.length).toBe(2);
    expect(partido1.players).toContain(jugador1);
    expect(partido1.players).toContain(jugador2);
;
});

test('Insertar 3 jugadores, solo deben estar los 2 primeros, el último no se inserta', ()=>{
    const partido1 = new Match();
    const jugador1 = new Player('Pepe');
    partido1.insertPlayer(jugador1);
    const jugador2 = new Player('Juan');
    partido1.insertPlayer(jugador2);
    const jugador3 = new Player('Ana');
    partido1.insertPlayer(jugador3);

    expect(partido1.players.length).toBe(2);
    expect(partido1.players).toContain(jugador1);
    expect(partido1.players).toContain(jugador2);
    expect(partido1.players).not.toContain(jugador3);

});