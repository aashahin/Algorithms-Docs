// Example One

function findMax(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    count++;
  }
  return `Inputs: ${arr.length}\noperations: ${count}`;
}

console.log(findMax([4, 6, 7, 8, 6, 2])); // Inputs: 6 operations: 6'

// Example Two
function sum(arr){
    let array = [];
    for(let i = 0;i<arr.length;i++){
        array += arr[i]
    }
    return array;
}

console.log(sum([4, 6, 7, 8, 6, 2]))
