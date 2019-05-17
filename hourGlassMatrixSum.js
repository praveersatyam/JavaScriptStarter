
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var inputArray=[];
rl.on('line', (input) => {
	if(input==''){
		readInputForMatrix();
		rl.close();
	}
	inputArray.push(input);
});
function readInputForMatrix(){
	var count =0;
	var noOfTestCases = inputArray[count++];
	while(noOfTestCases-->0){
		var row, column;
		var rowAndColumn = inputArray[count++].split(" ");
		row = rowAndColumn[0];
		column = rowAndColumn[1];
		var arr=[];
		for(var i=0;i<row;i++){
			var rowStringToArray = inputArray[count++].split(" ");
			arr[i]=[];
			for(var j=0;j<column;j++){
				arr[i].push(+rowStringToArray[j]);
			}
		}
		console.log(findMax(arr));
	}
}
function findMax(array){
	var max =0;
	if(array.length>=3&&array[0].length>=3){
		for(var i=0;i<array.length-2;i++){
			for(var j=0;j<array[i].length-2;j++){
				var temp =sumInBox3x3(array,i,j);
				if(temp>max){
					max = temp;
				}
			}
		}
	}
	return max;
}
function sumInBox3x3(array, rowIndex, colIndex){
	var sum =0;
	for(var i=rowIndex;i<rowIndex+3;i++){
		for(var j=colIndex;j<colIndex+3;j++){
			sum+=array[i][j];
		}
	}
	sum -= (array[rowIndex+1][colIndex] + array[rowIndex+1][colIndex+2]);
	return sum;
}