/* Javascript for PrintXBlock. */
function printDiv() {
    window.print();
}
function changecolorDiv(){
  document.body.style.color = "blue";
}
function resizetextDiv() {
  if (document.body.style.fontSize == "") {
    document.body.style.fontSize = "1.0em";
  }
  document.body.style.fontSize = parseFloat(document.body.style.fontSize) + (10 * 0.2) + "em";
}
function decreasetextDiv() {
  if (document.body.style.fontSize == "") {
    document.body.style.fontSize = "1.0em";
  }
  document.body.style.fontSize = parseFloat(document.body.style.fontSize) + ((-10) * 0.2) + "em";
}

function enable()
  {
    d=document;
    jf=d.createElement('script');
    jf.src='https://core.atbar.org/atbar/en/latest/atbar.min.js';
    jf.type='text/javascript';
    jf.id='ToolBar';
    d.getElementsByTagName('head')[0].appendChild(jf);
  }
function enable1()
{
  d=document;
  jf=d.createElement('script');
  jf.src='https://cdn.jsdelivr.net/gh/suprgyabhushan/print-xblock/printxblock/static/js/src/toolbar30.js';
  jf.type='text/javascript';
  jf.id='ToolBar';
  d.getElementsByTagName('head')[0].appendChild(jf);
}
//document.getElementById('atbar').dispatchEvent(new MouseEvent("click"));
//var elem = document.getElementById('atbar');

// Simulate clicking on the specified element.
//triggerEvent( elem, 'click' );

//function triggerEvent( elem, event ) {
//  var clickEvent = new Event( event ); // Create the event.
//  elem.dispatchEvent( clickEvent );    // Dispatch the event.
//}
window.onload = onPageLoad();

function onPageLoad() {
  d=document;
  jf=d.createElement('script');
  jf.src='https://cdn.jsdelivr.net/gh/suprgyabhushan/print-xblock/printxblock/static/js/src/toolbar30.js';
  jf.type='text/javascript';
  jf.id='ToolBar';
  d.getElementsByTagName('head')[0].appendChild(jf);
}


/*function doalert(checkboxElem) {
  if (checkboxElem.checked==false) {
    d=document;
    jf=d.createElement('script');
    jf.src='http://marketplace.atbar.org/toolbars/25d28f0a5b08d5159bcdc88623586eb1a808b534.user.js';
    jf.type='text/javascript';
    jf.id='ToolBar';
    d.getElementsByTagName('head')[0].appendChild(jf);
  } else {
    window.alert("checked");
  }
}*/
