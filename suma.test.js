const {suma, resta, producto} = require('./suma');

test('sumar 1 + 2 es igual a 3', () => {
    expect(suma(1, 2)).toBe(3);
});

test('sumar 5 + 5 es igual a 10', () => {
    expect(suma(5, 5)).toBe(10);
});

test('resta 5 - 2 es igual a 3', () => {
    expect(resta(5, 2)).toBe(3);
});

test('resta 2 * 3 es igual a 6', () => {
    expect(producto(2, 3)).toBe(6);
});


