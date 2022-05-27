
//ADD YOUR FIREBASE LINKS HERE

const firebaseConfig = {
      apiKey: "AIzaSyAG3e4DL_Oxs8oLVHo5Iv2S8IGlOOs6Lyk",
      authDomain: "kwitter-86da4.firebaseapp.com",
      databaseURL: "https://kwitter-86da4-default-rtdb.firebaseio.com",
      projectId: "kwitter-86da4",
      storageBucket: "kwitter-86da4.appspot.com",
      messagingSenderId: "1055374187549",
      appId: "1:1055374187549:web:61b5ad56f6dd3182e53af4"
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


