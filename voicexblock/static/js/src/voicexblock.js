  // Now we add the most important point of the plugin, the commands
  // This library is very flexible and now we will see why :
  // Every command is a literal object


//window.onLoad =  onPageLoad();

/*function start(){
    if (annyang) {
    // Let's define a command.
    var commands = {
      'hello': function() {
        alert('Hello world!');
      }
    };

    // Add our commands to annyang
    annyang.addCommands(commands);

    // Start listening.
    annyang.start();
  }
  else {
      alert('ERROR: annyang not loaded!');
  }


}*/

/*window.onkeydown = function(event) {
        if (event.keyCode == 76) {
        alert("Lol");
      }
    };
*/

window.onkeydown = onPagePress;
//window.onkeyup = onPagePressUp;
var keys = {
    alt: false,
    l: false,
    c: false,
    n: false,
    p: false
 };
function onPagePress(e) {
  //var charCode = (typeof e.which == "number") ? e.which : e.keyCode
  

  if (e.keyCode == 18) {
        keys["alt"] = true;
    } else if (e.keyCode == 76) {
        keys["l"] = true;
    } else if (e.keyCode == 78) {
        keys["n"] = true;
    } else if (e.keyCode == 67) {
        keys["c"] = true;
    } else if (e.keyCode == 80) {
        keys["p"] = true;
    }

  if (keys["alt"] && keys["l"]) {
    //document.getElementById('redirect_link').click();
    window.location = "http://subodha.visionempowertrust.org/dashboard";
    //window.alert("alt+l key pressed");
    keys["alt"] = false;
    keys["l"] = false;
    //window.location = "http://www.google.com/";

 }
 /*else if (e.which == 113) {
   document.getElementById('redirect_link1').click();
   window.alert("F2 key pressed");
   //window.location = "http://www.google.com/";

}*/
/*else if (e.ctrlKey && e.which == 78) {
  document.querySelector('.sequence-nav-button.button-previous').click();
  window.alert("p & n key pressed");

}*/
/*else if (e.which == 78) {
  //alert('bye');
  document.querySelector('.sequence-nav-button.button-next').click();
  window.alert("n key pressed");

}*/
else if (keys["alt"] && keys["c"]) {
  //alert('bye');
  document.querySelector('.nav-item.nav-item-course a').click();
  document.querySelector('.submit.btn-brand').click();
  //window.alert("alt+c key pressed");
  keys["alt"] = false;
  keys["c"] = false;

}
else if (keys["alt"] && keys["n"]) {
  //alert('bye');
  document.querySelector('.sequence-nav-button.button-next').click();
  //window.alert("alt+n key pressed");
  keys["alt"] = false;
  keys["n"] = false;

}
else if (keys["alt"] && keys["p"]) {
  //alert('bye');
  document.querySelector('.sequence-nav-button.button-previous').click();
  //window.alert("alt+p key pressed");
  keys["alt"] = false;
  keys["p"] = false;

}


}

/*function onPagePressUp(e) {
  //var charCode = (typeof e.which == "number") ? e.which : e.keyCode
  

  if (e.keyCode == 18) {
        keys["alt"] = false;
    } else if (e.keyCode == 68) {
        keys["d"] = false;
    } else if (e.keyCode == 78) {
        keys["n"] = false;
    } else if (e.keyCode == 83) {
        keys["s"] = false;
    } else if (e.keyCode == 80) {
        keys["p"] = false;
    }

  

}*/
