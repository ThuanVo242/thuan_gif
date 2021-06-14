let userName = 'Jean';

if (userName === 'Jean') {
   console.log(`Hello ${userName}`);
} else {
   console.log(`Hello!`);
}

let userQuestion = 'Software Engineer ?';
console.log(`${userName} ${userQuestion}`);

let randomNumber = Math.floor(Math.random() * 8);

switch(randomNumber) {
     case 0: 
         console.log('Yes!');
         break;
     case 1: 
         console.log('No!');
         break;
     case 2: 
         console.log(`I don't know!`);
         break;
     case 3: 
         console.log(`She is Software Engineer in Amazon!`);
         break;
      case 4: 
         console.log(`No.She is Project Manager!`);
         break;
      case 5:
         console.log(`No.She is DevOp!`);
         break;
      case 6:
         console.log(`No.She is Leader!`);
         break;
      case 7:
         console.log(`No.She is Tester!`);
         break;            
}