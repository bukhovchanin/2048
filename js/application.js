//var GM;
// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  var GM = new GameManager(4, KeyboardInputManager, HTMLActuator, LocalScoreManager);
//  var bot = new Bot(GM);
//  setInterval(function() {bot.makeTurn();}, 25);
    Autoplay(GM);
});
