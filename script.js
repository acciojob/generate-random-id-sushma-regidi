function run() {
  if (typeof require !== "undefined" && typeof process !== "undefined") {
    // Running in Node.js
    main(require("fs").readFileSync(0, "utf-8"));
  } else {
    // Running in browser (Cypress or HTML)
    // Example: take input via prompt
    let n1 = parseInt(prompt("Enter size of first array"));
    let arr1 = prompt("Enter first array").split(" ").map(Number);
    let n2 = parseInt(prompt("Enter size of second array"));
    let arr2 = prompt("Enter second array").split(" ").map(Number);

    let result = addArrays(arr1, arr2);
    alert(result.join(""));
  }
}

run();


