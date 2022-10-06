let p = new Promise((resolve, reject) => {
    const a = true;
    if (a){
        resolve("Yay!");
    }else{
        reject("noooo...");
    }
});
console.log(p);

p.then()