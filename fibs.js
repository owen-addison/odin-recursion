function fibs(n) {
  const array = [0, 1];

  if (n <= 0) {
    return "Please enter an integer larger than 0.";
  } else if (n === 1) {
    return [0];
  } else if (n === 2) {
    return array;
  } else {
    while (array.length < n) {
      array.push(array[array.length - 2] + array[array.length - 1]);
    }

    return array;
  }
}

console.log("n=-1", fibs(-1)); // returns "n=-1 Please enter an integer larger than 0."
console.log("n=1", fibs(1)); // returns "n=1 [ 0 ]"
console.log("n=2", fibs(2)); // returns "n=2 [ 0, 1 ]"
console.log("n=3", fibs(3)); // returns "n=3 [ 0, 1, 1 ]"
console.log("n=8", fibs(8)); // returns "n=8 [ 0, 1, 1,  2, 3, 5, 8, 13 ]"
