function addArrays(arr1, arr2) {
  let i = arr1.length - 1;
  let j = arr2.length - 1;
  let carry = 0;
  let result = [];

  // Add from rightmost digit to leftmost
  while (i >= 0 || j >= 0 || carry > 0) {
    let d1 = i >= 0 ? arr1[i] : 0;
    let d2 = j >= 0 ? arr2[j] : 0;

    let sum = d1 + d2 + carry;
    result.push(sum % 10);
    carry = Math.floor(sum / 10);

    i--;
    j--;
  }

  // reverse since we collected from right to left
  result.reverse();
  return result;
}

// -------------------------
// Main program: read from stdin
function main(input) {
  const lines = input.trim().split("\n");

  let n1 = parseInt(lines[0].trim()); // size of first array
  let arr1 = lines[1].trim().split(" ").map(Number); // first number as array
  let n2 = parseInt(lines[2].trim()); // size of second array
  let arr2 = lines[3].trim().split(" ").map(Number); // second number as array

  let result = addArrays(arr1, arr2);

  // Print each digit on a new line
  console.log(result.join("\n"));
}

// Run program
main(require("fs").readFileSync(0, "utf-8"));

