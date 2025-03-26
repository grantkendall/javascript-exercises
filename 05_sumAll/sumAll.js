const sumAll = function(a, b) {
    if (a < 0 || b < 0) return 'ERROR';
    if (!Number.isInteger(a) || !Number.isInteger(b)) return 'ERROR';
    
    let sum = 0;
    const larger = a > b ? a : b;        
    const smaller = a < b ? a : b;
    
    for (let i = smaller; i <= larger; i++) {
        sum += i;
    }
        
    return sum;
}

console.log(sumAll(2.2, 4));

// Do not edit below this line
module.exports = sumAll;
