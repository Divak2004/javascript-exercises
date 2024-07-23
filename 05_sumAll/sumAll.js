const sumAll = function(start, end) {
    let sum = 0
    if (typeof(start) != "number" || typeof(end) != "number" || start < 0 ||
    end < 0) {
        return "ERROR"
    }
    for (let i = Math.min(start, end); i < Math.max(start+1, end+1); i++) {
        sum += i
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
