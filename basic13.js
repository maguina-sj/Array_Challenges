//print numbers 1 through 255

// function PrintTo255() {
//     for (var i = 1; i < 256; i++) {
//         console.log(i)
//     }
// }
// PrintTo255();

// function printOdd255() {
//     for (var i =1; i < 256; i++) {
//         if(i%2 != 0) {
//             console.log(i)
//         }
//     }
// }
// printOdd255();

// function printIntAndSum() {
//     let sum = 0;
//     for(var i=1; i<256; i++) {
//         sum += i;
//         console.log("this is the integer " + i + " and this is the sum " + sum);
//     }
// }

// printIntAndSum();

//iterate and print array - iterate through the array printing each value
// myArray = [3,6,2,5, "hello"]
// function ArrayVals(arr) {
//     for(var i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//     }
// }
// ArrayVals(myArray);

// given an array, find and print its largest element

let myArray2 = [4,7,2,8,23,68,1]
function printMaxOfArray(arr) {
    let max = 0;
    for(var i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    } 
    console.log(max)
}
printMaxOfArray(myArray2);