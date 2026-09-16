let arr1 = [1, 2, 3, 3, 3, 4];
let arr2 = [1, 1, 1, 2, 3, 4];

let result = [];
let i = 0;
let j = 0;

while (i < arr1.length && j < arr2.length) {
    if (arr1[i] === arr2[j]) {
        result.push(arr1[i]);
        i++;
        j++;
        while (i < arr1.length && arr1[i] === arr1[i - 1]) {
            i++;
        }
        while (j < arr2.length && arr2[j] === arr2[j - 1]) {
            j++;
        }
    } else {
        if (arr1[i] <= arr2[j]) {
            result.push(arr1[i]);
            i++;
            while (i < arr1.length && arr1[i] === arr1[i - 1]) {
                i++;
            }
        } else {
            result.push(arr2[j]);
            j++;
            while (j < arr2.length && arr2[j] === arr2[j - 1]) {
                j++;
            }
        }
    }
}

while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
}

while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
}

console.log(result);
