let arr = [12, 43, 22, 5, 1, 24];

function sort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let j = i;
        while (j > 0 && arr[j - 1] > arr[j]) {
            let temp = arr[j - 1];
            arr[j - 1] = arr[j];
            arr[j] = temp;
            j--;
        }
    }
}

sort(arr);
console.log(arr);
