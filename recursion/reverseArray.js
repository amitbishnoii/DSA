function swap(arr, i1, i2) {
    let temp = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = temp;
}

function reverse(arr, i, j) {
    if (i >= j) {
        return;
    }
    swap(arr, i, j);
    reverse(arr, i + 1, j - 1);
}
let arr1 = [1, 2, 3, 4];
reverse(arr1, 0, arr1.length - 1);
console.log(arr1);
