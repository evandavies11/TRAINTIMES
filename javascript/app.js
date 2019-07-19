var config = {
    apiKey: "AIzaSyBwo6mjE- B8A7dF8n3eUVNjKwJ8PiR9GJE",
    authDomain: "recent-user-with-all-use-e8e76.firebaseapp.com",
    databaseURL: "https://recent-user-with-all-use-e8e76.firebaseio.com",
    projectId: "recent-user-with-all-use-e8e76",
    storageBucket: ""
};

firebase.initializeApp(config);

var dataRef = firebase.database();

// Initial Values
var name = "";
var email = "";
var age = 0;
var comment = "";