let n = 123123345;
let count = 0;
while (n !== 0) {
    count += 1;
    n = parseInt(n / 10, 10);
}
console.log(count);