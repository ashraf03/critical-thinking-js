// const obj = {
//     nextLevel : {courseId: 'level2'},
//     true: {courseId: 'level1'} 
// }

const course1 = {name: " Programming Hero"};
const course2 = {name: " Next Level Web Development"};

// const obj = {};

// obj.nextLevel = {courseId: 'level2'}
// obj[course1] = {courseId: "level2"}

// console.log(obj)

const courses = [
    [course1, "Level1"],
    [course2, "Level2"]
]
const map = new Map(courses);

// map.set(course1, {courseId: 'level2'});
// map.set(course2, {courseId: 'level1'});

// map.forEach((value, key) => (key.name = "Sohoz Shorol Simple" + key.name))

// console.log(...map.keys());
// console.log(...map.values());

// for(let key of map.keys()) {
//     key.name = "sohoz sorol simple" + key.name;
//     // console.log(key)
// }
console.log(map.entries())

