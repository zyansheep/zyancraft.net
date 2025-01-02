
function loadPageJS(){
  //Load login attributes
  //var script = document.createElement('script');
  /* script.src = "/login"; */
  /* document.head.appendChild(script); */
  
  var backButton = document.createElement('a');
  backButton.id = "backButton";
  backButton.innerHTML = "<- to Zyancraft Home";
  backButton.href = "/"
  document.body.appendChild(backButton);
  
  /* script.onload = function () {
    //Make login status div
    userStatDiv = document.createElement('div');
    userStatDiv.id = "userStatus";
    document.body.appendChild(userStatDiv)
    
    if(UserIsLogged){
      userStatDiv.innerHTML = "Logged in as: " + UserName;
      userStatDiv.style.display = "block";
    }
  }; */
}
window.onload = loadPageJS;

function requestFullScreen(element) {
  // Supports most browsers and their versions.
  var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullscreen;

  if (requestMethod) { // Native full screen.
      requestMethod.call(element);
  } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
      var wscript = new ActiveXObject("WScript.Shell");
      if (wscript !== null) {
          wscript.SendKeys("{F11}");
      }
  }
}

function makeFullScreen() {
  document.getElementsByTagName("iframe")[0].className = "fullScreen";
  var elem = document.body;
  //requestFullScreen(elem);
}