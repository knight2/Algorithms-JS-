/*
Selection Sort

We select the minimum value in a list and 
swap it with the first value in the list.
Then it starts at the second position,
selecting the smallest value in the
remaining list. It continues
iterating through the list and swapping
elements until it reaches the end of the
list. Now the list is sorted.
Selection sort has quadratic time complexity
in all cases.
*/


function selectionSort(array){
    function swap(a,b,arr){
        let tmp = arr[a];
        arr[a] = arr[b];
        arr[b] = tmp;
    }

    for (let i = 0; i < array.length -1; i++){
        let min = i;

        for (let j = i + 1; j < array.length; j++){
            if (array[min] > array[j]){
                min = j; 
            }
        } 
        swap(i, min, array);
    

    }

    return array;
}

console.log(selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));
