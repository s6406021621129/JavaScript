function promiseTimeout(ms) {
    return new Promise((resolve,reject) => {
        setTimeout(resolve,ms);
        });
}

promiseTimeout(2000)
    .then(() => {
        console.log("Done!!");
        return promiseTimeou(1000);
    })
    .then(() =>{
        console.log("Also done!!");
        return Promsise.resolve(42);
    })
    .then((result) => {
        console.log(result);
    })
    .catch(() => {
        console.log("Error");
    });