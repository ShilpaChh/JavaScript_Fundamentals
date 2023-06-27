// CH 8 - Challenge:
// In a new file counter.js:

// Declare a variable counter initialised at the value 0 — this value will need to change, so use 
// let rather than const.
// Declare a function called increment that:
// increments the value of counter by 1
// and prints it using console.log
// Using setInterval, call this function every second so the counter is incremented and printed 
// every second.
// If you've done the above correctly, you should be able to run the file and see the counter being 
// incremented and printed every second:

let counter = 0

const increment = () => {
    x = counter + 1;
    console.log(x);
    counter = x;
}

const interval = (interval, func) => {
    setInterval(func, interval);
}

interval(1000, increment);

// o/p:
// ➜  bites git:(main) ✗ node counter.js 
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
// 13
// 14 .....