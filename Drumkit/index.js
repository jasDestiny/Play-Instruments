for(var i=0; i<document.querySelectorAll(".drum").length;i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click",respondToClick);
}

function respondToClick(){
  if(this.className.toString()=="a drum"){
    var crash = new Audio("sounds/crash.mp3");
    crash.play();
    console.log(event);
  }
  else if(this.className.toString()=="s drum") {
    var snare = new Audio("sounds/snare.mp3");
    snare.play();
  }
  else if(this.className.toString()=="d drum") {
    var tom3 = new Audio("sounds/tom3.mp3");
    tom3.play();
  }
  else if(this.className.toString()=="f drum") {
    var tom1 = new Audio("sounds/tom1.mp3");
    tom1.play();
  }
  else if(this.className.toString()=="j drum") {
    var tom2 = new Audio("sounds/tom2.mp3");
    tom2.play();
  }
  else if(this.className.toString()=="k drum") {
    var tom4 = new Audio("sounds/tom4.mp3");
    tom4.play();
  }
  else if(this.className.toString()=="l drum") {
    var kick = new Audio("sounds/kick.mp3");
    kick.play();
  }
}

document.addEventListener("keypress", keyrespond);

function keyrespond(){
  var x=event.key.toString();
  switch(x){
    case 'a':
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case 's':
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case 'd':
      var tom3 = new Audio("sounds/tom3.mp3");
      tom3.play();
      break;
    case 'f':
      var tom1 = new Audio("sounds/tom1.mp3");
      tom1.play();
      break;
    case 'j':
      var tom2 = new Audio("sounds/tom2.mp3");
      tom2.play();
      break;
    case 'k':
      var tom4 = new Audio("sounds/tom4.mp3");
      tom4.play();
      break;
    case 'l':
      var kick = new Audio("sounds/kick.mp3");
      kick.play();
      break;
    default:
      console.log(event.key.toString());
  }
}
