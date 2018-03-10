class Xotaker extends KendaniEak {
    constructor(x,y,index){
        super(x,y,index);
        this.tariq = 0;
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
       return super.yntrelVandak(ch);
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
}

