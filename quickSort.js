/*
Quick Sort is an efficient, recursive divide and conquer approach to
sorting an array. In this method, a pivot value is chosen in the original array.
The array is then partitioned into two subarrays of values less than and 
greater than the pivot value. We then combine the result by recursively 
calling the quick sort algorithm on both sub-arrays. This continues 
until the base case of an empty or single-item array is reached, which we return.
The unwinding of the recursive call returns us to the sorted array.

Quick sort is a very efficient sorting method, providing O(nlog(n)) performance
on average. 
*/

function quickSort(array, left = 0, right = array.length -1){

    //Swapping array elements with ES6 array destructuring
    function swap (arr, x, y){
        [arr[x], arr[y]] = [arr[y], arr[x]];
    }

    //Pivot function returns the fixed pivot point
    function pivot(arr, left = 0, right = arr.length - 1){
        let shift = left;
        for (let i = left + 1; i <= right; i++){
            //Move all the smallest elements to the left side
            if (arr[i] < arr[left]){
                swap(arr, i, ++shift);
            }
        }

        //Swap the last element with the left
        swap(arr, left, shift);
        return shift;
    }

    if (left < right){
        let pivotIndex = pivot(array, left, right);

        //Recursively call the function to the left of the pivot and to the right of the pivot
        quickSort(array, left, pivotIndex -1);
        quickSort(array, pivotIndex + 1, right);
    }

    return array;
}

console.log(quickSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));
