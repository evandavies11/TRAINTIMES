//firebase api
var firebaseConfig = {
    apiKey: "AIzaSyB3cUvsTdygvu59ygu9GQbCpToP43hu1Go",
    authDomain: "traintimestest.firebaseapp.com",
    databaseURL: "https://traintimestest.firebaseio.com",
    projectId: "traintimestest",
    storageBucket: "",
    messagingSenderId: "664390182714",
    appId: "1:664390182714:web:1d731dfed46b28ad"
};

firebase.initializeApp(firebaseConfig);

var database = firebase.database();
console.log("hello");

// Initial Values
//var trainName = "";
//var traindestination = "";
//var firstTrain = "";
//var trainFrequency = "";
//var frequency = 0;
//var nextArrival = "";
//var minutesAway = "";

// train button function
$("#add-train-btn").on("click", function (event) {
    event.preventDefault();

    // user input
    var trainName = $("#train-name-input").val().trim();
    var trainDestination = $("#destination-input").val().trim();
    var firstTrain = moment($("#first-train-input").val().trim(), "HH:MM").format("X");
    var trainFrequency = $("#frequency-input").val().trim();

    //object for holding train data
    var newTrain = {
        train: trainName,
        destination: trainDestination,
        start: firstTrain,
        frequency: trainFrequency
    };

    // train to database
    database.ref().push(newTrain);

    // Log dat data
    console.log(newTrain.train);
    console.log(newTrain.destination);
    console.log(newTrain.start);
    console.log(newTrain.frequency);

    alert("Train successfully added");

    // Clears all of the text-boxes
    $("#train-name-input").val("");
    $("#destination-input").val("");
    $("#first-train-input").val("");
    $("#frequency-input").val("");
});

//collect dat data
database.ref().on("child_added", function (childSnapshot) {
    console.log(childSnapshot.val());

    //variables 
    var trainName= childSnapshot.val().train;
    var trainDestination= childSnapshot.val().destination;
    var firstTrain = childSnapshot.val().start;
    var trainFrequency = childSnapshot.val().frequency;

    // trainybois
    console.log(trainName);
    console.log(trainDestination);
    console.log(firstTrain);
    console.log(trainFrequency );

      // Create the new row
  var newRow = $("<tr>").append(
    $("<td>").text(trainName),
    $("<td>").text(trainDestination),
   
    $("<td>").text(trainFrequency),
    
  );

  // Append the new row to the table
  $("#train-table > tbody").append(newRow);

});
//time converter
var frequency = 3;

// Time is 3:30 AM
var firstTime = "03:30";

// First Time (pushed back 1 year to make sure it comes before current time)
var firstTimeConverted = moment(firstTime, "HH:MM").subtract(1, "years");
console.log(firstTimeConverted);

// Current Time
var currentTime = moment();
console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

// Difference between the times
var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
console.log("DIFFERENCE IN TIME: " + diffTime);

// Time apart (remainder)
var tRemainder = diffTime % tFrequency;
console.log(tRemainder);

// Minute Until Train
var tMinutesTillTrain = tFrequency - tRemainder;
console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

// Next Train
var nextTrain = moment().add(tMinutesTillTrain, "minutes");
console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));



