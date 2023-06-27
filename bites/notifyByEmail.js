// CH 7 Challenge

const notifyByEmail = (email) => {
    return `Email sent to: ${email}`;
}

const notifyByText = (number) => {
    return `Text sent to: ${number}`;
}

function notify(str, func) {
    return func(str);
}

console.log(notify("hello@makers.tech.test", notifyByEmail));
console.log(notify("+10000000000", notifyByText));

// o/p:
// ➜  bites git:(main) ✗ node notifyByEmail.js 
// Email sent to: hello@makers.tech.test
// Text sent to: +10000000000
