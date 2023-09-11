//Name	Muhammad Nouman Attique
//Roll No	PIAIC206489
//Batch	Batch 47

// Intentional Error: If you haven’t received an array index error in one of your programs yet, 
// try to make one happen. Change an index in one of your programs to produce an index error. 
// Make sure you correct the error before closing the program.

const numbers: number[] = [1, 2, 3, 4, 5];

// Intentionally trying to access an index that doesn't exist
const index = 10;
console.log(numbers[index]);  // This will produce an index error

// To correct the error, make sure the index is within the valid range
if (index >= 0 && index < numbers.length) {
  console.log(numbers[index]);  // This will print the element at the specified index
} else {
  console.log("Index is out of range");
}
