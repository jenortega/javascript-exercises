const reverseString = function(string) {
    let newString = "";

    let num = Number(string.length - 1);

    for (let i = num; i > -1; i--) {
        newString += string.charAt(i);
    }
    return newString;
};


// Do not edit below this line
module.exports = reverseString;
