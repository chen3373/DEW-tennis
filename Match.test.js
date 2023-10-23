const Match = require('./Match');
const Player = require('./Player');

test('Crear un partido', () => {
    const today = new Date();
    const match1 = new Match();
    expect(match1).toEqual({
        players: [], 
        winner: null, 
        date: today
    });
    expect(match1 instanceof Match).toBeTruthy();
    expect(match1.players).toEqual([]);
    expect(match1.winner).toBeNull();
    expect(match1.date).toEqual(today);
});

test('Crear un partido con fecha como objeto', () => {
    const fecha = new Date('2023/10/24');
    const match1 = new Match(fecha);
    expect(match1).toEqual({
        players: [], 
        winner: null, 
        date: fecha
    });
    expect(match1 instanceof Match).toBeTruthy();
    expect(match1.players).toEqual([]);
    expect(match1.winner).toBeNull();
    expect(match1.date).toEqual(fecha);
});

test('Crear un partido con fecha como string d/m/Y', () => {
    const fecha = new Date('2023/10/22');
    const match1 = new Match('22/10/2023');
    expect(match1).toEqual({
        players: [], 
        winner: null, 
        date: fecha
    });
    expect(match1 instanceof Match).toBeTruthy();
    expect(match1.players).toEqual([]);
    expect(match1.winner).toBeNull();
    expect(match1.date).toEqual(fecha);
});

test('Insertar un jugador en un partido sin jugadores', () =>{
    const match1 = new Match();
    const player1 = new Player('Pepe');
    expect(match1.addPlayer(player1)).toBeTruthy();
    // expect(match1.players[0]).toBe(player1);
    expect(match1.players.length).toBe(1);
    expect(match1.players).toContain(player1);

});
test('Insertar un jugador en un partido con un jugador', () =>{
    const match1 = new Match();
    const player1 = new Player('Pepe');
    expect(match1.addPlayer(player1)).toBeTruthy();
    const player2 = new Player('Juan');
    expect(match1.addPlayer(player2)).toBeTruthy();
    // expect(match1.players[0]).toBe(player1);
    // expect(match1.players[1]).toBe(player2);
    expect(match1.players.length).toBe(2);
    expect(match1.players).toContain(player1);
    expect(match1.players).toContain(player2);
});

test('Insertar 3 jugadores, solo deben estar los 2 primeros, el último no se inserta', () => {
    const match1 = new Match();
    const player1 = new Player('Pepe');
    expect(match1.addPlayer(player1)).toBeTruthy();
    const player2 = new Player('Juan');
    expect(match1.addPlayer(player2)).toBeTruthy();
    const player3 = new Player('Ana');
    expect(match1.addPlayer(player3)).toBeFalsy();
    expect(match1.players.length).toBe(2);
    expect(match1.players).toContain(player1);
    expect(match1.players).toContain(player2);
    expect(match1.players).not.toContain(player3);
});

test('Indicar un ganador: ganador es jugador, la fecha del partido ya pasó', () => {
    const match = new Match('10/10/2023');
    const player1 = new Player('Pepe');
    const player2 = new Player('Juan');
    match.addPlayer(player1);
    match.addPlayer(player2);
    expect(match.setWinner(player1)).toBeTruthy();
    expect(match.winner).toBe(player1);
});

test('Indicar un ganador: ganador es jugador, el partido aún no se ha celebrado', () => {
    const match = new Match('10/10/2030');
    const player1 = new Player('Pepe');
    const player2 = new Player('Juan');
    match.addPlayer(player1);
    match.addPlayer(player2);
    expect(match.setWinner(player1)).toBeFalsy();
    expect(match.winner).toBeNull();
});

test('Indicar un ganador: ganador es jugador, el partido se ha celebrado y el ganador es un tercer jugador', () => {
    const match = new Match('10/10/2023');
    const player1 = new Player('Pepe');
    const player2 = new Player('Juan');
    const player3 = new Player('Ana');
    match.addPlayer(player1);
    match.addPlayer(player2);
    expect(match.setWinner(player3)).toBeFalsy();
    expect(match.winner).toBeNull();
});