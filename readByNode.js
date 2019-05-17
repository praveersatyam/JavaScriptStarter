const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var inputArray=[];
rl.on('line', (input) => {
	if(input==''){
		rl.close();
	}
	inputArray.push(input);
  console.log(`Received: ${inputArray}`);
});

// rl.on('pause', () => {
//   console.log('Readline paused.');
// });