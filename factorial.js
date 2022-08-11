// 1*2*....*7
// 4!= 4*3*2*1

function multiplicationOfNumber(number) {
    let result = 1;
    for (i = 1; i <= number; i++) {
        result = result * i;
    }
    return result;
}

const result = multiplicationOfNumber(10);
console.log(result);