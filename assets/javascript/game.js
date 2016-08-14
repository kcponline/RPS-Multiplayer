  	// pseudo 01a: check all links - Initialize Firebase
var config = {
	apiKey: "AIzaSyAyyfvqOVptnlcRlVNxonDHhw7ubLqkzgg",
	authDomain: "prsmultiplayerproject.firebaseapp.com",
	databaseURL: "https://prsmultiplayerproject.firebaseio.com",
	storageBucket: "prsmultiplayerproject.appspot.com",
};
firebase.initializeApp(config);


var database = firebase.database();
// var player = "";

  	// pseudo 01b: check all links - js - to be comment out
document.getElementById("message1").innerHTML = "js link check";
	// pseudo 01c: check all links - jq - to be comment out
$("#message2").html("jq link check");

	// pseudo 01d: check all links - firebase
$("#submit").on("click", function() {

	var player = $('#playerName').val().trim();
		console.log(player);
	var playerOrder = "player1";

	// database.ref().set({
	// 	players: player;   <-- syntax error: no need for ; when it's only 1 property.
	// 	players: player
	// });

		// successful setItem to sessionStorage.
	sessionStorage.setItem("playerName", player);
		// console.log(players);
	sessionStorage.setItem("playerOrder", playerOrder);

	database.ref().set({
		players: {
			player1: {
				choice: "",
				losses: 0,
				name: player,				
				wins: 0,
			}
		}
	});


	// var playerName = $('#playerName').val().trim();
	// 	console.log(player);

	// var players = {
	// 	player1: player1
	// }

	// database.ref().push(players {   <--- wrong! wild guess to push nesting object
	// 	player2: player2
	// });

	// database.ref().push(1);

		// successful pushing nesting objects
	// var player1 = {
	// 		choic: "",
	// 		losses: 0,
	// 		name: "kent",
	// 		wins: 0
	// };

	// var player2 = {
	// 		choic: "",
	// 		losses: 0,
	// 		name: "omar",
	// 		wins: 0
	// };

	// var player = {
	// 	players: {
	// 		player1: player1,
	// 		player2: player2
	// 	}
	// };

	// database.ref().push(player);


	// return false;

});

	// pseudo 02: branch1 hard code skeleton (hcs) differentiate player instance 
	// probably with seesionStorage.  Use if/else console.log to prove.


	// Pseudo 03: branch2 hcs evaluate players inputs.