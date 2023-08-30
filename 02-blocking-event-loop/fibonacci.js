// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55

function fibRec(n) {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
}

function fibOutMemory(n) {
    return new Promise((res, rej) => {
        if (n <= 1) {
            return res(n);
        }
        setImmediate(() =>
            Promise.all([fibOutMemory(n - 1), fibOutMemory(n - 2)]).then(([fib1, fib2]) =>
                res(fib1 + fib2),
            ),
        );
    });
}

const cache = new Map();

function fibWithCache(n) {
    return new Promise((res, rej) => {
        if (n <= 1) {
            return res(n);
        }
        if (cache.has(n)) {
            return res(cache.get(n));
        }
        setImmediate(() =>
            fibWithCache(n - 1).then((fib1) =>
                fibWithCache(n - 2).then((fib2) => {
                    cache.set(n, fib1 + fib2);
                    res(fib1 + fib2);
                }),
            ),
        );
    });
}

function fibLinear(n) {
    if (n <= 1) return n;
    let fib1 = 0;
    let fib2 = 1;
    for (let i = 1; i < n; i++) {
        [fib1, fib2] = [fib2, fib1 + fib2];
    }
    return fib2;
}

console.log(fibLinear(1000));
