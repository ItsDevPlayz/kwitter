

const firebaseConfig = {
      apiKey: "AIzaSyBCnuL-AR_V_7o27CjtyAwHh3On1aBroG0",
      authDomain: "kwitter-bd39f.firebaseapp.com",
      databaseURL: "https://kwitter-bd39f-default-rtdb.firebaseio.com",
      projectId: "kwitter-bd39f",
      storageBucket: "kwitter-bd39f.appspot.com",
      messagingSenderId: "90665145961",
      appId: "1:90665145961:web:978d121eae45b90e76f4f8"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name;


function AddRoom(){
room_name=document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
});

localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name -"+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html"
}
function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";

}


