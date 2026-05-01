// const mezba = {userName: "Mezba"};
// const mizan = {userName: "Mizan"};
// const tonmoy = {userName: "Tonmoy"};

const arr = ['apple', 'mango', 'banana', 'apple'];

// const set = new Set(arr);

// set.add(mezba);
// set.add(mizan);
// set.add(tonmoy);

// const test = Array.from(set)
// test.push("tomato");

// console.log(test);
// console.log(set.has("banana"));
// set.forEach((value) => console.log(value));

// console.log(set);

const removeDupArr = (arr) => {
    const newArr = [];
    arr.forEach(element => {
        if(!newArr.includes(element)) {
            newArr.push(element);
        }        
    });
    return newArr;
}

console.log(removeDupArr(arr));

// set implementation
const removeDupSet = (arr) => {
    const set = new Set(arr);

    return Array.from(set);
}

console.log(removeDupSet(arr))
