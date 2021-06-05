let age = Math.floor(Math.random() * 15) + 16;
let registerNumber = Math.floor(Math.random() * 2000);

if(age >= 18 && registerNumber <= 1000) {
    console.log(`Age : ${age}`);
    console.log(`Register Number : ${registerNumber}`);
    console.log(`Race start 9.30 AM`);
} else if(age >= 18 || registerNumber <= 1000) {
    console.log(`Age : ${age}`);
    console.log(`Register Number : ${registerNumber}`);
    console.log(`Race start 11.30 AM`);
} else if(age < 18 && registerNumber >= 1001) {
    console.log(`Age : ${age}`);
    console.log(`Register Number : ${registerNumber}`);
    console.log(`Race start 12.30 AM`);
} else {
    console.log(`Report to registration desk`);
}

