var body = document.getElementsByTagName('body');
body[0].setAttribute('onload', 'shuffle();');

var heading = document.createElement('h1');
heading.textContent = "SLIDING TILE PUZZLE";
heading.setAttribute('id', 'heading');
body[0].appendChild(heading);

var mainDiv = document.createElement('div');
mainDiv.setAttribute('id', 'puzzle');

var myDiv = document.createElement("div");
myDiv.setAttribute('class', 'grid');

body[0].appendChild(mainDiv);
mainDiv.appendChild(myDiv);

var button1 = document.createElement('button');
button1.textContent = 1;
button1.setAttribute('id', 'tile11');
button1.setAttribute('onClick', 'clickTile(1,1);');
myDiv.appendChild(button1);

var button2 = document.createElement('button');
button2.textContent = 2;
button2.setAttribute('id', 'tile12');
button2.setAttribute('onClick', 'clickTile(1,2);');
myDiv.appendChild(button2);

var button3 = document.createElement('button');
button3.textContent = 3;
button3.setAttribute('id', 'tile13');
button3.setAttribute('onClick', 'clickTile(1,3);');
myDiv.appendChild(button3);

var button4 = document.createElement('button');
button4.textContent = 4;
button4.setAttribute('id', 'tile14');
button4.setAttribute('onClick', 'clickTile(1,4);');
myDiv.appendChild(button4);

var button5 = document.createElement('button');
button5.textContent = 5;
button5.setAttribute('id', 'tile21');
button5.setAttribute('onClick', 'clickTile(2,1);');
myDiv.appendChild(button5);

var button6 = document.createElement('button');
button6.textContent = 6;
button6.setAttribute('id', 'tile22');
button6.setAttribute('onClick', 'clickTile(2,2);');
myDiv.appendChild(button6);

var button7 = document.createElement('button');
button7.textContent = 7;
button7.setAttribute('id', 'tile23');
button7.setAttribute('onClick', 'clickTile(2,3);');
myDiv.appendChild(button7);

var button8 = document.createElement('button');
button8.textContent = 8;
button8.setAttribute('id', 'tile24');
button8.setAttribute('onClick', 'clickTile(2,4);');
myDiv.appendChild(button8);

var button9 = document.createElement('button');
button9.textContent = 9;
button9.setAttribute('id', 'tile31');
button9.setAttribute('onClick', 'clickTile(3,1);');
myDiv.appendChild(button9);

var button10 = document.createElement('button');
button10.textContent = 10;
button10.setAttribute('id', 'tile32');
button10.setAttribute('onClick', 'clickTile(3,2);');
myDiv.appendChild(button10);

var button11 = document.createElement('button');
button11.textContent = 11;
button11.setAttribute('id', 'tile33');
button11.setAttribute('onClick', 'clickTile(3,3);');
myDiv.appendChild(button11);

var button12 = document.createElement('button');
button12.textContent = 12;
button12.setAttribute('id', 'tile34');
button12.setAttribute('onClick', 'clickTile(3,4);');
myDiv.appendChild(button12);

var button13 = document.createElement('button');
button13.textContent = 13;
button13.setAttribute('id', 'tile41');
button13.setAttribute('onClick', 'clickTile(4,1);');
myDiv.appendChild(button13);

var button14 = document.createElement('button');
button14.textContent = 14;
button14.setAttribute('id', 'tile42');
button14.setAttribute('onClick', 'clickTile(4,2);');
myDiv.appendChild(button14);

var button15 = document.createElement('button');
button15.textContent = 15;
button15.setAttribute('id', 'tile43');
button15.setAttribute('onClick', 'clickTile(4,3);');
myDiv.appendChild(button15);

var button16 = document.createElement('button');
button16.textContent = " ";
button16.setAttribute('id', 'tile44');
button16.setAttribute('onClick', 'clickTile(4,4);');
myDiv.appendChild(button16);


var buttonS = document.createElement('button');
buttonS.textContent = "Start game";
buttonS.setAttribute('onClick', 'shuffle();');
buttonS.classList.add("btn", "btn-primary:hover");
buttonS.setAttribute('onClick', 'startTime();');
body[0].appendChild(buttonS);

var buttonR = document.createElement('button');
buttonR.textContent = "Reset";
buttonR.setAttribute('onClick', 'shuffle();');
buttonR.classList.add("btn", "btn-primary:hover");
buttonR.setAttribute('onClick', 'location.reload();');
body[0].appendChild(buttonR);


var para1 = document.createElement('p');
para1.textContent = "Time Left --  "
var span1 = document.createElement('span');
para1.setAttribute('id', 'para1');
span1.setAttribute('id', 'timer');
mainDiv.appendChild(para1);
para1.appendChild(span1);

var para2 = document.createElement('p');
para2.setAttribute('id', 'result');
mainDiv.appendChild(para2);


var puzzleDone = 0;
var timerStop = 0;
function swapTiles(tile1,tile2) {
  var temp = document.getElementById(tile1).textContent;
  document.getElementById(tile1).textContent = document.getElementById(tile2).textContent;
  document.getElementById(tile2).textContent = temp;
}

function shuffle() {
for (var row=1;row<=4;row++) {
   for (var col=1;col<=4;col++) {
     var row1=Math.floor(Math.random()*4 + 1);
     var col1=Math.floor(Math.random()*4 + 1);
     swapTiles("tile"+row+col,"tile"+row1+col1);
  }
}
}

function clickTile(row,col){
  if (row<4){
  if(document.getElementById("tile"+(row+1)+col).textContent == " "){
    swapTiles("tile"+row+col,"tile"+(row+1)+col);
    grid();
    return;
  }}
  if (row>1){
  if(document.getElementById("tile"+(row-1)+col).textContent == " "){
    swapTiles("tile"+row+col,"tile"+(row-1)+col);
    grid();
    return;
  }}
  if (col>1){
  if(document.getElementById("tile"+row+(col-1)).textContent == " "){
    swapTiles("tile"+row+col,"tile"+row+(col-1));
    grid();
    return;
  }}
  if (col<4){
  if(document.getElementById("tile"+row+(col+1)).textContent == " "){
    swapTiles("tile"+row+col,"tile"+row+(col+1));
    grid();
    return;
  }}
}


function grid(){
    if((document.getElementById("tile11").textContent == "1") &&
       (document.getElementById("tile12").textContent == "2") &&
       (document.getElementById("tile13").textContent == "3") &&
       (document.getElementById("tile14").textContent == "4") &&
       (document.getElementById("tile21").textContent == "5") &&
       (document.getElementById("tile22").textContent == "6") &&
       (document.getElementById("tile23").textContent == "7") &&
       (document.getElementById("tile24").textContent == "8") &&
       (document.getElementById("tile31").textContent == "9") &&
       (document.getElementById("tile32").textContent == "10") &&
       (document.getElementById("tile33").textContent == "11") &&
       (document.getElementById("tile34").textContent == "12") &&
       (document.getElementById("tile41").textContent == "13") &&
       (document.getElementById("tile42").textContent == "14") &&
       (document.getElementById("tile43").textContent == "15") &&
       (document.getElementById("tile44").textContent == " ")
     ){
         document.getElementById('result').textContent = "Hurray!!You have won";
         timerStop++;
       }
}

document.getElementById('timer').innerHTML = 07 + ":" + 00;

var count = 0;
function startTime(){
document.getElementById('timer').innerHTML = 07 + ":" + 00;
if(count == 0){
  startTimer();
}
count++;
}


function startTimer() {
  var presentTime = document.getElementById('timer').innerHTML;
  var timeSet = presentTime.split(/[:]+/);
  var m = timeSet[0];
  var s = updateSeconds((timeSet[1] - 1));
  if(s==59){m=m-1}
  document.getElementById('timer').textContent = m + ":" + s;
    if((m>0) || (s>0)){
      if(timerStop == 0){
      setTimeout(startTimer, 1000);
    }else{
      return document.getElementById('timer').textContent;
    }
    }else{
      document.getElementById('result').textContent = "Sorry, better luck next time";
  }
}

function updateSeconds(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec};
  if (sec < 0) {sec = "59"};
  return sec;
}
