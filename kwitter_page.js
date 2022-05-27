var firebaseConfig = {
      apiKey: "AIzaSyDS1HoEZPaaGczfob1tDqR-5J5_xYgBFSI",
      authDomain: "kwitter-3a056.firebaseapp.com",
      databaseURL: "https://kwitter-3a056-default-rtdb.firebaseio.com",
      projectId: "kwitter-3a056",
      storageBucket: "kwitter-3a056.appspot.com",
      messagingSenderId: "281756974414",
      appId: "1:281756974414:web:5194a302b798181151b21f",
      measurementId: "G-TJ8640Z155"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("giveitem");
room_name = localStorage.getItem("room_name");

function sendmsg(){
      getmsg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
      
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout(){
      localStorage.removeItem("giveitem");
      localStorage.removeItem("room_name");

      window.location = "index.html";
}