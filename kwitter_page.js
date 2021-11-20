//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyD40LcSqMh-9KrOFjE_iCrdacO9hzyVdco",
      authDomain: "kwitter-app-cc493.firebaseapp.com",
      databaseURL: "https://kwitter-app-cc493-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-cc493",
      storageBucket: "kwitter-app-cc493.appspot.com",
      messagingSenderId: "449153301162",
      appId: "1:449153301162:web:32369a5cd4491662122ed3"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
