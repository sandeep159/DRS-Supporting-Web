var config = {
    apiKey: "AIzaSyBfCiqWFKRdggMkScRFbsZU-WDqytxp5mw",
    authDomain: "drsfirebaseproject-436d9.firebaseapp.com",
    databaseURL: "https://drsfirebaseproject-436d9.firebaseio.com",
    projectId: "drsfirebaseproject-436d9",
    storageBucket: "drsfirebaseproject-436d9.appspot.com",
    messagingSenderId: "157287703614",
    appId: "1:157287703614:web:ded7af3157a617bde8dd6f",
    measurementId: "G-0H6F4GXTHD"
  };

firebase.initializeApp(config);
// firebase.auth.Auth.Persistence.LOCAL;
console.log(firebase)
// To Validate Login
function check(){
    //getting values
   var email = document.getElementById("loginid").value;
   var pwd = document.getElementById("loginpass").value;
  //  var auth = firebase.auth();
  //  //signing in 
  //  var promise = auth.sighInWithEmailAndPassword(email,pwd);
  //  promise.catch(e => console.log(e.message));  
  
  if (email != "" && pwd!=""){

    var promise = firebase.auth().signInWithEmailAndPassword(email,pwd);

    promise.catch(function(error){
      alert("something is wrong try a valid account")
      console.log(error.message);

    });

  } else{
    alert("something went wrong, please check the userid and password");

  }
}

function adduser(){
  var email = document.getElementById("signupid").value;
  var pwd = document.getElementById("pwd").value;
  var cpwd = document.getElementById("cpwd").value;

  if (email != "" && pwd!="" && cpwd!=""){

    if(pwd == cpwd){
      var promise = firebase.auth().createUserWithEmailAndPassword(email,pwd);

    promise.catch(function(error){
      alert("something is wrong try a valid account")
      console.log(error.message);

    });
    }
    else{
      alert("password dosent match, failed to sign up")
    }


  } else{
    alert("something went wrong, please check the userid and password");

  }

}

