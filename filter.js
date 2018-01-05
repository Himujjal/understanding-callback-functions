// Run this using : runNode filter

let originalArr = [23, 25, 26, 71, 24, 72, 96, 104, 27, 89];

let filterFunc = (formalArr, callbackFunctionFormal ) => {
    let newArr = [];
    for(let i = 0; i < formalArr.length ; i++ ) {
        if(callbackFunctionFormal(formalArr[i])){   // if it is true then
            newArr.push(formalArr[i]);
        }
    }
    return newArr;
}  

// returns true/false if the element is a multiple of 4:
let callbackFunctionOriginal = (element) => element % 4 == 0; 

let finalArr = filterFunc(originalArr, callbackFunctionOriginal);

console.log("\nLet's filter out only the multiples of 4 from these array\n");
console.log("Original Array: ", originalArr, "\n");
console.log("Writing this using the help of our custom mapFunc: \n")
console.log(finalArr);
console.log("\nWriting this with the help of Array.map : \n");
console.log(originalArr.filter(callbackFunctionOriginal))
console.log("\n")
