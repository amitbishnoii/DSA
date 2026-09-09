function segregate0and1(arr) {
    // https://www.geeksforgeeks.org/problems/segregate-0s-and-1s5106/1
    let low = 0;
    let i = low;
    let high = arr.length - 1;
    while (i <= high) {
        if (arr[i] === 0) {
            let temp = arr[i];
            arr[i] = arr[low];
            arr[low] = temp;
            low++;
            i++;
        } else if (arr[i] === 1) {
            let temp1 = arr[i];
            arr[i] = arr[high];
            arr[high] = temp1;
            high--;
        }
    }
}
