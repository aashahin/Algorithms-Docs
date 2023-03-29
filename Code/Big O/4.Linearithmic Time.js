// Merge
function merge(arr1 = [],arr2 = []){  // o(n)
    const merged = [];
    let arrOneIndex = 0;
    let arrTwoIndex = 0;
    while(arrOneIndex < arr1.length || arrTwoIndex < arr2.length){
        if(arrOneIndex >= arr1.length || arr1[arrOneIndex] > arr2[arrTwoIndex]){
            merged.push(arr2[arrTwoIndex]);
            arrTwoIndex+=1;
        }else{
            merged.push(arr1[arrOneIndex]);
            arrOneIndex+=1;
        }
    }
    return merged;
}

// Sort
function sort(arr = []){ // o(n log n) (sort + merge)
    const size = arr.length;

    if(size<2) return arr;
    if(size === 2){
        return arr[0] > arr[1] ? [arr[1], arr[0]] : arr;
    }

    const mid = parseInt(size / 2, 10);
    return merge(sort(arr.slice(0,mid)),sort(arr.slice(mid)))
}

console.log(sort([4,2,5,6,77,55]))