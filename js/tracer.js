// Initialize Firebase
var config = {
    apiKey: "AIzaSyAwlc8Z0hMT33uVRyJL76-Wd3imj9DuExQ",
    authDomain: "cict-tracer.firebaseapp.com",
    databaseURL: "https://cict-tracer.firebaseio.com",
    storageBucket: "cict-tracer.appspot.com",
};
var tracerApp = firebase.initializeApp(config); 


function testWrite(data) {
  firebase.database().ref('data/test').set({
    text: data
  });
}

//testWrite("xxxx");


