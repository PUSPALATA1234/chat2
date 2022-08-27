// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyBRKkWqXjy1iEDi9DYrlNEwGoIPDvkPj5M",
    authDomain: "chat-a2afb.firebaseapp.com",
    databaseURL: "https://chat-a2afb-default-rtdb.firebaseio.com",
    projectId: "chat-a2afb",
    storageBucket: "chat-a2afb.appspot.com",
    messagingSenderId: "426455732938",
    appId: "1:426455732938:web:f8d75a7825319c0a091a33"
  };
  

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



