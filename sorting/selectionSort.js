let arr = [12, 43, 22, 5, 1, 24];

function sort(arr) {
    for (let i = 0; i <= arr.length - 2; i++) {
        let min = i;
        for (let j = i + 1; j <= arr.length - 1; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        let temp = arr[min];
        arr[min] = arr[i];
        arr[i] = temp;
    }
}

sort(arr);
console.log(arr);
