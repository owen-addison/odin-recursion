function fibsRec(n, array = [0, 1]) {
  if (array.length >= n) {
    return array.slice(0, n);
  } else {
    const newNum = array[array.length - 1] + array[array.length - 2];
    array.push(newNum);
    return fibsRec(n, array);
  }
}

console.log(fibsRec(1)); // returns "[ 0 ]"
console.log(fibsRec(2)); // returns "[ 0, 1 ]"
console.log(fibsRec(3)); // returns "[ 0, 1, 1 ]"
console.log(fibsRec(8)); // returns "[ 0, 1, 1,  2, 3, 5, 8, 13 ]"
