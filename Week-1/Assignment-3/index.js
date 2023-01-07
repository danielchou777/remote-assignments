function countAandB(input) {
  let a = 0;
  let b = 0;

  for (let i = 0; i < input.length; i++) {
    if (input[i] === 'a') {
      a++;
    } else if (input[i] === 'b') {
      b++;
    }
  }

  const isAPlural = a > 1 ? 's' : '';
  const isBPlural = b > 1 ? 's' : '';

  if (a + b) {
    return `${
      a + b
    } (${a} 'a' letter${isAPlural} and ${b} 'b' letter${isBPlural})`;
  } else {
    return 0;
  }
}

function toNumber(input) {
  return input.map((num) => {
    return num.charCodeAt(0) - 96;
  });
}

let input1 = ['a', 'b', 'c', 'a', 'c', 'a', 'c'];
console.log(countAandB(input1)); // should print 4 (3 ‘a’ letters and 1 ‘b’ letter)
console.log(toNumber(input1)); // should print [1, 2, 3, 1, 3, 1, 3]

let input2 = ['e', 'd', 'c', 'd', 'e'];
console.log(countAandB(input2)); // should print 0
console.log(toNumber(input2)); // should print [5, 4, 3, 4, 5]
