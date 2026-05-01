 
// const startTime = performance.now();
// console.time("task")
const firstArray = [];
const secondArray = [];

for(let i=0; i<600000; i++) {
    if(i<300000) {
        firstArray.push(i)
    }
    secondArray.push(i);
}
 console.log("First array", firstArray.length);
 console.log("First array", secondArray.length);

// const endTime = performance.now();
console.time("map1");
const firstUserList = firstArray.map((number) => ({userId: number}));
console.timeEnd("map1");

console.time("map2");
const secondUserList = secondArray.map((number) => ({userId: number}));
console.timeEnd("map2");

console.time("find");
// const user = secondUserList.find((user) => user.userId === 5000000);
const user = secondUserList[400000]
console.timeEnd("find");

// console.log(`This code took ${endTime - startTime} ms`)