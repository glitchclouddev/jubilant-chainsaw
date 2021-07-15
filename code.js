onEvent("button1", "click", function( ) {
  if (getText("text_input1") == "abcdefg") {
    setScreen("passcorrect");
  } else {
    setScreen("passwordinccorect");
  }
});
onEvent("returntologin", "click", function( ) {
  setScreen("loginmain");
});
onEvent("button4", "click", function( ) {
  if (getText("dropdown1") == "Red") {
    setScreen("studentoradminred");
  } else if ((getText("dropdown1") == "Blue")) {
    setScreen("studentoradminblue");
  } else if ((getText("dropdown1") == "Green")) {
    setScreen("studentoradmingreen");
  }
});
onEvent("button3", "click", function( ) {
  setScreen("selectclassroom");
});
onEvent("studentblue", "click", function( ) {
  playSpeech("Welcome to the Student Page for Blue House.", "female", "English");
});
onEvent("adminblue", "click", function( ) {
  setScreen("adminbluepage");
  playSpeech("Welcome, Administrator. Please enter your access code for the student files.", "female", "English");
});
onEvent("button8", "click", function( ) {
  if (getText("text_input2") == "adminpassblue") {
    setScreen("screen1");
  } else {
    
  }
});
