const chars = ["a","b","c","d"]

function printFor(arr){
let operations = 0;
for(let i= 0; i < arr.length;i++){
    for(let j = 0; j < arr.length;j++){
        operations++;
        console.log(arr[i],arr[j])
    }
}
console.log(`Input= ${arr.length}\nOperations= ${operations}`)
}

printFor(chars)