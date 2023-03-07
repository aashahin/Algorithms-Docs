const names = ["Hozaifa", "Abdelrahman", "Shaheen"];

// Example One
function printFun(name) { // o(1)
  return name[0]
}

// Example Two
function evenOdd(num){ // o(1)
    return num % 2 === 0 ? "even" : "odd";
}

// Run Functions

// Run Example One
console.log(evenOdd(5)) // o(1)

// Run Example Two
console.log(printFun(names)) // o(1)