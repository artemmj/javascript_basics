for (let i = 1; i <= 10; i++) {
    console.log(i)
}

for (let i = 1, j = 2; i <=5, j <= 6; i++, j+=2) {
    console.log(i, j)
}

for (let i = 1; i < 5; i++) {
    for (let j = 1; j < 5; j++) {
        console.log(i * j)
    }
}

// while
let i = 1
while (i < 5) {
    console.log(i)
    i++
}

// do while
i = 1
do {
    console.log(i)
    i++
} while (i <= 5)

for (item of ["Tom", 21, Object(), 3.145]) {
    console.log(item)
    console.log(typeof(item))
}
