
// const Player = require('./Player');

// test('Crear jugador con edad válida', () => {
//   const jugador1 = new Player('Pepe', 7, 'male', new Date(1995, 5, 10));
//   expect(jugador1.age instanceof Date).toBe(true);
//   expect(jugador1.calculateAge()).toBe(28);
//   //expect(jugador1).toEqual({ name: 'Pepe', ranking: 7, age: new Date(1995, 5, 10), gender: 'male' });
//   expect(jugador1.name).toBe('Pepe');
//   expect(jugador1.ranking).toBe(7);
//   expect(jugador1.age).toEqual(new Date(1995, 5, 10));
//   expect(jugador1.gender).toBe('male');
// });

// test('Crear jugador sin proporcionar fecha de nacimiento', () => {
//   const jugador1 = new Player('Ana', 0, 'female');
//   expect(jugador1.age).toBe(undefined);
//   expect(jugador1.calculateAge()).toBeNaN();
//   expect(jugador1).toEqual({ name: 'Ana', ranking: 0, gender: 'female' });
// });

// test('Crear jugador con fecha de nacimiento en formato de cadena', () => {
//   const jugador1 = new Player('Juan', 5, 'male', '10/06/1990');
//   expect(jugador1.age instanceof Date).toBe(true);
//   expect(jugador1.calculateAge()).toBe(31);
//   expect(jugador1).toEqual({ name: 'Juan', ranking: 5, age: new Date(1990, 5, 10), gender: 'male' });
// });

// test('Obtener género del jugador', () => {
//   const jugador1 = new Player('Pepe', 7, 'male', new Date(1995, 5, 10));
//   const jugador2 = new Player('Ana', 0, 'female');
//   expect(jugador1.gender).toBe('male');
//   expect(jugador2.gender).toBe('female');
// });

// test('Obtener categoría del jugador', () => {
//   const jugador1 = new Player('Pepe', 7, 'male', new Date(2009, 4, 15));
//   const jugador2 = new Player('Ana', 0, 'female', new Date(2005, 7, 20));
//   const jugador3 = new Player('Juan', 12, 'male', new Date(2003, 10, 1));
//   const jugador4 = new Player('María', 0, 'female', new Date(1998, 2, 5));

//   expect(jugador1.category).toBe('Benjamin');
//   expect(jugador2.category).toBe('Cadet');
//   expect(jugador3.category).toBe('Junior');
//   expect(jugador4.category).toBe('Senior');
// });

const Player = require('./Player');

test('Crear jugador', () =>{
    const player1 = new Player('Pepe');
    expect(player1.name).toBe('Pepe');
    expect(player1).toEqual({name: 'Pepe', ranking: 0});
});

test('Crear jugador con raking', () => {
    const player1 = new Player('Pepe', 7);
    expect(player1.ranking).toBe(7);
    player1.ranking = 9;
    expect(player1.ranking).toBe(9);
    expect(player1).toEqual({name: 'Pepe', ranking: 9});
});

test('Crear jugador male', () =>{
    const player1 = new Player('Pepe', 5, 'male');
    expect(player1.name).toBe('Pepe');
    expect(player1.gender).toBe('male');
});

test('Crear jugador female', () =>{
    const player1 = new Player('Ana', 3, 'female');
    expect(player1.name).toBe('Ana');
    expect(player1.gender).toBe('female');
});

test('Crear jugador female sin indicar el género', () =>{
    const player1 = new Player('Ana');
    expect(player1.name).toBe('Ana');
    expect(player1.gender).toBe('female');
});

test('Crear jugador female por poner un género extraño', () =>{
    const player1 = new Player('Ana', 2, 'pato');
    expect(player1.name).toBe('Ana');
    expect(player1.gender).toBe('female');
});

test('Crear jugador con fecha nacimiento valida', () => {
    const player1 = new Player('Ana', 2, 'female', '13/04/1999');
    expect(player1.birthday).toBe('13/04/1999');
});

test('Crear  jugador con fecha nacimiento no válida', ()=>{
    const player1 = new Player('Ana',2,'female','kkfu');
    expect(player1.birthday).not.toBe('kkfu');
    expect(player1.birthday).toBeUndefined();
});

test('Crear jugador con fecha nacimiento valida', () => {
  const player1 = new Player('Ana', 2, 'female', '28/10/2000');
  expect(player1.age).toBe(22);
});

test('Jugador benjami',()=>{
  const player1 = new Player('PEPE',1,'male','12/12/2016');
  expect(player1.category).toBe('Benjamin');
});

test('Jugador cadet',()=>{
  const player1 = new Player('PEPE',1,'male','1/1/2010');
  expect(player1.category).toBe('Cadet');
});

test('Jugador junior',()=>{
  const player1 = new Player('PEPE',1,'male','1/1/2004');
  expect(player1.category).toBe('Junior');
});

test('Jugador senior',()=>{
  const player1 = new Player('PEPE',1,'male','12/12/2000');
  expect(player1.category).toBe('Senior');
});

