// Example One

let N = 8, k = 0;
  
// First loop run N/2 times
for (let i = parseInt(N / 2); i <= N; i++) {
    // Inner loop run log N
    // times for all i
      
    for (let j = 2; j <= N;j = j * 2) {
        // Print the value k
        console.log(k +" ");
        k = k + parseInt(N / 2);
    }
}

// Example Two By Merge Sort
function merge(left,right){
    let sortedArr = [];

    while(left.length && right.length){
        if(left[0] < right[0]){
            sortedArr.push(left.shift()) // Add First Element from left to sortedArr
        }else{
            sortedArr.push(right.shift()) // Add First Element from right to sortedArr
        }
    }
    return [...sortedArr,...left,...right]
}

function mergeSort(array){
    if(array.length === 1) return array;
    const middle = Math.floor(array.length / 2);
    const right = mergeSort(array.slice(0,middle));
    const left = mergeSort(array.slice(middle));
    
    return merge(left,right);
}


console.log(mergeSort([9,4,5,6,7]))