
//ADD YOUR FIREBASE LINKS HERE

const firebaseConfig = {
      apiKey: "AIzaSyDl_bj3ZgGP3SbJz6b0ULWQyKW2UWcQuRY",
      authDomain: "kwitter2-9de20.firebaseapp.com",
      databaseURL: "https://kwitter2-9de20-default-rtdb.firebaseio.com",
      projectId: "kwitter2-9de20",
      storageBucket: "kwitter2-9de20.appspot.com",
      messagingSenderId: "94812064713",
      appId: "1:94812064713:web:1f7f791b477e241dc67618"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML= "welcome "+ user_name +"!";

    function addroom(){
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose : "add room"
          });
          localStorage.setItem("room_name", room_name);
          window.location="kwitter_page.html";
    }

function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function(childSnapshot) {
            childKey  = childSnapshot.key;
           
      //Start code
      Room_names=childKey;
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      localStorage.setItem("room_name", name);
      window.location= "kwitter_page.html" ;
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location= "index.html"
}

