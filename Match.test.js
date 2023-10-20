const Match = require('./Match');

test('Crear un partido, ', () => {
    const partido1 = new Match();
    expect(partido1).toEqual({});
    expect(partido1 instanceof Match).toBeTrue();
});