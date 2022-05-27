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

    get_username = localStorage.getItem("giveitem");
    document.getElementById("user_name").innerHTML = "Welcome " + get_username + "!"
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      row = "<div class='room_name' id="+room_name+" onclick='redirectToRoomName(this.id)' >#"+ room_name +" </div><hr>";
      document.getElementById("output").innerHTML += row;
      });
      });
}
getData();

function redirectToRoomName(name){
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function addroom(){
      console.log("hi");
      room_name = document.getElementById("addroom").value;
      firebase.database().ref("/").child(room_name).update({
            Important:"My website my rooms"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("giveitem");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}