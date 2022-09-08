const randomNumbers = () => Math.floor(Math.random() * 100000);

const array = new Array(100).fill("").map(() => randomNumbers());

console.log(JSON.stringify(array));
