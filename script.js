window.total = 0;

class food {
	constructor (name, price){
	this.name = name;
	this.price = price;
	}
	addItem() {
		total = total + this.price;
	}
}

var chicken = new food("Chicken", 10);

function displayTotalPrice() {
	console.log(total);
}

function callChickendotAddItem() {
	chicken.addItem();
}


// I am putting the below functions into one button so we have control of when things happen
function makeButton4CallChickendotAddItem() {
	var get = document.getElementById("button4");
	get.onclick = chicken.addItem;
	//I expect this to add chicken.addItem to the button because it doesn't have ()
}

function makeButton5CallChickendotAddItem() {
	var get = document.getElementById("button5");
	get.onclick = chicken.addItem(); 
	//I expect this to call chicken.addItem and not simply add it to the button because it has()
}

