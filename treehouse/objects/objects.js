// var gwan = {
// 	name: "Gwan",
// 	skills: ["JS", "Ruby", "Dancing"],
// 	"favorite color": "green",
// 	greet: function(name, mood) {
// 		name = name || "You";
// 		mood = mood || "good";
// 		console.log("Hello, " + name +
// 					" I am " + this.name +
// 					" and i am in a " + mood + " mood!");
// 	}
// };

// var nick = {
// 	name: "Nick",
// 	greet: gwan.greet
// };

// // gwan["favorite color"] = "Blue";
// // gwan["name"] = "G$";

// // console.log(gwan["name"]);
// // console.log(gwan["favorite color"]);

// gwan.name = "G$";

// gwan.greet("Christina", "awesome");
// nick.greet();

// var gwanGreet = gwan.greet;

// gwanGreet.call({name: "Bob"}, "Matt", "bad");

// gwan.greet.apply({name: "Talula"}, ["Matt", "bad"]);

// var args = ["Mike", "happy"];
// gwan.greet.apply(gwan, args);

var personPrototype = {
	name: "Anonymous",
	greet: function(name, mood) {
		name = name || "You";
		mood = mood || "good";

		console.log("Hello, " + name +
					" I am " + this.name +
					" and i am in a " + mood + " mood!");
	},
	species: "Homo Sapien"
};

function Person (name) {
	this.name = name;
}

Person.prototype = personPrototype;

gwan = new Person("Gwan");
nick = new Person("Nick");


















