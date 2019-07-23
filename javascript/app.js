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
  var firstTrain = moment($("#first-train-input").val().trim()).format("MMMM Do YYYY, h:mm:ss a");
  var trainFrequency = $("#frequency-input").val().trim();

  //object for holding train data
  var newTrain = {
    train: trainName,
    destination: trainDestination,
    start: firstTrain,
    frequency: trainFrequency
  };

  //train timestamp
  console.log(firstTrain);

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
  var trainName = childSnapshot.val().train;
  var trainDestination = childSnapshot.val().destination;
  var firstTrain = childSnapshot.val().start;
  var trainFrequency = childSnapshot.val().frequency;

  // trainybois
  console.log(trainName);
  console.log(trainDestination);
  console.log(firstTrain);
  console.log(trainFrequency);

  //convert from unix
  // var trainStartPretty = moment.unix(firstTrain).format("HH:mm");
  //first time converted but do i need this
  //var firstTimeConverted = moment(firstTrain, "HH:mm").subtract(1, "years");
  //console.log(firstTimeConverted);
  // Current Time
  var currentTime = moment();
  console.log("CURRENT TIME: " + moment(currentTime).format("HH:mm"));

  // Difference between the times
  var diffTime = moment().diff(moment(firstTrain), "minutes");
  console.log("DIFFERENCE IN TIME: " + diffTime);

  // Time apart (remainder)
  var tRemainder = diffTime % trainFrequency;
  console.log(tRemainder);

  // Minute Until Train
  var tMinutesTillTrain = trainFrequency - tRemainder;
  console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

  // Next Train
  var trainArrival = moment().add(tMinutesTillTrain, "minutes");
  console.log("ARRIVAL TIME: " + moment(trainArrival).format("HH:mm"));



  // Create the new row
  var newRow = $("<tr>").append(
    $("<td>").text(trainName),
    $("<td>").text(trainDestination),
    $("<td>").text(trainFrequency),
    $("<td>").text(trainArrival),
    $("<td>").text(tMinutesTillTrain),

  );

  // Append the new row to the table
  $("#train-table > tbody").append(newRow);

});




