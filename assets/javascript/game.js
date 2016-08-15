// Pseudo 01a: check all links - Initialize Firebase
var config = {
	apiKey: "AIzaSyAyyfvqOVptnlcRlVNxonDHhw7ubLqkzgg",
	authDomain: "prsmultiplayerproject.firebaseapp.com",
	databaseURL: "https://prsmultiplayerproject.firebaseio.com",
	storageBucket: "prsmultiplayerproject.appspot.com",
};
firebase.initializeApp(config);


var database = firebase.database();
// var player = "";

// Pseudo 01b: check all links - js - to be comment out
document.getElementById("message1").innerHTML = "js link check";
// Pseudo 01c: check all links - jq - to be comment out
$("#message2").html("jq link check");

// pseudo 01d: check all links - firebase
$("#submit").on("click", function() {

	var playerName = $('#playerName').val().trim();
		console.log(playerName);

	// At the instant of click, get a snapshot of the current data
	// of the child object for players
	database.ref().on("value", function(snapshot) {

		// If firebase has a players object stored (first player)
		if (snapshot.child("players").exists()) {
				// console.log(snapshot.child("players"));

			var player1Name = snapshot.val().players.player1.name;
				// console.log(player1Name)

			sessionStorage.setItem("playerName", playerName);

			sessionStorage.setItem("playerOrder", "player2");


			database.ref().set({
				players: {
					player1: {
						losses: 0,
						name: player1Name,				
						wins: 0
					},
					player2: {
						losses: 0,
						name: playerName,
						wins: 0
					}
				}
			});

		}
		else{

			sessionStorage.setItem("playerName", playerName);

			sessionStorage.setItem("playerOrder", "player1");

			// alert ("player2 does not exist");
			database.ref().set({
				players: {
					player1: {
						losses: 0,
						name: playerName,				
						wins: 0
					}
				}
			});
		}

	});

	return false;
	
});

	// database.ref().set({
	// 	players: player;   <-- syntax error: no need for ; when it's only 1 property.
	// 	players: player
	// });

	// 	// successful setItem to sessionStorage.
	// sessionStorage.setItem("playerName", player);
	// 	// console.log(players);
	// sessionStorage.setItem("playerOrder", 1);

	// database.ref().set({
	// 	players: {
	// 		1: {
	// 			losses: 0,
	// 			name: "Kent",				
	// 			wins: 0
	// 		}
	// 	}
	// });

	// database.ref().set({
	// 	players: {
	// 		1: {
	// 			losses: 0,
	// 			name: "Kent",				
	// 			wins: 0
	// 		},
	// 		2: {
	// 			losses: 0,
	// 			name: "Omar",
	// 			wins: 0
	// 		}
	// 	}
	// });

	// database.ref('/players').push({
	// 	// players: {
	// 		// player1: {
	// 		// choice: "",
	// 		// 	losses: 0,
	// 		// 	name: "Kent",				
	// 		// 	wins: 0
	// 		// },
	// 		player2: {
	// 			choies: "",
	// 			losses: 0,
	// 			name: "Omar",
	// 			wins: 0
	// 		}
	// 	// }
	// });

	// database.ref('/players').set({
	// 	// players: {
	// 		player2: {
	// 			losses: 0,
	// 			name: "Omar",
	// 			wins: 0
	// 		}
	// 	// }
	// });

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






	// pseudo 02: branch1 hard code skeleton (hcs) differentiate player instance 
	// probably with seesionStorage.  Use if/else console.log to prove.


	// Pseudo 03: branch2 hcs evaluate players inputs.