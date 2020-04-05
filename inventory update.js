//Compare and update the inventory stored in a 2D array against a second 2D array of
// a fresh delivery.
// Update the current existing inventory item quantities (in arr1). IF an item 
//cannot be found, add the new item and quantity into the inventory array.
//The returned inventory array should be in alphabetical order.

 
function updateInventory(arr1, arr2){
    //convert current inventory arr1 into a one dimensional array
    const inventory = Array.prototype.concat.apply([], arr1);

    console.log(inventory);

    //Loop through new delivery (Arr2)
    for (let i = 0; i< arr2.length; i++){
        const item = arr2[i][1];
        const quantity = arr2[i][0];

        //Check if item is already in current inventory
        const position = inventory.indexOf(item);

        //Existing item: update quantity
        if (position !== -1){
            const row = Math.floor(position / 2);
            arr1[row][0] += quantity;
        } else{
            //new item, add to inventory
            arr1.push([quantity, item]);
        }
    }

    //sort inventory in alphabetical order
    arr1.sort((previous,next) => (previous[1] > [next[1]] ? 1: -1));

    return arr1;
}

//Example inventory
var curInventory = [
    [21, 'Bowling Ball'],
    [2, 'Dirty Sock'],
    [1, 'Hair Pin'],
    [5, 'Microphone']
]

var newInventory = [
    [2, 'Hair Pin'],
    [3, 'Half-Eaten Apple'],
    [67, 'Bowling Ball'],
    [7, 'Toothpaste']
];

console.log(updateInventory(curInventory, newInventory));