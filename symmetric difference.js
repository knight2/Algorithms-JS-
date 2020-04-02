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

console.log(symmetricDifference(arr1, arr2));