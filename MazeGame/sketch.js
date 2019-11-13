let w,
current,
finished,
p,
show, finish, timer;
const grid = [],
stack = [],
cols = sessionStorage.getItem(`size`);

function setup() {
  const size = 727;
  createCanvas(size, size);
  w = width / cols;

  player = new Player(0, 0, w);

  for (i = 0; i < cols; i++) {
    grid[i] = [];
    for (j = 0; j < cols; j++) {
      const cell = new Cell(i, j, w);
      grid[i].push(cell);
    }
  }
  finish = grid[cols - 1][cols - 1];
  current = finish;
}

function keyPressed() {
  if (finished) {
    const walls = grid[player.x][player.y].walls;
    switch (keyCode) {
      case LEFT_ARROW:
        player.move('left', walls);
        break;
      case RIGHT_ARROW:
        player.move('right', walls);
        break;
      case UP_ARROW:
        player.move('up', walls);
        break;
      case DOWN_ARROW:
        player.move('down', walls);
        break;
    }
  }
}

function draw() {
  for (j = 0; j < grid.length; j++) {
    for (i = 0; i < grid.length; i++) {
        grid[j][i].show();
    }
  }
  !finished ? current.highlight() : null;
  current.visited = true;
  const next = current.checkNeighbors();
  if (next) {
    stack.push(current);

    removeWalls(current, next);

    current = next;
  } else if (stack.length > 0) {
    current = stack.pop();
  } else if (stack.length == 0) {
    if (!finished) {
      finished = true;
    }
  }
  if (finished) {
    if (timer) {
      timer.update();
      console.log(timer.show())
    } else {
      startTimer();
    }
    player.show();
    finish.highlightEnd();
  }
  if (player.x === cols - 1 && player.y === cols - 1) {
    window.location.replace(`./win.html`)
  }
}

function startTimer() {
  timer = new Timer();
}

function index(i, j) {
  if (i < 0 || j < 0 || i > cols - 1 || j > cols - 1) {
    return;
  }
  return grid[i][j];
}

function removeWalls(a, b) {
    const x = a.i - b.i;
    switch (x) {
      case 1:
        a.walls[3] = false;
        b.walls[1] = false;
        break;
      case -1:
        a.walls[1] = false;
        b.walls[3] = false;
        break;
    }
    const y = a.j - b.j;
    switch (y) {
      case 1:
        a.walls[0] = false;
        b.walls[2] = false;
        break;
      case -1:
        a.walls[2] = false;
        b.walls[0] = false;
        break;
      default:

    }
}
