function getMean(numbers){
	var sum = 0;
	for(var i = 2; i < numbers.length; i++){
		sum = sum += Number(numbers[i]);
	}
	return sum / (numbers.length - 2);
}

function getMedian(numbers){
	var median;
	// first we sort the array
	numbers.sort();
	// next check for even or odd
	if(numbers.length % 2 === 0){
		var i = numbers.length / 2;
		median = (Number(numbers[i]) + Number(numbers[i-1])) / 2;
	} else {
		var i = (numbers.length - 1) / 2;
		median = Number(numbers[i]);
	}

	return median;	
	
}

function getMode(numbers){
	
}

console.log(getMean(process.argv));
console.log(getMedian(process.argv));
