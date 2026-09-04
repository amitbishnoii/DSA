let arr = [1, 2, 3, 4, 5, 6, 1, 2, 2, 1, 3];
let hash = new Array(arr.length + 1).fill(0);

// pre fetch/store
for (let i = 0; i < arr.length; i++) {
    hash[arr[i]] += 1;
}

