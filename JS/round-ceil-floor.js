Math.round = function(number) {
	let fraction = (number - parseInt(number));
	if(fraction >= 0.5){
		return parseInt(number + (1 - (number - parseInt(number)))); // TODO: fix this
	}
	return parseInt(number); 
};

Math.ceil = function(number) {
  	if(number === parseInt(number)){
    	return number;
  	}
  	return parseInt(number + 1); // TODO: fix this
};

Math.floor = function(number) {
  if(number === parseInt(number)){
    return number;
  }
  return parseInt(number); // TODO: fix this
};

let a = 3.5;

console.log(Math.round(a));
console.log(Math.ceil(a));
console.log(Math.floor(a));