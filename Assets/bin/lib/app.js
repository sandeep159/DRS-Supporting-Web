 var mymap = L.map('mapid').setView([10.7867, 76.6548], 2);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoicHJvamVjdGNvbW1vbiIsImEiOiJja2Y1aDZmbGYwZ2tpMnpydmc1ODAycXdpIn0.-dE6MMUha6Ht55sxHmIurg'
}).addTo(mymap);

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

  // Get a reference to the database service
  // var database = firebase.database();
   firebase.database().ref('Area').child("Location").on('value',(snap)=>{
    each_row=snap.val();
    var keys=Object.keys(each_row);
    console.log(keys.length);
  });



function add(){
  var name = document.getElementById("name").value;
  var des = document.getElementById("des").value;
  var location = document.getElementById("lat").value;
  // var long = document.getElementById("long").value;
  geometry=get_lat_long(location);
   lat=geometry["lat"];
  long=geometry["lng"];
  console.log(lat);
  console.log(long);
  update(name,des,lat,long);
  update_map(lat,long);
  // document.getElementById("mainform").reset();
}

function update(name,Description,Lat,Long){

   firebase.database().ref('Area/Location/').push(
     {AreaName:name,
     Description: Description,
    latitude:parseFloat(Lat),
    longitude: parseFloat(Long),
}
     );
}
//set-view(lat,long)
function update_map(lat,long){

  var circle = L.circle([lat, long], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 5000
}).addTo(mymap);
  mymap.setView([lat, long],13);
}


function get_lat_long(location){
  url="https://api.opencagedata.com/geocode/v1/json?q="+location+"&key=7044a5dcde4547fd9328d2ba0d661699";
  data=getJSON(url);    
var jsonData = JSON.parse(data);
geometry=jsonData["results"][0]["geometry"];
return geometry
}





 function getJSON(url) {
        var resp ;
        var xmlHttp ;

        resp  = '' ;
        xmlHttp = new XMLHttpRequest();

        if(xmlHttp != null)
        {
            xmlHttp.open( "GET", url, false );
            xmlHttp.send( null );
            resp = xmlHttp.responseText;
        }

        return resp ;
    }



function removeuser(){
  firebase.auth().signOut();
  window.document.location="login.html";
}