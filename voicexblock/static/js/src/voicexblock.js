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

window.onkeypress = onPagePress;

function onPagePress(e) {
  var charCode = (typeof e.which == "number") ? e.which : e.keyCode
  if (charCode == 113) {
    window.getElementById('redirect_link').click();
    //window.location = "http://www.google.com/";

 }

}
