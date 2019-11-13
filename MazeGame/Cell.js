class Cell {
    constructor(x, y, w) {
      this.i = x;
      this.j = y;
      this.walls = [true, true, true, true]; // top, right, bottom, left
      this.visited = false;
      this.w = w;
    }
    
    checkNeighbors() {
      let neighbors = [];
        
      const top    = index(this.i    , this.j - 1);
      const right  = index(this.i + 1, this.j    );
      const bottom = index(this.i    , this.j + 1);
      const left   = index(this.i - 1, this.j    );
  
      if (top && !top.visited) {
        neighbors.push(top);
      }
      if (right && !right.visited) {
        neighbors.push(right);
      }
      if (bottom && !bottom.visited) {
        neighbors.push(bottom);
      }
      if (left && !left.visited) {
        neighbors.push(left);
      }
  
      if (neighbors.length > 0) {
        let r = floor(random(0, neighbors.length));
        return neighbors[r];
      } else {
        return;
      }
    }

    highlightEnd() {
      const x = this.i * this.w;
      const y = this.j * this.w;
      noStroke();
      fill(0, 240, 0);
      rect(x, y, this.w, this.w);
    }
  
    highlight() {
      const x = this.i * this.w;
      const y = this.j * this.w;
      noStroke();
      fill(80);
      rect(x, y, this.w, this.w);
    }
  
    show() {
        const x = this.i * this.w;
        const y = this.j * this.w;
        if (this.visited) {
          noStroke();
          fill(0);
          rect(x, y, this.w, this.w);

          stroke(255);
          strokeWeight(2);
          if (this.walls[0]) {
              line(    x     ,   y  , x + this.w,   y);
          }
          if (this.walls[1]) {
              line(x + this.w,   y  , x + this.w, y + this.w);
          }
          if (this.walls[2]) {
              line(x + this.w, y + this.w,   x  , y + this.w);
          }
          if (this.walls[3]) {
              line(  x  , y + this.w,   x  ,   y);
          }
        }
    }
}
