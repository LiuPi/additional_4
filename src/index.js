function multiplication(first, second) {
    let x = first.split("").reverse();
    let y = second.split("").reverse();
    let result = [];

    for (let i = 0; i < x.length; i++) {
        for (let j = 0; j < y.length; j++) {
            let index = i + j;
            result[index] = x[i] * y[j] + (index >= result.length ? 0 : result[index]);
            if (result[index] > 9) {
                result[index + 1] = Math.floor(result[index] / 10) + (index + 1 >= result.length ? 0 : result[index + 1]);
                result[index] -= Math.floor(result[index] / 10) * 10;
            }
        }
    }
    return result.reverse().join("");
}

module.exports = function multiply(first, second) {
    return multiplication(first, second);
};