//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyBNohRnZt3NL2PhB8Q6BqIgQhNs_Ruewic",
      authDomain: "kwitter-eb5ef.firebaseapp.com",
      databaseURL: "https://kwitter-eb5ef-default-rtdb.firebaseio.com",
      projectId: "kwitter-eb5ef",
      storageBucket: "kwitter-eb5ef.appspot.com",
      messagingSenderId: "843755112962",
      appId: "1:843755112962:web:bc660c06202626edad751b"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;


function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";

}
      } });  }); }
getData();

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html"
}
