// Global variables
const arrayOf100 = [];
const newIncrementArray = [];
const newRandomArray = [];

// Make an array of 100 "tasks" instead of creating one based on the book's initial array "roads"
function makeArrayOf100() {
    for (let i = 0; i < 100; i++) {
        let item = i;
        arrayOf100.push(item);
    }
    return arrayOf100;
};

// Robot 1: The Random Picker one
function randomPicker(array) {
    for (let i = 0; i <= array.length; i++) {
        let choice = Math.floor(Math.random() * array.length);

        // logic to add each task at least once
        if (i !== choice) {
            newRandomArray.push(`task ${choice}`);
        }
    }
    return newRandomArray;
};

// Robot 2: The Incremented Picker one
function incrementPicker(array) {
    for (let i = 0; i < array.length; i++) {
        let task = `task ${i}`;
        newIncrementArray.push(task);
    };
    return newIncrementArray;
};

// compare the two robots to find difference in number of tasks
function compareRobots(robot1, robot1Memory, robot2, robot2Memory) {
    // calc the length of robot's memories
    robot1Memory = robot1Array.length;
    robot2Memory = robot2Array.length;

    // calc difference between the lengths of the robot's memories arrays
    let taskDifference = robot1Memory - robot2Memory;

    // console log the difference between the two robots
    console.log(`The ${robot1} robot made ${taskDifference} more moves than ${robot2} robot to complete the same task.`)
};


// CALL FUNCTIONS
// create and fill our global array of 100 "tasks"
makeArrayOf100();

// call the random robot
let randomRobot = randomPicker(arrayOf100);
console.log(randomRobot);

// call incrementing robot
let incrementRobot = incrementPicker(arrayOf100);
console.log(incrementRobot);

// compare the robots efficiency
compareRobots(randomRobot, newRandomArray.length, incrementRobot, newIncrementArray.length);
