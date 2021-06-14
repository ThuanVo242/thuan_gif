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
         eightBall = 'Yes!';
         break;
     case 1: 
         eightBall = 'No!';
         break;
     case 2: 
         eightBall = 'I do not know !';
         break;
     case 3: 
         eightBall = 'She is Software Engineer in Amazon!';
         break;
      case 4: 
         eightBall = 'No.She is Project Manager!';
         break;
      case 5:
         eightBall = 'No.She is DevOp!';
         break;
      case 6:
         eightBall = 'No.She is Leader!';
         break;
      case 7:
         eightBall = 'No.She is Tester!';
         break;            
}

console.log(eightBall);