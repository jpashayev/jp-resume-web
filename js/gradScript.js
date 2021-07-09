// Create a randomized low, and high hex values 
// for page gradients based on Red, Green, Blue

//root element css
var r = document.querySelector(':root');

// Hex Arrays 
var lowHexValues = ['0','1','3','5'];
var highHexValues = ['7','9','A','B'];

// Random Number Generator
function rand(x) {
	var rand = Math.floor(Math.random() * x);
	return rand;
}

// Red Hex Function
function randRedHex() {
	var randRedHex = "#";
	randRedHex += highHexValues[rand(4)];
	randRedHex += highHexValues[rand(4)];
	randRedHex += lowHexValues[rand(4)]
	randRedHex += highHexValues[rand(4)];
	randRedHex += lowHexValues[rand(4)];
	randRedHex += highHexValues[rand(4)];
	return randRedHex;
}

// Green Hex Function
function randGreenHex() {
	var randGreenHex = "#";
	randGreenHex += lowHexValues[rand(4)]
	randGreenHex += highHexValues[rand(4)];
	randGreenHex += highHexValues[rand(4)];
	randGreenHex += highHexValues[rand(4)];
	randGreenHex += lowHexValues[rand(4)];
	randGreenHex += highHexValues[rand(4)];
	return randGreenHex;
}

// Blue Hex Function
function randBlueHex() {
	var randBlueHex = "#";
	randBlueHex += lowHexValues[rand(4)]
	randBlueHex += highHexValues[rand(4)];
	randBlueHex += lowHexValues[rand(4)];
	randBlueHex += highHexValues[rand(4)];
	randBlueHex += highHexValues[rand(4)];
	randBlueHex += highHexValues[rand(4)];
	return randBlueHex;
}

// Random Angle function
function randDeg() {
	var deg = (rand(90)+ 45) + "deg";
	return deg;
}
function getGrad(deg, hex, hex2, hex3, hex4, hex5, hex6, hex7) {
	var grad = ("linear-gradient("
	+ deg + ','
	+ hex + ','
	+ hex2 + ','
	+ hex3 + ','
	+ hex4 + ','
	+ hex5 + ','
	+ hex6 + ','
	+ hex7 + ')');
	return grad;
}

// Set Grad Value
function setGrad() {
	
	// Get first 6 hex values
	var hexOne = randRedHex();
	var hexTwo = randRedHex();
	var hexThree = randGreenHex();
	var hexFour = randGreenHex();
	var hexFive = randBlueHex();
	var hexSix = randBlueHex();
	var extraBlue = randBlueHex();
	
	// Generate grad variable call Grad Function
	var grad = getGrad(
		randDeg(),
		hexSix,
		hexOne, 
		hexThree,
		extraBlue,
		hexFour,
		hexTwo, 
		hexFive 
		);
		
	// Set CSS style property for grad to root
	r.style.setProperty('--gradient', grad);
}

// call setGrad Function
setGrad();

