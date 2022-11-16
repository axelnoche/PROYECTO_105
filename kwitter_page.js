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
  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");
  function send() { msg = document.getElementById("msg").value;
   firebase.database().ref(room_name).push({ name:user_name, message:msg, like:0 });
    document.getElementById("msg").value = "";
   }

  function getData(){
    firebase.database().ref("/" + room_name).on("value", function(snapshot){document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot){childkey = childSnapshot.val(); if(childkey!="purpos"){
      firebase_message_id = childkey;
      message_data = childData;
      console.log(firebase_message_id);
      console.log(message_data);
      names = message_data["name"];
      message = message_data["message"];
      like = message_data["like"];
      name_width_tag = "<h4>" + names + "<img class = 'user_tick' src = 'tick.png' > </h4>";
      message_with_tag = "<h4 class = 'message_h4'>" + message + "</h4>";
      like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
      span_with_tag = "<span class= 'glyphicon glyphicon-thums-up'>Me gusta: " + like + "</span></button><hr>";
      row = name_with_tag + message_with_tag + like_button + span_with_tag;
      document.getElementById("output").innerHTML +=row;

    }}) ;
    }) ;
    
  }
   getData();
  function updateLike(message_id){
  console.log("Presiono el boton de me gusta" + message_id);
  button_id = message_id;
  like = document.getElementById(button_id).value;
  update_likes = Number(likes) + 1;
  console.log(update_likes);
  firebase.database(). ref(room_name).child(message_id).update({
    like:update_likes
  });
  }

  function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
  }