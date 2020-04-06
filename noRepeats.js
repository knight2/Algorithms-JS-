// Return the number of total permutations of the
// provided string that don't have repeated consecutive letters
// Assume that all characters in the provided string are each unique.
// For example, aab should return 2, because it has 6 total permutations.

function permAlone(str){
    //Create a regex to match repeated consecutive characters
    var regex = /(.)\1+/;

    //Split the string into an array of characters
    var arr = str.split("");
    var permutations = [];
    var tmp;

    //return 0 if str contains same characters
    if (str.match(regex) !== null && str.match(regex)[0] === str) return 0;

    //function to swap variables' content
    function swap(index1, index2){
        tmp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = tmp;
    }

    //Generate arrays of permutations using the algorithm
    function generate(int){
        if (int === 1){
            permutations.push(arr.join(""));
        } else{
            for (var i = 0; i != int; i++){
                generate(int - 1);
                swap(int % 2 ? 0 : i, int - 1);
            }
        }
    }

    generate(arr.length);

    //Filter the array of repeated permutations
    var filtered = permutations.filter(function(string){
        return !string.match(regex);
    });

    //return how many have no repetitions
    return filtered.length;
}

console.log(permAlone('aab'))