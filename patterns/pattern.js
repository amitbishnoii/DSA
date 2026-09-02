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
    //     *
    //    ***
    //   *****
    //  *******
    // *********
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5 - i - 1; j++) {
            process.stdout.write(" ");
        }
        for (let k = 0; k < 2 * i + 1; k++) {
            process.stdout.write("*");
        }
        for (let l = 0; l < 5 - i - 1; l++) {
            process.stdout.write(" ");
        }
        console.log();
    }
}

function Pattern8() {
    // *********
    //  *******
    //   *****
    //    ***
    //     *
    for (let i = 4; i >= 0; i--) {
        for (let j = 0; j < 5 - i - 1; j++) {
            process.stdout.write(" ");
        }
        for (let k = 0; k < 2 * i + 1; k++) {
            process.stdout.write("*");
        }
        for (let l = 0; l < 5 - i - 1; l++) {
            process.stdout.write(" ");
        }
        console.log();
    }
}

function Pattern9() {
    //     *
    //    ***
    //   *****
    //  *******
    // *********
    // *********
    //  *******
    //   *****
    //    ***
    //     *
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5 - i - 1; j++) {
            process.stdout.write(" ");
        }
        for (let k = 0; k < 2 * i + 1; k++) {
            process.stdout.write("*");
        }
        for (let l = 0; l < 5 - i - 1; l++) {
            process.stdout.write(" ");
        }
        console.log();
    }
    for (let i = 4; i >= 0; i--) {
        for (let j = 0; j < 5 - i - 1; j++) {
            process.stdout.write(" ");
        }
        for (let k = 0; k < 2 * i + 1; k++) {
            process.stdout.write("*");
        }
        for (let l = 0; l < 5 - i - 1; l++) {
            process.stdout.write(" ");
        }
        console.log();
    }
}

function Pattern10(n) {
    // *
    // **
    // ***
    // ****
    // *****
    // ****
    // ***
    // **
    // *
    for (let i = 0; i < 2 * n - 1; i++) {
        let stars = i;
        if (i > n) stars = 2 * n - i;
        for (let j = 1; j <= stars; j++) {
            process.stdout.write("*");
        }
        console.log();
    }
}

function Pattern11() {
    // 1
    // 01
    // 101
    // 0101
    // 10101
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j <= i; j++) {
            if (i % 2 === 0) {
                if (j % 2 === 0) {
                    process.stdout.write(`${1}`);
                } else {
                    process.stdout.write(`${0}`);
                }
            } else {
                if (j % 2 === 0) {
                    process.stdout.write(`${0}`);
                } else {
                    process.stdout.write(`${1}`);
                }
            }
        }
        console.log();
    }
}

function Pattern12() {
    // 1      1
    // 12    21
    // 123  321
    // 12344321
    for (let i = 1; i < 5; i++) {
        for (let j = 1; j <= i; j++) {
            process.stdout.write(`${j}`);
        }
        for (let j = 0; j < 2 * (4 - i); j++) {
            process.stdout.write(" ");
        }
        for (let j = i; j >= 1; j--) {
            process.stdout.write(`${j}`);
        }
        console.log();
    }
}

function Pattern13() {
// 1 
// 2 3 
// 4 5 6 
// 7 8 9 10 
// 11 12 13 14 15 
    let a = 1;
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j <= i; j++) {
            process.stdout.write(`${a} `);
            a += 1;
        }
        console.log();
    }
}

function Pattern14() {
    
}