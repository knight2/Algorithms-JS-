//Given an array arr, find element pairs whose sum
//equals the second argument args, and return the sum of their indices
//You may use multiple pairs that have the same numeric elements
// but different indicies.

/*
Each pair should use the lowest possible available indices. Once an element has been used it cannot be reused to pair with another element. For instance, pairwise([1, 1, 2], 3) creates a pair [2, 1] using the 1 at index 0 rather than the 1 at index 1, because 0+2 < 1+2.

For example pairwise([7, 9, 11, 13, 15], 20) returns 6. The pairs that sum to 20 are [7, 13] and [9, 11]. We can then write out the array with their indices and values.
*/

function pairwise(arr, arg){
   var sum = 0; //Set sum of indicies to zero

   //Make a local copy of the arguments object to not modify it directly
   var pairArr = arr.slice(); 

   //looping from the first element
   for (let i = 0; i < pairArr.length; i++){
       // looping from the second element by setting first element constnat
       for (let j = i + 1; j < pairArr.length; j++){


            //Check if the sum is equal to arg
            if(pairArr[i] + pairArr[j] == arg){
                //add the indicies
                sum+= i + j;
                //Set indicies to NaN so they can't be used in next iteration
                pairArr[i] = pairArr[j] = NaN;
            }
       }
   }
   return sum;
}

console.log(pairwise([1,4,2,3,0,5], 7));