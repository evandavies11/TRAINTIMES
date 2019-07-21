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

var dataRef = firebase.database();
console.log("hello")

// Initial Values
var trainName = "";
var destination = "";
var frequency = 0;
var nextArrival = "";
var minutesAway = "";




//time converter
var frequency = 3;

// Time is 3:30 AM
var firstTime = "03:30";

// First Time (pushed back 1 year to make sure it comes before current time)
var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
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



