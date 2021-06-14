let raceNumber = Math.floor(Math.random() * 1000);
let status = false;
let age = 15;

if (age === 20 && status === true) {
    raceNumber += 1000;
}

if (age > 18 && status === true) {
    console.log(`Race number : ${raceNumber} runner start 9:30am`);
} else if (age > 18 && status === false) {
    console.log(`Race number : ${raceNumber} runner start 11:30am`);
} else if (age < 18) {
    console.log(`Race number : ${raceNumber} runner start 12:30am`);
} else {
    console.log(`Telling runner to see registration desk`);
}