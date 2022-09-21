function fibonacci(n: number): number {
    if (n == 1) {
        return n = 0;
    }
    if (n == 2) {
        return n = 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2)
    }
}

let sum: number = 0;
for (let i = 1; i <= 10; i++) {
    console.log(fibonacci(i))
    sum+=fibonacci(i);
}
console.log(sum)


