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

// let myArray2 = [4,7,2,8,23,68,1]
// function printMaxOfArray(arr) {
//     let max = 0;
//     for(var i = 0; i < arr.length; i++) {
//         if (max < arr[i]) {
//             max = arr[i];
//         }
//     } 
//     console.log(max)
// }
// printMaxOfArray(myArray2);

// analyze an array's values and print the average

// let myArray3 = [2,5,2,7,22,7,65]

// function printAverageOfArray(arr) {
//     let avg = 0;
//     let sum = 0;
//     for (let i =0; i<arr.length; i++) {
//         sum += arr[i]  
//     }
//     // console.log(sum)
//     avg = sum/arr.length;
//     console.log(avg)
// }
// printAverageOfArray(myArray3);

//create an array with all the odd integers between 1 and 255 (inclusive)

function returnOddsArray1To255() {
    let oddArray=[];
    for (let i =1; i< 256; i++) {
        if( i %2 !=0){
            oddArray.push(i)
        }
    }
    console.log(JSON.stringify(oddArray))
}

returnOddsArray1To255();

//square each value in a given array, returning that same array with changed values

// let myArray4 = [1,2,3,4,5]

// function squareArrayVals(arr) {
//     for (let i =0; i<arr.length; i++) {
//         arr[i] = arr[i]*arr[i]
//     }
//     console.log(arr)
// }

// squareArrayVals(myArray4);

//given an array and a value Y, count and print the number of array values greater than Y

let myArray5 = [3,5,8,13,4,90,4]
let y =7
function printArrGreaterThanY(arr, y) {
    let count = 0
    for (let i=0; i<arr.length; i++) {
        if(arr[i] > y) {
            count++;
            console.log(arr[i])
        }
    }
    console.log(count)
}

printArrGreaterThanY(myArray5, 7)