// Run this using : runNode reduce

let originalArr = [2, 34, 521, 124, 67, 89];

// This function will return a particular variable. Any variable. Number, String or even Array.
let reduceFunc = (formalArr, callbackFunctionFormal, initialValue) => {
    let reducedVal = initialValue;
    for(let i = 0; i < formalArr.length; i++){
        reducedVal = callbackFunctionFormal(reducedVal, formalArr[i], i);
    }
    return reducedVal;
}

// Let's do the sum of numbers of the array
let callbackFunctionOriginalSum = (reducedVal, nextElement, index) => reducedVal + nextElement;

let finalReducedValue = reduceFunc(originalArr, callbackFunctionOriginalSum, 0);

console.log("\nLet's try to take the sum of the elements of an array: \n");

console.log("Printing the original Array:\n\n", originalArr);

console.log("\nThe sum of this array is: " + finalReducedValue + "\n")

console.log("Doing it simply using Array.reduce: " + originalArr.reduce( (t,i) => t+i , 0) );

console.log("\n");



console.log("~~~~~~~~  xxxxxxx  ~~~~~~~~~~\n")

// Join method implementation

// Declare an array of strings:
let originalStringArray = ["Hey", "there", "How", "are","you"];

let joinFunction = (arrayToBeJoined, elementThatJoinsWords) => {
    let callbackFunctionOriginalJoin = (reducedVal, nextElement, index) => reducedVal + elementThatJoinsWords + nextElement;
    return reduceFunc(arrayToBeJoined, callbackFunctionOriginalJoin, "");
}


console.log("Let's now try to implement the Array.join method using reduce: \n");

console.log("First let's print out the array: \n");

console.log(originalStringArray);

console.log("\nLet's then try to join this array with a string named: '--' using joinFunction we made ourselves: \n");

console.log(joinFunction(originalStringArray, "--"));

console.log("\nLet's then try to join this array with Array.join method itself: \n")

console.log(originalStringArray.join("--") );

console.log("\nA bit difference but almost the same thing done. That's how the whole thing works\n")

