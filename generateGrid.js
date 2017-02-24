function generateGrid() {
  var addCols = 4;
  var colsels = document.getElementById("radio" + addCols);
  var cols = 5;
  var radios = 3;
  var content = document.getElementById('row" + (gRows + 1) + "');
  var table = document.getElementById('Circle');
  var clearTable = document.getElementById("Circle").innerHTML = "";

  document.getElementById('radio0').onclick = function click() {
    cols = 5;
    console.log("Checking cols: " + cols);
    table.innerHTML = "<div id='row" + (gRows + 1) + "'>";
    for (i = 0; i < gRows; i++) {
      content.innerHTML = "<div id='row" + gRows + "'></div>";
      console.log(content);
    }

    for (i = 0; i < 5; i++) {
      document.getElementById(content).innerHTML += "<div class='square default' id=" + gRows + "_" + i + "></div>";
    }
    console.log("Checking i in loop: " + i);
    //if(){

    //}
  }

  document.getElementById('radio1').onclick = function click() {
    cols = 6;
    console.log("Checking cols: " + cols);
    //if(){

    //}
  }

  document.getElementById('radio2').onclick = function click() {
    cols = 7;
    console.log("Checking cols: " + cols);
    //if(){

    //}
  }

  document.getElementById('radio3').onclick = function click() {
    cols = 8;
    console.log("Checking cols: " + cols);
    //if(){

    //}
  }

  // document.getElementById("radio0").onclick = (cols = 5);
  // document.getElementById("radio1").onclick = (cols = 6);
  // document.getElementById("radio2").onclick = (cols = 7);
  // document.getElementById("radio3").onclick = (cols = 8);
}

// function generateGrid(v) {
//   var i = 0;
//   var e = document.getElementById("Game"); // whatever you want to append the rows to:
//   for (i = 0; i < v; i++) {
//     var row = document.createElement("div");
//     row.className = "row_" + i;
//     for (var x = 1; x <= v; x++) {
//       var cell = document.createElement("div");
//       cell.className = "square default";
//       cell.innerText = (i * v) + x;
//       row.appendChild(cell);
//     }
//     e.appendChild(row);
//   }
//   document.getElementById("row" + i).innerHTML = e.innerHTML;
//   console.log(e.innerHTML);
//
// }
