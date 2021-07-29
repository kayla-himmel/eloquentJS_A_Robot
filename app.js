// Global variables
const arrayOf100 = [];

// Make an array of 100 "tasks" instead of creating one based on the book's initial array "roads"
function makeArrayOf100() {
    for (let i = 0; i < 100; i++) {
        let item = i;
        arrayOf100.push(item);
    }
};

// Robot 1: The Random Picker one
function randomPicker(array) {
    let choice = Math.floor(Math.random() * array.length);
    return array[choice];
};

// 
const option1Array = []

// compare the 2 robots (randomPicker and robot2)
function compareRobots(robot1, robot1Memory, robot2, robot2Memory) {
    // create an empty array to hold the generated tasks
    let tasks = [];
 
};

// CALL FUNCTIONS
// create and fill our global array of 100 "tasks"
makeArrayOf100();

// call the robots
let robotRandom = randomPicker(arrayOf100);
console.log(robotRandom);
// call second robot

// compare the robots efficiency
// compareRobots(robotRandom, robotRandomMem, robot2, robot2Mem) {
//     // calc the # of steps taken to complete all tasks by the two robots

// };
