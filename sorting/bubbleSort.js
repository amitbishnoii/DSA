let arr = [12, 43, 22, 5, 1, 24];

function sort(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        for (let j = 1; j <= i; j++) {
            if (arr[j] < arr[j - 1]) {
                let temp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = temp;
            }
        }
    }
}

sort(arr);
console.log(arr);
