  	// pseudo 01a: check all links - Initialize Firebase
var config = {
	apiKey: "AIzaSyAyyfvqOVptnlcRlVNxonDHhw7ubLqkzgg",
	authDomain: "prsmultiplayerproject.firebaseapp.com",
	databaseURL: "https://prsmultiplayerproject.firebaseio.com",
	storageBucket: "prsmultiplayerproject.appspot.com",
};
firebase.initializeApp(config);


var database = firebase.database();

  	// pseudo 01b: check all links - js - to be comment out
document.getElementById("message1").innerHTML = "js link check";
	// pseudo 01c: check all links - jq - to be comment out
$("#message2").html("jq link check");

	// pseudo 01d: check all links - firebase
$("#submit").on("click", function() {
	var player = $('#playerName').val().trim();
		console.log(player);

	database.ref().push(player);




}

	);

	// pseudo 02: branch1 hard code skeleton (hcs) differentiate player instance 
	// probably with seesionStorage.  Use if/else console.log to prove.


	// Pseudo 03: branch2 hcs evaluate players inputs.