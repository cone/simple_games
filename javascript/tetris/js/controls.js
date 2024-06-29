const ALLOWED_EVENTS = ["ArrowLeft", "ArrowRight"];

const setEventListeners = (game) => {
  window.addEventListener("keydown", event => {
    if (!ALLOWED_EVENTS.includes(event.key)) return;
    
    event.preventDefault();

    if (event.key === "ArrowLeft" && !game.shapeIsAtLeftEdge()) {
      game.currentShape.moveLeft();
    }
    if (event.key === "ArrowRight" && !game.shapeIsAtRightEdge()) {
      game.currentShape.moveRight();
    }
  });
}
