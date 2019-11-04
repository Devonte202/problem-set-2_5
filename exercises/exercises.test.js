const exercises = require('./exercises');

// Question 2
test('Question 2: reverseArray reverses array', () => {
  const testArr = [1, 2, 3, 4];
  expect(exercises.reverseArray(testArr)).toEqual([4, 3, 2, 1]);
});

// Question 2
test('Question 2: reverseArray leaves original array unchanged', () => {
  const testArr = [1, 2, 3, 4];
  exercises.reverseArray(testArr);
  expect(testArr).toEqual([1, 2, 3, 4]);
});

// Question 3
test(`Question 3: indexOf`, () => {
  const friends = ['carmen', 'anne', 'steph', 'mark'];
  expect(exercises.indexOf(friends, 'carmen')).toBe(0);
  expect(exercises.indexOf(friends, 'steph')).toBe(2);
  expect(exercises.indexOf(friends, 'reuben')).toBe(-1);
});

// Question 4
test('Question 4: join', () => {
  expect(exercises.join([true, 'reuben', 'maya', 21], '+')).toBe('true+reuben+maya+21');
  expect(exercises.join(['javascript', 'html', 'css'])).toBe('javascript,html,css');
});

// Question 5
test('Question 5: push', () => {
  const testArr = [true, '41', 'steph'];
  expect(exercises.push(testArr, 'maya')).toBe(4);
  expect(testArr).toEqual([true, '41', 'steph', 'maya']);
});

// Question 6
test('Question 6: pop', () => {
  const letters = ['a', 'b', 'c', 'd'];
  expect(exercises.pop(letters)).toBe('d');
  expect(letters).toEqual(['a', 'b', 'c']);
});

// Question 7
test('Question 7: unshift', () => {
  const numbers = [0, 1, 2, 3, 4];
  expect(exercises.unshift(numbers, -1)).toBe(6);
  expect(numbers).toEqual([-1, 0, 1, 2, 3, 4]);
});


// Question 8
test('Question 8: shift', () => {
  const friends = ['maya', 'reuben', 'juan pablo'];
  expect(exercises.shift(friends)).toBe('maya');
  expect(friends).toEqual(['reuben', 'juan pablo']);
});

// Question 9
test('Question 9: lastIndexOf', () => {
  const responses = ["good", "best", "bad", "good", "better"];
  expect(exercises.lastIndexOf(responses, "good")).toBe(3);
  expect(exercises.lastIndexOf(responses, "outstanding!")).toBe(-1);
});

// Question 10
test('Question 10: slice', () => {
  const languages = ['python', 'ruby', 'javascript', 'java', 'c++'];
  expect(exercises.slice(languages, 2, 4)).toEqual(['javascript', 'java']);
  expect(exercises.slice(languages, 1)).toEqual(['ruby', 'javascript', 'java', 'c++']);
  expect(exercises.slice(languages)).toEqual(['python', 'ruby', 'javascript', 'java', 'c++']);
});

// Question 10
test('Question 10: expect slice not to mutate original array', () => {
  const languages = ['python', 'ruby', 'javascript', 'java', 'c++'];
  exercises.slice(languages, 1);
  expect(languages).toEqual(['python', 'ruby', 'javascript', 'java', 'c++']);
});

// Question 11
test('Question 11: splice', () => {
  const languages = ['python', 'ruby', 'javascript', 'java', 'c++'];
  expect(exercises.splice(languages, 0, 2)).toEqual(['python', 'ruby']);
});

// Question 11
test('Question 11: splice mutates original array', () => {
  const languages = ['python', 'ruby', 'javascript', 'java', 'c++'];
  exercises.splice(languages, 0, 2);
  expect(languages).toEqual(['javascript', 'java', 'c++']);
});

// Question 12
test('Question 12: spliceForReal', () => {
  const months = ['Jan', 'February', 'March', 'April', 'May', 'June'];
  expect(exercises.spliceForReal(months, 1, 2, 'Febrero', 'Marzo')).toEqual(['February', 'March']);

  exercises.spliceForReal(months, 1, 2, 'Febrero', 'Marzo');
  expect(months).toEqual(['Jan', 'Febrero', 'Marzo', 'April', 'May', 'June']);

  const days = ['sun', 'thur', 'fri', 'sat'];
  expect(exercises.spliceForReal(days, 1, 0, 'mon', 'tues', 'wed')).toEqual([]);

  exercises.spliceForReal(days, 1, 0, 'mon', 'tues', 'wed');
  expect(days).toEqual(['sun', 'mon', 'tues', 'wed', 'thur', 'fri', 'sat']);
});

// Question 13
test('Question 13: concat', () => {
  expect(exercises.concat(['a', 'b', 'c'], ['d', 'e'])).toEqual(['a', 'b', 'c', 'd', 'e']);
});

// Question 14
test('Question 14: shallowCompare', () => {
  expect(exercises.shallowCompare([1], [1])).toBe(true);
  expect(exercises.shallowCompare([1, 'hi', true], [1, 'hi', true])).toBe(true);
  expect(exercises.shallowCompare([1], [2])).toBe(false);
  expect(exercises.shallowCompare([1, 'hi', true], [2, 'hi', true])).toBe(false);
});

test('Question 14: shallowCompare with nested arrays', () => {
  expect(exercises.shallowCompare([1, 2, 3, [3.5, 3.75], 4], [1, 2, 3, [3.5, 3.75], 4])).toBe(false);

  const decimals = [3.5, 3.75];
  expect(exercises.shallowCompare([1, 2, 3, decimals, 4], [1, 2, 3, decimals, 4])).toBe(true);
});

// Question 15
test('Question 15: deepCompare', () => {
  expect(exercises.deepCompare([true, 'devonte', 10], [true, 'devonte', 10])).toBe(true);
  expect(exercises.deepCompare([true, 'devonte', 10], [true, 'devonte', 11])).toBe(false);
  expect(exercises.deepCompare([1, 2, 3, [3.5, 3.75], 4], [1, 2, 3, [3.5, 3.75], 4])).toBe(true);
});
