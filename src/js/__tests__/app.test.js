import GoblinGame from '../app';

test('Testy test', () => {
  const test = new GoblinGame(2);
  expect(test.fieldSize).toEqual(2);
});
