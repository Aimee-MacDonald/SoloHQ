var leftFlapFlag = true;
var rightFlapFlag = true;

function toggleLeftFlap(){
  leftFlapFlag = !leftFlapFlag;

  if(!leftFlapFlag){
    document.getElementById("inputs").style.display = "none";
    document.getElementById("buttons").style.display = "none";
  } else {
    document.getElementById("inputs").style.display = "flex";
    document.getElementById("buttons").style.display = "flex";
  }
}

function toggleRightFlap(){
  rightFlapFlag = !rightFlapFlag;

  if(!rightFlapFlag){
    document.getElementById("timer").style.display = "none";
    document.getElementById("pomodori").style.display = "none";
  } else {
    document.getElementById("timer").style.display = "flex";
    document.getElementById("pomodori").style.display = "block";
  }
}
