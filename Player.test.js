
const Player = require('./Player');

test('Crear jugador con edad válida', () => {
  const jugador1 = new Player('Pepe', 7, 'male', new Date(1995, 5, 10));
  expect(jugador1.age instanceof Date).toBe(true);
  expect(jugador1.calculateAge()).toBe(26);
  expect(jugador1).toEqual({ name: 'Pepe', ranking: 7, age: new Date(1995, 5, 10), gender: 'male' });
});

test('Crear jugador sin proporcionar fecha de nacimiento', () => {
  const jugador1 = new Player('Ana', 0, 'female');
  expect(jugador1.age).toBe(undefined);
  expect(jugador1.calculateAge()).toBeNaN();
  expect(jugador1).toEqual({ name: 'Ana', ranking: 0, gender: 'female' });
});

test('Crear jugador con fecha de nacimiento en formato de cadena', () => {
  const jugador1 = new Player('Juan', 5, 'male', '10/06/1990');
  expect(jugador1.age instanceof Date).toBe(true);
  expect(jugador1.calculateAge()).toBe(31);
  expect(jugador1).toEqual({ name: 'Juan', ranking: 5, age: new Date(1990, 5, 10), gender: 'male' });
});

test('Obtener género del jugador', () => {
  const jugador1 = new Player('Pepe', 7, 'male', new Date(1995, 5, 10));
  const jugador2 = new Player('Ana', 0, 'female');
  expect(jugador1.gender).toBe('male');
  expect(jugador2.gender).toBe('female');
});

test('Obtener categoría del jugador', () => {
  const jugador1 = new Player('Pepe', 7, 'male', new Date(2009, 4, 15));
  const jugador2 = new Player('Ana', 0, 'female', new Date(2005, 7, 20));
  const jugador3 = new Player('Juan', 12, 'male', new Date(2003, 10, 1));
  const jugador4 = new Player('María', 0, 'female', new Date(1998, 2, 5));

  expect(jugador1.category).toBe('Benjamin');
  expect(jugador2.category).toBe('Cadet');
  expect(jugador3.category).toBe('Junior');
  expect(jugador4.category).toBe('Senior');
});