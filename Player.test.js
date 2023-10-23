const Player = require('./Player');

test ('Crear jugador' , ()=>{
    const jugador1 = new Player('Pepe');
    expect(jugador1.name).toBe('Pepe');
    expect(jugador1).toEqual({name: 'Pepe', ranking: 0});
});

test('Crear jugador con ranking', ()=>{
    const jugador1 = new Player('Pepe',7);
    expect(jugador1.ranking).toBe(7);
    jugador1.ranking = 9;
    expect(jugador1.ranking).toBe(9);
    expect(jugador1).toEqual({name: 'Pepe', ranking: 9});
});

test ('Crear jugador male' , ()=>{
    const jugador1 = new Player('Pepe',5, 'male');
    expect(jugador1.name).toBe('Pepe');
    expect(jugador1.gender).toBe('male');
});

test ('Crear jugador female sin indicar el género' , ()=>{
    const jugador1 = new Player('Ana', 'female');
    expect(jugador1.name).toBe('Ana');
    expect(jugador1.gender).toBe('female');
});

test ('Crear jugador female por poner genero extraño' , ()=>{
    const jugador1 = new Player('Ana',2,'kkfu');
    expect(jugador1.name).toBe('Ana');
    expect(jugador1.gender).toBe('female');
});