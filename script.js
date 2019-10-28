window.total = 0;

class food {
	constructor (name, price){
	this.name = name;
	this.price = price;
	}
	addItem() {
		console.log("ADD ITEM IS INDEED BEING CALLED")
		console.log(this);
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

	/*
		This does indeed set the function chicken.addItem as the handler for the button 4.
		However, the reference of "this" in the class code is treated in a special way that you may not quite understand.

		"this" variable is bound differently in different situations.
			- If you call it via the class instance, in this case "chicken" ie chicken.addItem(); "this" inside the function definition is bound at runtime to the "food" instance "chicken", by magic.
			- If you use the special method available to all functions .call(), you can bind "this" to whatever you want eg: chicken.addItem.call({price: 200000})
				- In that case, when "this" is accessed in the addItem function it will return an object with a property price which has a value of 200000, making a very expensive chicken.
			- When the javascript engine calls a button handler function it binds "this" to the element that is clicked, which doesnt have a property "price" meaning that your resulting calculatiuon will be NaN (Not A Number) 
			- In order to bind your chicken instance  to the button handler, you will have to manually force the chichen to be bound to "this" so that the javascript engine cannot override it with the button element.
				- You can achieve this by doing the following:
				- get.onclick = chicken.addItem.bind(chicken);
				- the call to this bind function will return a new function identical to the original function, with "this" bound to chicken.
		I have added console logs in the addItem function for you to see what is bound to "this"
		For sanity I advise you to split up that final button into 2 buttons so you can clearly see whats going on if you plan to test using this page.
	*/
}

function makeButton5CallChickendotAddItem() {
	var get = document.getElementById("button5");
	get.onclick = chicken.addItem(); //chicken.addItem() returns undefined, so the onclick handler is set to undefined here, ie, the buttons handler is removed/nullified/set to nothing.
	//I expect this to call chicken.addItem and not simply add it to the button because it has()
}

