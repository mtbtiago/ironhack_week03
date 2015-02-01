// Create a variable with your name as a content and print it.
var name = "tiago";
console.log(name);

// Create a function, with one argument, to say hello to the name. Use it with your name variable
function say_hell(n) {
	console.log("hello "+n);
}

// Create a loop to show the numbers from 1 to 5.
for(var i = 0; i < 5; i++ ) {
	console.log(i+1);
}

// Create an array with some colors
var colors = ["green","yellow","blue","result"];

// Iterate the color array and print the colors in different lines.
colors.forEach(function(color){
	console.log(color);
});

// Filter the array to exclude the red color (the array should contain all the previous colors except the red one).
var filtered = colors.filter(function(color){
	return color === "green";
});

console.log(filtered);

// Transform the array to add "!!" at the end of each color. (The result should be something like: "red!!", "blue!!", "green!!"... )
var mapped = colors.map(function(color){
	return color + "!!";
});

console.log(mapped);

// Create an object with name, surname and age as a properties and create a function to show the person information as "Luis Rovirosa has 32 years".
teacher = {
	name: "Luís",
	surname: "Rovirosa",
	age: 32
};

function showPersonData(person) {
	console.log(person.name);
	console.log(person.surname);
	console.log(person.age);
};

showPersonData(teacher);
