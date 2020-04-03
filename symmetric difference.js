//Create a function that takes two or more arrays and returns
// an array of the syemmtric difference of the provided arrays

function symmetricDifference(arrayOne, arrayTwo){
    var arrDifference = [];

    arrayOne.forEach(function(item){
        if (arrayTwo.indexOf(item) < 0 && arrDifference.indexOf(item) <0){
            arrDifference.push(item);
        } 
    });

    arrayTwo.forEach(function(item){
        if (arrayOne.indexOf(item) < 0 && arrDifference.indexOf(item) <0){
            arrDifference.push(item);
        }
    });

    return arrDifference;
}

var arr1 = [1,2,3];
var arr2 = [2,2,5];
console.log('solution 1');
console.log(symmetricDifference(arr1, arr2));


//Second solution
function symmetricDifferenceSolutionTwo(){
    //Convert the argument object into a proper array
    var args = Array.prototype.slice.call(arguments);

    // Return the symmetric difference of 2 arrays
    var getDiff = function(arr1, arr2){
        //returns items in arr1 that don't exist in arr 2
        function filterFunction(arr1, arr2){
            return arr1.filter(function(item){
                return arr2.indexOf(item) === -1;
            });
        }

        // Run filter function on each array against each other
        return filterFunction(arr1, arr2).concat(filterFunction(arr2, arr1));
    };

    // Reduce all arguments getting the difference of them
    var summary = args.reduce(getDiff, []);

    //Run filter function to get the unique values
    var unique = summary.filter(function(elem, index, self){
        return index === self.indexOf(elem);
    });
    return unique;
}
console.log('solution 2');
console.log(symmetricDifferenceSolutionTwo([1,2,3],[5,2,1,4]));

//Solution 3

const diff = (arr1, arr2)=>[
    ...arr1.filter( e=> !arr2.includes(e)),
    ...arr2.filter(e => !arr1.includes(e))
]; //Return the syemmetric difference of two arrays by picking out elements in the arrays.

const symDiff3 = (...args) => [...new Set(args.reduce(diff))];
//Reduces given arrays using helper function diff() to a single array. 
// Temporarily converts the result to Set to remove duplicates.

console.log('solution 3');
console.log(symDiff3([1,2,3],[5,2,1,4]));


//Solution 4 - O(1) time
// Previous 3 solutions run in O(n^2) time

function symDiff4(...args){
    return [...args.reduce(reducer, new Set())] //Spread operator to convert Set back into array.
};

function reducer(results, arr){
    const compare = new Set(arr);
    //Create a set for items in our current array.
    //This will create a data structure that holds the unique values from the array
    // we're comparing against our accumulator set.

    for (let val of compare){
        if (results.has(val)){
            results.delete(val); //If accumulator set has the item, we delete it.
        } else{
            results.add(val); //If accumulator set does not have the item, we add it.
        }
    }
    return results;
}

console.log('solution 4 in O(1) time');
console.log(symDiff4([1,2,3], [5,2,1,4]));