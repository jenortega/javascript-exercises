const removeFromArray = function() {
    let newArray = [];
    let argumentsCount = arguments.length; //3 
    let arrayLength = arguments[0].length; //5
    let anArray = arguments[0];

 
 for (j = 1; j < argumentsCount; j++){
 let anArg = arguments[j] //4

checkArguments(anArray, anArg); //1, 2, 3, 5

}
 function checkArguments(arry, arg) {
 let a = [];
  for (let i = 0; i < arrayLength; i++){
    if (arry[i] != arg || typeof arry[i] != typeof arg){
       a.push(arry[i])
      }     
    }

  anArray = a;
  console.log("an array: " + anArray)
  arrayLength=a.length;
  return anArray;
 
}
 
 
    return anArray;
 }

// Do not edit below this line
module.exports = removeFromArray;
