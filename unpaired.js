// solution function is defined with parameter A.
function solution(A) {
  if (A.length !== 0) {
    if (A.length % 2 !== 0) {
      // the unpairedNumber variable is been initialized.
      // it stores the XOR unpairedNumber of all the elements in the array
      let unpairedNumber = 0;

      // use a for loop to iterate over the elements in the array
      for (let i = 0; i < A.length; i++) {
        // the XOR operation (^) is performed on the current element and the unpairedNumber variable
        unpairedNumber ^= A[i];
      }

      // the final unpairedNumber is returned as the unpaired element
      return unpairedNumber;
    } else {
      console.log("the array has an even number of elements");
    }
  } else {
    console.log("the array is empty");
  }
}

// Test the function with the given example
const A = [9, 3, 9, 3, 9, 7, 9];
console.log(solution(A));

// XOR compares two input bits and generates one output bit.
//  The logic is simple. If the bits are the same, the unpairedNumber is 0.
//  If the bits are different, the unpairedNumber is 1.
