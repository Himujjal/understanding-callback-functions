// Run this using : runNode map

let originalArr = [1,2,3,4];

let mapFunc = (formalArr, callbackFunctionFormal ) => {
    let newArr = [];
    for(let i = 0; i < formalArr.length ; i++ ) newArr[i] = callbackFunctionFormal(formalArr[i]);
    return newArr;
}  

let callbackFunctionOriginal = (element) => element + 4;

let finalArr = mapFunc(originalArr, callbackFunctionOriginal);

console.log("\nWriting this using the help of our custom mapFunc: \n")
console.log(finalArr);
console.log("\nWriting this with the help of Array.map : \n");
console.log(originalArr.map(callbackFunctionOriginal))