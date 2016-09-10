var five = require("johnny-five");
var board = new five.Board();
var firebase = require('firebase');

var firebaseConfig  = {
    apiKey: "AIzaSyClCUfeUyDVEaRXJMAU96mLoDzG2r92Juo",
    authDomain: "sesame-data.firebaseapp.com",
    databaseURL: "https://sesame-data.firebaseio.com",
    storageBucket: "sesame-data.appspot.com",
  };
  
var app = firebase.initializeApp(firebaseConfig);




 board.on("ready", function() {
    var locked = app.database().ref('users/IS6ADlLjCWhGCnVW7JsFIlK439t1');
 //   app.database().ref('/users').on('child_added', function(postSnapshot) {
 //   var uid = postSnapshot.val().uid;
 //   locked = app.database().ref('users/' + uid)
 //   console.log(postSnapshot.child('name').val());
 // })

   app.database().ref('users').on('value',function(snapshot){
     //console.log(snapshot.val());
   })

   var ledGreen = new five.Led(13);
   var ledRed = new five.Led(12);
   var servo = new five.Servo({
     pin: 10,
     range: [35, 145],
     startAt: 35
   }
   );

   locked.on('value', function(snapshot) {
     var command = snapshot.child("locked").val()
     if (command == true) {
          servo.min();
          ledGreen.off();
          ledRed.on();
     } else {
          servo.max();
          ledGreen.on();
          ledRed.off();
     }
   });

 });
