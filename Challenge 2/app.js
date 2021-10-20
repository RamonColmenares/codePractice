// link https://www.hackerrank.com/challenges/three-month-preparation-kit-mini-max-sum/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=three-month-preparation-kit&playlist_slugs%5B%5D=three-month-week-one
function miniMaxSum(arr) {
    // Write your code here
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        arr2.push(arr.reduce((acum, num) => acum + num) - arr[i]);
    }
    arr2.sort();
    console.log(arr2[0] + " " + arr2[4]);
}

miniMaxSum([1,3,5,7,9]);