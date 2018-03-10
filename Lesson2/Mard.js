class Mard {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.index = 4;
    this.lives = 18; // MAX - 24
    this.energy = 8; // MAX - 12 
    this.keracUteliq = 0;
    this.directions = [];
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
    var norVandak = random(this.yntrelVandak(0));
    if (norVandak) {
      this.lives--;
      matrix[this.y][this.x] = 0;
      matrix[norVandak[1]][norVandak[0]] = 4;
      this.x = norVandak[0];
      this.y = norVandak[1];
    }
  }
  utel() {
    this.stanalNorKordinatner();
    var norXotiVandak = random(this.yntrelVandak(1));
    var norXotakeriVandak = random(this.yntrelVandak(2));
    var norGishatichVandak = random(this.yntrelVandak(3));
    if (norGishatichVandak) {
      if (this.lives < 24) {
        this.lives++;
      }
      if (this.energy < 12) {
        this.energy++;
      }
      matrix[this.y][this.x] = 0;
      matrix[norGishatichVandak[1]][norGishatichVandak[0]] = 4;
      this.y = norGishatichVandak[1];
      this.x = norGishatichVandak[0];
      for (var el in gishatichArr) {
        if (gishatichArr[el].x == this.x && gishatichArr[el].y == this.y) {
          gishatichArr.splice(el, 1);
        }
      }
    } else if (!norGishatichVandak && norXotakeriVandak) {
      if (this.lives < 24) {
        this.lives++;
      }
      if (this.energy < 12) {
        this.energy++;
      }
      matrix[this.y][this.x] = 0;
      matrix[norXotakeriVandak[1]][norXotakeriVandak[0]] = 4;
      this.y = norXotakeriVandak[1];
      this.x = norXotakeriVandak[0];
      for (var el in xotakerArr) {
        if (xotakerArr[el].x == this.x && xotakerArr[el].y == this.y) {
          xotakerArr.splice(el, 1);
        }
      }
    } else if (!norGishatichVandak && !norXotakeriVandak && norXotiVandak) {
      if (this.lives < 24) {
        this.lives += 0.10;
      }
      if (this.energy < 12) {
        this.energy += 0.25;
      }
      matrix[this.y][this.x] = 0;
      matrix[norXotiVandak[1]][norXotiVandak[0]] = 4;
      this.y = norXotiVandak[1];
      this.x = norXotiVandak[0];
      for (var el in grassArr) {
        if (grassArr[el].x == this.x && grassArr[el].y == this.y) {
          grassArr.splice(el, 1);
        }
      }
    } else {
      this.sharjvel();
    }
  }
  bazmanal() {
    this.stanalNorKordinatner();
    var norVandak = random(this.yntrelVandak(0));
    if (norVandak) {
      if (this.lives >= 18 && this.energy == 12) {
        this.lives = 14;
        this.energy = 6;
        matrix[norVandak[1]][norVandak[0]] = 4;
        var norMard = new Mard(norVandak[0], norVandak[1]);
        mardArr.push(norMard);
      }
    }
  }
  mernel() {
    if (this.lives <= 0) {
      matrix[this.y][this.x] = 0;
      for (var el in mardArr) {
        if (mardArr[el].x == this.x && mardArr[el].y == this.y) {
          mardArr.splice(el, 1);
        }
      }
    }
  }
}