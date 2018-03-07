class Grass {
  constructor(x, y, index) {
    this.x = x;
    this.y = y;
    this.index = index;
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
    this.multiply = 0;
  }

  yntrelVandak(ch) {
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
  bazmanal() {
    this.multiply++;
    var norVandak = random(this.yntrelVandak(0));
    if (this.multiply >= 8 && norVandak) {
      var norXot = new Grass(norVandak[0], norVandak[1]);
      grassArr.push(norXot);
      matrix[norVandak[1]][norVandak[0]] = 1;
      this.multiply = 0;
    }
  }
}

class Xotaker {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.energy = 6;
    this.directions = [];
    this.index = 2;
    this.lives = 5;
    this.keracXot = 0;
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
      // console.log(this.lives);
      this.lives -= 1;
      this.energy -= 1;
      // console.log(this.keracXot);
      matrix[this.y][this.x] = 0;
      matrix[norVandak[1]][norVandak[0]] = 2;
      this.x = norVandak[0];
      this.y = norVandak[1];
    }
  }
  utel() {
    this.stanalNorKordinatner();
    var xotiVandak = random(this.yntrelVandak(1));
    if (xotiVandak) {
      this.keracXot += 1;
      if (this.lives < 5) {
        this.lives += 1;
      }
      if (this.energy < 6) {
        this.energy += 1;
      }
      matrix[this.y][this.x] = 0;
      matrix[xotiVandak[1]][xotiVandak[0]] = 2;
      this.x = xotiVandak[0];
      this.y = xotiVandak[1];
      for (var el in grassArr) {
        if (grassArr[el].x == this.x && grassArr[el].y == this.y) {
          grassArr.splice(el, 1);

        }
      }
    } else {
      this.sharjvel();
    }
  }
  mernel() {
    if (this.lives <= 0) {
      matrix[this.y][this.x] = 0;
      for (var el in xotakerArr) {
        if (xotakerArr[el].x == this.x && xotakerArr[el].y == this.y) {
          xotakerArr.splice(el, 1);
        }
      }
    }
  }
  bazmanal() {
    this.stanalNorKordinatner();
    var xotakeriNorVandak = random(this.yntrelVandak(0));
    if (xotakeriNorVandak) {
      if (this.energy == 8 && this.lives >= 3 && (this.keracXot % 10 == 0)) {
        this.lives -= 1;
        this.energy = 4;
        var norKendani = new Xotaker(xotakeriNorVandak[0], xotakeriNorVandak[1]);
        matrix[xotakeriNorVandak[1]][xotakeriNorVandak[0]] = 2;
        xotakerArr.push(norKendani);
      }
    }
  }
}

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