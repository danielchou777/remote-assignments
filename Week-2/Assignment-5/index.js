function binarySearchPosition(numbers, target) {
  let start = 0;
  let end = numbers.length - 1;

  while (end >= start) {
    const mid = start + Math.floor((end - start) / 2);
    const midNum = numbers[mid];

    if (midNum === target) {
      return mid;
    } else if (midNum < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  // If target not exists, return -1
  return -1;
}
console.log(binarySearchPosition([1, 2, 5, 6, 7], 1)); // should print 0
console.log(binarySearchPosition([1, 2, 5, 6, 7], 6)); // should print 3
