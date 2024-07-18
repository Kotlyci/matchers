import lifeBar from '../js/app';

test('test for lifeSort function sorting players in descending order of health', () => {
  const testList = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];
  const sortedList = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  const result = lifeBar(testList);
  expect(result).toEqual(sortedList);
});
