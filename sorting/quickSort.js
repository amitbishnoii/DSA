let arr = [8, 3, 9, 1, 7, 6, 2];

function findIndex(arr, low, high) {
    let i = low;
    let j = high;
    let pivot = arr[low];
    while (i < j) {
        while (arr[i] <= pivot && i <= high) {
            i++;
        }
        while (arr[j] > pivot && j >= low) {
            j--;
        }
        if (i < j) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    let temp = arr[low];
    arr[low] = arr[j];
    arr[j] = temp;
    return j;
}

function sort(nums) {
    let low = 0;
    let high = nums.length - 1;
    function quickSort(arr, low, high) {
        if (low < high) {
            let pIndex = findIndex(arr, low, high);
            quickSort(arr, low, pIndex - 1);
            quickSort(arr, pIndex + 1, high);
        }
    }
    quickSort(nums, low, high);
}

sort(arr);
console.log(arr);
