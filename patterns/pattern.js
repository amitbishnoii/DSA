function Pattern1() {
    //  *****
    //  *****
    //  *****
    //  *****
    //  *****

    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            process.stdout.write("*");
        }
        console.log();
    }
}

function Pattern2() {
    // *
    // **
    // ***
    // ****
    // *****

    for (let i = 0; i < 5; i++) {
        for (let j = 0; j <= i; j++) {
            process.stdout.write("*");
        }
        console.log();
    }
}

function Pattern3() {
    // 1
    // 12
    // 123
    // 1234
    // 12345
    for (let i = 1; i < 6; i++) {
        for (let j = 1; j <= i; j++) {
            process.stdout.write(`${j}`);
        }
        console.log();
    }
}

function Pattern4() {
    // 1
    // 22
    // 333
    // 4444
    // 55555
    for (let i = 1; i < 6; i++) {
        for (let j = 1; j <= i; j++) {
            process.stdout.write(`${i}`);
        }
        console.log();
    }
}

function Pattern5() {
    // *****
    // ****
    // ***
    // **
    // *
    for (let i = 5; i >= 1; i--) {
        for (let j = i; j > 0; j--) {
            process.stdout.write("*");
        }
        console.log();
    }
}

function Pattern6() {
// 12345
// 1234
// 123
// 12
// 1
    for (let i = 5; i >= 1; i--) {
        for (let j = 1; j <= i; j++) {
            process.stdout.write(`${j}`);
        }
        console.log();
    }
}

function Pattern7() {
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < (2*i + 1); j++) {
            process.stdout.write(`*`);
        }
        console.log();
    }
}
Pattern7()