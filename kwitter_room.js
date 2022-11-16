
var firebaseConfig = {
  apiKey: "AIzaSyAfaRl-o1-GZxS1YSm3_SainguCo_9rm9Y",
  authDomain: "clase-105.firebaseapp.com",
  databaseURL: "https://clase-105-default-rtdb.firebaseio.com",
  projectId: "clase-105",
  storageBucket: "clase-105.appspot.com",
  messagingSenderId: "29202770690",
  appId: "1:29202770690:web:ca6d1ba671260894ec701b"
};

      
        firebase.initializeApp(firebaseConfig);
      
      user_name = localStorage.getItem("user_name");
      
      document.getElementById("user_name").innerHTML = "¡Te damos la bienvenida, " + user_name + "!";
      
     function addRoom()
      {
        room_name = document.getElementById("room_name").value ;
        
        
      firebase.database().ref("/").child(room_name).update({
        purpose: "agregar nombre de sala"
        });
        localStorage.setItem("room_name", room_name);

       window.location = "kwitter_room.html";
      }
      
      function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
             Room_names = childKey;
             console.log("Nombre de la sala: " + Room_names);
            row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
            document.getElementById("output").innerHTML += row;
          });
        });
      
      }
      
      getData();
      
      function redirectToRoomName(name)
      {
        console.log(name);
        localStorage.setItem("room_name", name);
          window.location = "kwitter_page.html";
      }
      
      function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
          window.location = "index.html";
      }