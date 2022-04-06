const repeatString = function(string, num) {
    
    let newLine = "";
    
    if (num <= -1){
        return "ERROR";
    } else {
    for (let i = 0; i < num; i++) {
        
        newLine += string;
    }
    return newLine;
}
};

// Do not edit below this line
module.exports = repeatString;
