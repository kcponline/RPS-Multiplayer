  	// Initialize Firebase
var config = {
	apiKey: "AIzaSyAyyfvqOVptnlcRlVNxonDHhw7ubLqkzgg",
	authDomain: "prsmultiplayerproject.firebaseapp.com",
	databaseURL: "https://prsmultiplayerproject.firebaseio.com",
	storageBucket: "prsmultiplayerproject.appspot.com",
};
firebase.initializeApp(config);

var database = firebase.database();

  	// check js link to be comment out
document.getElementById("message1").innerHTML = "js link check";
	// pseudo 02: check jq link
$("#message2").html("jq link check");

$("#submit").on("click", function() {
	var player = $('#playerName').val().trim();
		console.log(player);

	database.ref().push(player);
		



}

	)