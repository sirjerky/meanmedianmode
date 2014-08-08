function getMean(entry){
	//pop off the first two entries
	var numbers = entry.slice(2);
	console.log(numbers);
	var sum = 0;
	for(var i = 0; i < numbers.length; i++){
		sum = sum += Number(numbers[i]);
	}
	return sum / (numbers.length);
}

function getMedian(entry){
	var median;
	var numbers = entry.slice(2);
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

function getMode(entry){
	var numbers = entry.slice(2);
	var results=[];

	for(var i = 0; i < numbers.length; i++){
		var el = Number(numbers[i]);
		if(results[el]){
			
			results[el]+=1;
		}else{
			results[el]=1;
		}
	}
	var modes=[];
	var maxCount = 0;
	console.log(results);
	for(var i = 0; i < results.length; i++){
		if(results[i] > maxCount){
			modes=[];
			modes.push(i);
			maxCount = results[i];
		}else if(results[i] === maxCount){
			modes.push(i);
		}
	}
	return(modes);
}


console.log(getMean(process.argv));
console.log(getMedian(process.argv));
console.log(getMode(process.argv));

