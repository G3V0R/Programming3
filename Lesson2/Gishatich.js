class Gishatich {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.index = 3;
    this.lives = 10;
    this.energy = 6;
    this.keracKendani = 0;
  }
  stanalNorKordinatner() {
    this.directions = [
      [this.x - 1, this.y - 1],
      [this.x, this.y - 1],
      [this.x + 1, this.y - 1],
      [this.x - 1, this.y],
      [this.x + 1, this.y],
      [this.x - 1, this.y + 1],
      [this.x, this.y + 1],
      [this.x + 1, this.y + 1]
    ];
  }
  yntrelVandak(ch) {
    this.stanalNorKordinatner();
    var found = [];
    for (var i in this.directions) {
      var x = this.directions[i][0];
      var y = this.directions[i][1];
      if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
        if (matrix[y][x] == ch) {
          found.push(this.directions[i]);
        }
      }
    }
    return found;
  }
  sharjvel() {
    this.stanalNorKordinatner();
    var norAzatVandak = random(this.yntrelVandak(0));
    var norXotiVandak = random(this.yntrelVandak(1));
    if (norAzatVandak) {
      this.lives--;
      matrix[this.y][this.x] = 0;
      matrix[norAzatVandak[1]][norAzatVandak[0]] = 3;
      this.x = norAzatVandak[0];
      this.y = norAzatVandak[1];
    } else if (!norAzatVandak && norXotiVandak) {
      this.lives--;
      matrix[this.y][this.x] = 1;
      matrix[norXotiVandak[1]][norXotiVandak[0]] = 3;
      this.y = norXotiVandak[1];
      this.x = norXotiVandak[0];
    }
  }
  mernel() {
    this.stanalNorKordinatner();
    if (this.lives <= 0) {
      for (var el in gishatichArr) {
        matrix[this.y][this.x] = 0;
        if (gishatichArr[el].x == this.x && gishatichArr[el].y == this.y) {
          gishatichArr.splice(el, 1);
        }
      }
    }
  }
  utel() {
    this.stanalNorKordinatner();
    var norVandak = random(this.yntrelVandak(2));
    if (norVandak) {
      this.keracKendani++;
      matrix[norVandak[1]][norVandak[0]] = 3;
      matrix[this.y][this.x] = 0;
      this.y = norVandak[1];
      this.x = norVandak[0];
      for (var el in xotakerArr) {
        if (xotakerArr[el].x == norVandak[0] && xotakerArr[el].y == norVandak[1]) {
          xotakerArr.splice(el, 1);
          // console.log(this.keracKendani);
        }
      }
      this.keracKendani++;
      if (this.lives < 10) {
        this.lives++;
      }
      if (this.energy < 10) {
        this.energy++;
      }
    } else {
      this.sharjvel();
    }
  }
  bazmanal() {
    this.stanalNorKordinatner();
    var gishatchiNorVandak = random(this.yntrelVandak(0));
    if (gishatchiNorVandak) {
      if (this.energy == 10 && this.lives >= 6 && (this.keracKendani % 5) == 0) {
        // console.log(1000000000);
        this.lives = 3;
        this.energy = 4;
        var norGishatich = new Gishatich(gishatchiNorVandak[0], gishatchiNorVandak[1]);
        matrix[gishatchiNorVandak[1]][gishatchiNorVandak[0]] = 2;
        gishatichArr.push(norGishatich);
      }
    }
  }
}