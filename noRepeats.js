// Return the number of total permutations of the
// provided string that don't have repeated consecutive letters
// Assume that all characters in the provided string are each unique.
// For example, aab should return 2, because it has 6 total permutations.

function permAlone(str){
    //Create a regex to match repeated consecutive characters
    var regex = /(.)\1+/;
}