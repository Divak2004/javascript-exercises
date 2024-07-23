const reverseString = function(str) {
    res = ""
    for (let i = str.length-1; i > -1; i--) {
        res += str[i]
    }
    return res
};

// Do not edit below this line
module.exports = reverseString;
