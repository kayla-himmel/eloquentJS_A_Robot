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

// Goal-oriented Robot (from book)
function goalOrientedRobot({place, parcels}, route) {
    if (route.length == 0) {
        let parcel = parcels[0];
        // if it doesn't equal place, set route arguments to (roadGraph, place from function parameter, parcels array as parcel.place from function pararameter)
        if (parcel.place != place) {
            route = findRoute(roadGraph, place, parcel.place);
        } else {
            // if is equal to place, set route arguments to (roadGraph, place from function parameter, parcels array as parcel.place from function pararameter)
            route = findRoute(roadGraph, place, parcel.address);
        }
    }
    return {direction: route[0], memory: route.slice(1)};
};

// Find Route function (from book)
function findRoute(graph, from, to) {
    let work = [{at: from, route: []}];
    // loop work array
    for (let i = 0; i < work.length; i++) {
        let {at, route} = work[i];
        // loop through graph[at] and define place
        for (let place of graph[at]) {
            // if place equals the provided "to" parameter from findRoute function, add place to route
            if (place == to) return route.concat(place);
            // if there isn't at least one thing in the work array, push everyhing in (at and route array)
            if (!work.some(w => w.at == place)) {
                work.push({at: place, route: route.concat(place)});
            }
        }
    }
};

// EXERCISES
/*  Exercise 1: 
    Write a function compareRobots that takes two robots (and their starting memory). It should generate 100 
    tasks and let each of the robots solve each of these tasks. When done, it should output the average number 
    of steps each robot took per task.
    For the sake of fairness, make sure you give each task to both robots, rather than generating different 
    tasks per robot.
*/
function compareRobots(robot1, robot1Memory, robot2, robot2Memory) {
    // calc the length of robot's memories
    robot1Memory = robot1Array.length;
    robot2Memory = robot2Array.length;

    // calc difference between the lengths of the robot's memories arrays
    let taskDifference = robot1Memory - robot2Memory;

    // console log the difference between the two robots
    console.log(`The ${robot1} robot made ${taskDifference} more moves than ${robot2} robot to complete the same task.`)
};

/*  Exercise 2: 
    Can you write a robot that finishes the delivery task faster than goalOrientedRobot? If you observe that 
    robot’s behavior, what obviously stupid things does it do? How could those be improved?
    If you solved the previous exercise, you might want to use your compareRobots function to verify whether 
    you improved the robot.
*/
function fastRobot() {
    
};

/*  Exercise 3: 
    Write a new class PGroup, similar to the Group class from Chapter 6, which stores a set of values. Like 
    Group, it has add, delete, and has methods.
    Its add method, however, should return a new PGroup instance with the given member added and leave the 
    old one unchanged. Similarly, delete creates a new instance without a given member.
    The class should work for values of any type, not just strings. It does not have to be efficient when 
    used with large amounts of values.
    The constructor shouldn’t be part of the class’s interface (though you’ll definitely want to use it 
    internally). Instead, there is an empty instance, PGroup.empty, that can be used as a starting value.
    Why do you need only one PGroup.empty value, rather than having a function that creates a new, empty 
    map every time?
*/


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
