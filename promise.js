console.log("lets begin...")

function fun1() {
    return new Promise(function (resolve, reject) {
        setInterval(() => {
            var a = 10;
            if (a >= 100) {
                console.log("value is 10")
                resolve();
            }
            else {
                console.log("value is not 10");
                reject();
            }
        }, 5000);
    })
}
fun1().then(function () {
    console.log("thanks for resolving");
}).catch(function () {
    console.log("whats the problem");
})