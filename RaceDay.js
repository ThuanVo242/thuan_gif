let raceNumber = Math.floor(Math.random() * 1000);
let status = 'soon';
let age = 15;

if (age === 20 && status === soon) {
    raceNumber += 1000;
}

if (age > 18 && status === 'soon') {
    console.log(`Race number : ${raceNumber} runner start 9:30am`);
} else if (age > 18 && status === 'late') {
    console.log(`Race number : ${raceNumber} runner start 11:30am`);
} else if (age < 18) {
    console.log(`Race number : ${raceNumber} runner start 12:30am`);
} else {
    console.log(`Telling runner to see registration desk`);
}