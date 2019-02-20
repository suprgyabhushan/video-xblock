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

function onPagePress(e) {
  //var charCode = (typeof e.which == "number") ? e.which : e.keyCode
  if ((e.which == 82) && (e.which == 18)) {
    document.getElementById('redirect_link').click();
    window.alert("Alt+r key pressed");
    //window.location = "http://www.google.com/";

 }
 else if (e.which == 113) {
   document.getElementById('redirect_link1').click();
   window.alert("F2 key pressed");
   //window.location = "http://www.google.com/";

}
else if (e.which == 37) {
  document.querySelector('.sequence-nav-button.button-previous').click();
  window.alert("Left arrow key pressed");

}
else if (e.which == 39) {
  //alert('bye');
  document.querySelector('.sequence-nav-button.button-next').click();
  window.alert("Right arrow key pressed");

}


}
