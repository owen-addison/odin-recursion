/*
PSEUDOCODE

FUNCTION mergeSort(arr):
  IF arr.length <= 1 THEN
    RETURN arr
  ELSE
    DECLARE middle = arr.length / 2
    DECLARE left = arr.slice(0, middle)
    DECLARE right = arr.slice(middle)

    RETURN merge(mergeSort(left), mergeSort(right))
  END IF
END FUNCTION

FUNCTION merge(left, right):
  DECLARE result = []

  WHILE left.length > 0 AND right.length > 0 DO
    IF left[0] < right[0] THEN
      result.push(left.shift())
    ELSE
      result.push(right.shift())
    END IF
  END WHILE

  WHILE left.length > 0 DO
    result.push(left.shift())
  END WHILE

  WHILE right.length > 0 DO
    result.push(right.shift())
  END WHILE

  RETURN RESULT
END FUNCTION
*/

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  } else {
    const middle = arr.length / 2;
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
  }
}

function merge(left, right) {
  const result = [];

  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  while (left.length > 0) {
    result.push(left.shift());
  }

  while (right.length > 0) {
    result.push(right.shift());
  }

  return result;
}

console.log(mergeSort([3, 2, 8, 6, 4, 1, 7, 5])); // returns [ 1, 2, 3, 4, 5, 6, 7, 8 ]
console.log(mergeSort([24, 3, 6, 76, 234, 123])); // returns [ 3, 6, 24, 76, 123, 234 ]
console.log(mergeSort([3, 5, 2, 8, -2, -5])); // returns [ -5, -2, 2, 3, 5, 8 ]
