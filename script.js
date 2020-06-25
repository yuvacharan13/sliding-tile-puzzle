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
    return;
  }}
  if (row>1){
  if(document.getElementById("tile"+(row-1)+col).textContent == " "){
    swapTiles("tile"+row+col,"tile"+(row-1)+col);
    return;
  }}
  if (col>1){
  if(document.getElementById("tile"+row+(col-1)).textContent == " "){
    swapTiles("tile"+row+col,"tile"+row+(col-1));
    return;
  }}
  if (col<4){
  if(document.getElementById("tile"+row+(col+1)).textContent == " "){
    swapTiles("tile"+row+col,"tile"+row+(col+1));
    return;
  }}
}
