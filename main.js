
console.log("Hello World");

var questions = prompt("Hi! What's your name?");
	if (questions == "Matt") {
	alert("Hey Matt! What have you been up to?");
} else if (questions !== "Matt") {
	alert("WARING: UNAUTHORIZED USER ALERTING AUTHORITIES");
};




var pres = ["abe", "obama"].map(function(prez) {
	return (prez + " AMERICA");
});

var map = [1, 2, 3].map(function(num){ 
	return num + 3; 
});

var elNumber = [11, 22, 33].map(function(multi) {
	return multi * 11;
});

var woop = ["hello", "whats up"].map(function(word) {
	return word.length;
});

var game = ["megaman", "mario", "link"].map(function(play){
	console.log(play + " is awesome!");
});

var thingsIhate = ["Mayo", "School Buses", "Spoilers"];

thingsIhate.map(function(dislike) {
	console.log("I hate " + dislike);
});

var superHero = ["batman", "superman", "spiderman", "the hulk"];

superHero.map(function(hero) {
	console.log("the incredible " + hero); 
});




var pizza = ["pepperoni", "bacon", "mushrooms", "green peppers"].forEach(function(pizza) {
	console.log("Put " + pizza + " on my pizza.");
});

var people = ["Dude", "Bro"];

people.forEach(function(person) {
	console.log("Hey " + person)	
});

var numberArray = [893, 427, 43];

numberArray.forEach(function(num) {
	console.log(num + " I like numbers!");
});

var randomThings = ["Trees", 452, "Hover Boots", "popsicle", 900];

randomThings.forEach(function(things) {
	console.log(things + " These are all meaningless!");
});

randomThings.forEach(function(stuff) {
	console.log(stuff + stuff);
});

randomThings.forEach(function(random) {
	console.log(random + 400);
});

var addNum = [10, 20, 30]

addNum.forEach(function(num) { 
	console.log(num);

	addNum.forEach(function(number) {
		console.log(num * number);
	});
});




var add = [150, 300, 600].reduce(function(a, b) {
	return a + b;
});

var addAgain = [10, 20, 40, 80, 160, 320, 640].reduce(function(x, y, z) {
	return x * y;
});

var addPancake = [10, 10, " ", "pancakes"].reduce(function(c, d) {
	return c + d;
});

var inception = [[20, 40], [80, 160], [320, 640]].reduce(function(e, f){
	return e.concat(f);
});

var yoDog = ["yo", "yodog", "dog.", ].reduce(function(g, h) {
	return g + h;
});

console.log(yoDog + " Yo dog, I put a yo dog inside of your yo dog!");

var backpack = ["8 pockets", "20 zippers", "1 laptop", "100 crackers"].reduce(function(i, j){
		return [i + j];
});

var phone = ["rings", "vibrates", "plays games"].reduce(function(a, b){
	return "my phone " + a + b;
});





var car = [ 
	{make: "BMW"},
	{model: "Z3"},
	{Year: 2001},
];

car.forEach(function(mycar){
	console.log(mycar);
});

car.map(function(parts) {
	console.log(parts);
});

//reduce does not work on objects
car.reduce(function(a, b) {
	return (a + b);
});




var num = [100, 200, 400];

num.forEach(function(number){
	console.log(number);
});

num.map(function(number){
	console.log(number + " Numbers!");
});

num.reduce(function(a, b) {
	console.log(a + b);
});





var myself = {
	height: "5 feet 10 inches",
	weight: 300,

	head: {

		hair: {
			top: "Bald",
			face: "Beard",
		},
		eyes: "Blue",
		nose: "Big",
		mouth: "Loud",
	},

	arms: {
		arm: 2,
		fingers: 10,
	},

	legs: ["2 legs", "2 knees", "10 toes", "2 shoes"],
};

myself.legs.map(function(leg){
	console.log("My legs consist of " + leg);
});

myself.legs.forEach(function(leg) {
	console.log(leg + " yeah!");
	console.log("I have " + leg);
});

var schibby = myself.legs.reduce(function(a, z) {
	return (a + z);
});




var house = {

	outside: {
		yard: "Messy",
		pool: "Awesome",
		backPorch: "Porch talk",
	},

	inside: 
		["kitchen", "dining room", "bathroom", "living room", "bedroom", "laundry room"],
};

house.inside.map(function(home) {
	console.log("My house has a " + home);
});

house.inside.forEach(function(home) {
	console.log(home + " YEAH!");
});

var housereduce = house.inside.reduce(function(a, b) {
	return (a + b) + "This won't make any sence!";
});


 








console.log(myself);
console.log(myself.head.hair.face);

console.log(randomThings);
console.log(randomThings.reverse());