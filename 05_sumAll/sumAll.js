const sumAll = function(num1, num2) {
    let num = 0
    let a = [];
    let sum = 0
   


    if (num1 > num2) {
        number = num1; //0=123
        num1 = num2;
        num2 = number


    } else {
        num1 = num1;
       num2 = num2;

    }

    function createArray (num1, num2) {
        
        for (let i = num1; i < num2 + 1; i++) {
       
        num = i
        //console.log(num) //1,2, 3, 4
        a.push(num)
    }
        return a;
    }

    
 
    function addAll(arry) {
        let arrayLength = arry.length;
        
        
        for (let i = 0; i < arrayLength; i++) {
            sum = sum + arry[i];
        }

        return sum;
    }
   
   
   
   num = addAll(createArray(num1, num2));

   if (num1 < 0 || num2 < 0){
    num = "ERROR";
} 

if (typeof num1 != typeof num2){
    num = "ERROR";

}

    return num;

};

// Do not edit below this line
module.exports = sumAll;
