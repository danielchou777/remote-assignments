function count(input) {
  // your code here
  const charCount = {};
  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    if (!charCount[char]) {
      charCount[char] = 1;
    } else {
      charCount[char]++;
    }
  }
  return charCount;
}

let input1 = ['a', 'b', 'c', 'a', 'c', 'a', 'x'];

console.log(count(input1));
// should print {a:3, b:1, c:2, x:1}

function groupByKey(input) {
  // your code here
  const charSum = {};
  for (let i = 0; i < input.length; i++) {
    const char = input[i].key;
    const charValue = input[i].value;
    if (!charSum[char]) {
      charSum[char] = charValue;
    } else {
      charSum[char] += charValue;
    }
  }
  return charSum;
}

let input2 = [
  { key: 'a', value: 3 },
  { key: 'b', value: 1 },
  { key: 'c', value: 2 },
  { key: 'a', value: 3 },
  { key: 'c', value: 5 },
];

console.log(groupByKey(input2));
// should print {a:6, b:1, c:7}
