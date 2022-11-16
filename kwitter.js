var firebaseConfig = {
  apiKey: "AIzaSyAfaRl-o1-GZxS1YSm3_SainguCo_9rm9Y",
  authDomain: "clase-105.firebaseapp.com",
  databaseURL: "https://clase-105-default-rtdb.firebaseio.com",
  projectId: "clase-105",
  storageBucket: "clase-105.appspot.com",
  messagingSenderId: "29202770690",
  appId: "1:29202770690:web:ca6d1ba671260894ec701b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
function addUser() {

    user_name = document.getElementById("user_name").value;
  
    localStorage.setItem("user_name", user_name);
    
      window.location = "kwitter_room.html";
  }