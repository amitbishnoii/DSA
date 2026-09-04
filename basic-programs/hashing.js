let arr = [1, 2, 3, 4, 5, 6, 1, 2, 2, 1, 3];
let hash = new Array(arr.length + 1).fill(0);

// pre fetch/store
for (let i = 0; i < arr.length; i++) {
    hash[arr[i]] += 1;
}

// count frequency of numbers
function countFreq(arr) {
    let map = new Map();
    for (let i = 0; i < arr.length; i++) {
        map.set(arr[i], (map.get(arr[i]) || 0) + 1);
    }
    map.forEach((value, key) => {
        console.log(key, "->", value);
    });
}

countFreq([1, 1, 2, 3, 1, 2]);
