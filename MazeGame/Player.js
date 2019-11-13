class Player {
    constructor(x, y, w) {
        this.w = w * 0.5;
        this.x = x;
        this.y = y;
    }

    show() {
        const x = this.x * w + (w * 0.25);
        const y = this.y * w + (w * 0.25);
        fill(255);
        rect(x, y, this.w, this.w);
    }

    move(direction, walls) {
        if (direction === 'left' && !walls[3]) {
            this.x--;
        } else if (direction === 'right' && !walls[1]) {
            this.x++;
        } else if (direction === 'up' && !walls[0]) {
            this.y--;
        } else if (direction === 'down' && !walls[2]) {
            this.y++;
        }
    }
}
