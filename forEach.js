// Run this using : runNode forEach

let originalArr = [20, 30, 40, 50, 60, 70];

let forEachFunc = (formalArr, callbackFunctionFormal ) => {
    for(let i = 0; i < formalArr.length ; i++ ) callbackFunctionFormal(formalArr[i], i);
}  

// returns true/false if the element is a multiple of 4:
let callbackFunctionOriginal = (element, index) => {
    console.log("The new element is: " + (element + 20) + " & The index is: " + index);
}

console.log("\nLet's log every element and their sum with 20. (remember forEach does not return another array. Its void function ) \n");

console.log("Original Array: ", originalArr, "\n");

console.log("After applying forEachFunc: \n");

forEachFunc(originalArr, callbackFunctionOriginal);

console.log("\nWriting this with the help of Array.forEach : \n");

originalArr.forEach(callbackFunctionOriginal);

console.log("\n")
