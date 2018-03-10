var matrix = [
  
];
for (var y = 0; y < 24; y++) {
  matrix.push([]);
  for (var x = 0; x < 24; x++) {
    var randNum = Math.floor((4 - 0 + 1) * Math.random() - 0);
    matrix[y][x] = randNum;
  }
}


var side = 12;
var grassArr = [];
var xotakerArr = [];
var gishatichArr = [];
var mardArr = [];
// (0, matrix.length-1)
// (0, matrix[0].length - 1)

function setup() {
  frameRate(6);
  createCanvas(matrix[0].length * side, matrix.length * side);
  background('#acacac');
  for (var y = 0; y < matrix.length; ++y) {
    for (var x = 0; x < matrix[y].length; ++x) {
      if (matrix[y][x] == 1) {
        var gr = new Grass(x, y,1);
        grassArr.push(gr);
      } else if (matrix[y][x] == 2) {
        var xk = new Xotaker(x, y);
        xotakerArr.push(xk);
      } else if (matrix[y][x] == 3) {
        var gsh = new Gishatich(x, y);
        gishatichArr.push(gsh);
      } else if (matrix[y][x] == 4) {
        var mard = new Mard(x, y);
        mardArr.push(mard);
      }
    }
  }
}

function draw() {
  for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
      if (matrix[y][x] == 1) {
        fill("green");
        rect(x * side, y * side, side, side);
      } else if (matrix[y][x] == 0) {
        fill("#acacac");
        rect(x * side, y * side, side, side);
      } else if (matrix[y][x] == 2) {
        fill(255, 255, 0);
        rect(x * side, y * side, side, side);
      } else if (matrix[y][x] == 3) {
        fill(255, 0, 0);
        rect(x * side, y * side, side, side);
      } else if (matrix[y][x] == 4) {
        fill(215, 9, 214);
        rect(x * side, y * side, side, side);
      }
    }
  }
  if (grassArr.length == 0 && xotakerArr.length == 0) {
    for (var y = 0; y < matrix.length; y++) {
      for (var x = 0; x < matrix[y].length; x++) {
        if ((grassArr.length - 1) >= 4) {
          break;
        }
        var randomYForGrass = Math.floor(random(0, matrix.length - 1));
        var randomXForGrass = Math.floor(random(0, matrix[y].length - 1));
        matrix[randomYForGrass][randomXForGrass] = 1;
        var newGrass = new Grass(randomXForGrass, randomYForGrass,1);
        grassArr.push(newGrass);
      }
    }
  }
  if ((grassArr.length - 1) >= 4 && xotakerArr.length == 0) {
    for (var y = 0; y < matrix.length; y++) {
      for (var x = 0; x < matrix[y].length; x++) {
        if (grassArr.length > 6) {
          if (xotakerArr.length > 2) {
            break;
          }
          var randomXForXotaker = Math.floor(random(0, matrix.length - 1));
          var randomYForXotaker = Math.floor(random(0, matrix[y].length - 1));
          matrix[randomYForXotaker][randomXForXotaker] = 2;
          for (var el in grassArr) {
            if (grassArr[el].x == randomXForXotaker && grassArr[el].y == randomYForXotaker) {
              continue;
            } else if((xotakerArr.length-1) <= 5){
              var norXotaker = new Xotaker(randomXForXotaker, randomYForXotaker);
              xotakerArr.push(norXotaker);
            }
          }
        }
      }
    }
  }
  if ((grassArr.length - 1) >= 6 && (xotakerArr.length - 1) >= 3) {
    for (var y = 0; y < matrix.length; y++) {
      for (var x = 0; x < matrix[y].length; x++) {
        if (xotakerArr.length > 5) {
          break;
        }
        var randomXForGishatich = Math.floor(random(0, matrix[y].length - 1));
        var randomYForGishatich = Math.floor(random(0, matrix[y].length - 1));
        if (matrix[y][x] == 0  && gishatichArr.length <= 4) {
          matrix[randomYForGishatich][randomXForGishatich] = 3;
          var norGishatich = new Gishatich(randomXForGishatich, randomYForGishatich);
          gishatichArr.push(norGishatich);
        } else {
          continue;
        }
      }
    }
  }
  if((grassArr.length-1)>= 12 && (xotakerArr.length-1)>=6 && (gishatichArr.length-1)>=4){
    for(var y = 0;y<matrix.length;y++){
      for(var x = 0;x<matrix[y].length;x++){
        if(mardArr.length >4 ){
          break;
        }
        var randomXForMard = Math.floor(random(0, matrix[y].length - 1));
        var randomYForMard = Math.floor(random(0, matrix[y].length - 1));
        if(matrix[y][x] == 0 && mardArr.length <= 2){
          matrix[randomYForMard][randomXForMard] = 4;
          var norMard = new Mard(randomXForMard,randomYForMard);
          mardArr.push(norMard); 
        }else{
          continue;
        }
      }
    }
  }
  for (var i in grassArr) {
    grassArr[i].bazmanal();
  }
  for (var i in xotakerArr) {
    xotakerArr[i].utel();
    xotakerArr[i].bazmanal();
    xotakerArr[i].mernel();
  }
  for (var i in gishatichArr) {
    gishatichArr[i].utel();
    gishatichArr[i].bazmanal();
    gishatichArr[i].mernel();
  }
  for (var i in mardArr) {
    mardArr[i].utel();
    mardArr[i].bazmanal();
    mardArr[i].mernel();
  }
}