/*
Merge sort uses a recursive methodology to sort an array.
It takes advantage of the fact that it is relatively easy to sort two arrays
as long as each is sorted in the first place. 
Recursively divide the original input in two until we reach the base case
of an array with one item. A single item array is naturally sorted. 
Then we start combining. Unwinding the recursive calls that split the original
array, eventually producing a final sorted array of all the elements.

1. Recursively split the input array in half until a sub-array with only one element
is produced.

2. Merge each sorted sub-array together to produce the final sorted array.

Time complexity is O(nlog(n))
Space complexity is O(n)
*/


//Merger function that merges two sorted arrays into one sorted array
function merger(arr1, arr2){
    let i = 0, j = 0, mergedArr = [];

    while (i < arr1.length && j < arr2.length){
        if (arr1[i] > arr2[j]){
            mergedArr.push(arr2[j++])
        } else{
            mergedArr.push(arr1[i++]);
        }
    }

    while (i < arr1.length){
        mergedArr.push(arr1[i++]);
    }
    while (j < arr2.length){
        mergedArr.push(arr2[j++]);
    }

    return mergedArr;
}

function mergeSort(array){

    return array;
}

console.log(mergeSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));