/*
Bubble Sort Method
Starts at the beginning of an unsorted array
and 'bubbles up' unsorted values towards
the end, iterating through the array
until it is completely sorted.
It does this by comparing adjacent items and swapping
them if they are out of order.
The method continues looping through the array
until no swaps occur. at which point the array
is sorted.

Requires multiple iterations and has quadratic time complexity
*/

function bubbleSort(array){
    let arrCopy = array.slice();

    function swap(a,b, arr){
        let temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
    }

    for (let i = 0; i < arrCopy.length; i++){
        for (let j = 0; j < arrCopy.length-1 -i; j++){
            if (arrCopy[j + 1] < arrCopy[j]){
                swap(j, j +1, arrCopy);
            }
        }
    }

    return arrCopy;
}

console.log(bubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));

function bubbleSortArrDestructure(array){
    for (let i = 0; i < array.length; i++){
        for (let j = 0; j < array.length - 1 - i; j++){
            if (array[j] > array[j+1]){
                [array[j], array[j+1]] = [array[j+1], array[j]] //ES6 array destructuring 
            }
        }
    }

    return array;
}

console.log(bubbleSortArrDestructure([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));
