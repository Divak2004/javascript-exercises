const removeFromArray = function(arr, ...nums) {
    let res = []
    arr.forEach(element => {
        if (!(nums.includes(element))) {
            res.push(element)
        }
    });
    return res
};

// Do not edit below this line
module.exports = removeFromArray;
