function plusMinus(arr) {
    // Write your code here
    const denominator = arr.length;
    let positive = 0;
    let negative = 0;
    let zero = 0;

    arr.forEach(element => {
        if (element > 0) {
            positive++;
        }
        if (element < 0) {
            negative++;
        }
        if (element == 0) {
            zero++;
        }
    });
    console.log((positive/denominator).toFixed(6));
    console.log((negative/denominator).toFixed(6));
    console.log((zero/denominator).toFixed(6));
}

plusMinus([1,1,0,-1,-1]);