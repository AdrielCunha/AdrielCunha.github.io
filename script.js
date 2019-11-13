function play() {
    const size = document.getElementById(`size`).value;
    sessionStorage.setItem(`size`, size);
    window.location.pathname.replace(`index.html`, `MazeGame/maze.html`);
}