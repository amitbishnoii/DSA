let arr = [3, 2, 4, 1, 3];

function mergeSort(arr, low, high) {
    if (low >= high) {
        return;
    }
    let mid = Math.floor((low + high) / 2);
    mergeSort(arr, low, mid);
    mergeSort(arr, mid + 1, high);
    merge(arr, low, mid, high);
}

function merge(arr, low, mid, high) {
    let temp = [];
    let ind = 0;
    let i = low;
    let j = mid + 1;
    while (i <= mid && j <= high) {
        if (arr[i] <= arr[j]) {
            temp.push(arr[i]);
            i++;
        } else {
            temp.push(arr[j]);
            j++;
        }
    }

    while (i <= mid) {
        temp.push(arr[i]);
        i++;
    }
    while (j <= high) {
        temp.push(arr[j]);
        j++;
    }
    for (let k = low; k <= high; k++) {
        arr[k] = temp[k - low];
    }
}

mergeSort(arr, 0, arr.length - 1);

console.log(arr);
