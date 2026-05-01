function generateSinData(size) {
    const itemPool = [
        "Apple",
        "Mango",
        "Banana",
        "Orange",
        "Pineapple",
        "Watermelon",
        "Strawberry",
        "Grapes",
        "Burger",
    ];

    const generateData = [];
    for(let i = 0; i<size; i++) {
        const randomIndex = Math.floor(Math.random() * itemPool.length)
        generateData.push(itemPool[randomIndex]);
    }
    return generateData;
}

const hugeDataSet = generateSinData(500000);
console.log("Data size", hugeDataSet.length);

// Brute Force

const arrStartTime = performance.now();

const removeDupArr = (arr) => {
    const newArr = [];

    arr.forEach((element) => {
        if(!newArr.includes(element)) {
            newArr.push(element);
        }
    });
    return newArr;
}

console.log(removeDupArr(hugeDataSet));

const arrEndTime = performance.now();

console.log(`Array Implementation took ${arrEndTime - arrStartTime}`);

// set implementation

const setStartTime = performance.now();

const removeDupSet = (arr) => {
    const set = new Set(arr);

    return Array.from(set);
}

console.log(removeDupSet(hugeDataSet));

const setEndTime = performance.now();

console.log(`Set Implementation took ${setEndTime - setStartTime}`);