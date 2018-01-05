// Run this using : runNode simpleCallbackFunction

let IncreaseByFour = (ele, callBackFunctionFormal) => callBackFunctionFormal(ele);

let callBackFunctionOriginal = (ele) => ele + 4;

console.log(IncreaseByFour(56, callBackFunctionOriginal))