function scissorsRockPaper(var1, var2) {
     if (var1 === 'rock' && var2 === 'scissors') {
           console.log(`${var1}`);
           console.log(`${var2}`);
           console.log(`Win : ${var1}`);
     } else if (var1 === 'rock' && var2 === 'rock') {
           console.log(`${var1}`);
           console.log(`${var2}`);
           console.log(`Draw`);
     } else if (var1 === 'scissors' && var2 === 'paper') {
           console.log(`${var1}`);
           console.log(`${var2}`);
           console.log(`Win : ${var1}`);
     } else if (var1 === 'scissors' && var2 === 'scissors') {
           console.log(`${var1}`);
           console.log(`${var2}`);
           console.log(`Draw`);
     } else if (var1 === 'paper' && var2 === 'rock') {
           console.log(`${var1}`);
           console.log(`${var2}`);
           console.log(`Win : ${var1}`);
     } else if (var1 === 'paper' && paper === 'paper') {
          console.log(`${var1}`);
          console.log(`${var2}`);
          console.log(`Draw`);
     }
}

scissorsRockPaper('rock', 'rock');