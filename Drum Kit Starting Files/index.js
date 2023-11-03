document.addEventListener("DOMContentLoaded", function () {
  var numberOfButtons = document.querySelectorAll(".drum").length;

  function playSound(soundFile) {
    var audio = new Audio(soundFile);
    audio.play();
  }

  document.addEventListener("keydown", function (event) {
    var keyPressed = event.key.toLowerCase();
    var soundFile;

    switch (keyPressed) {
      case "w":
        soundFile = 'sounds/tom-1.mp3';
        break;
      case "a":
        soundFile = 'sounds/tom-2.mp3';
        break;
      case "s":
        soundFile = 'sounds/tom-3.mp3';
        break;
      case "d":
        soundFile = 'sounds/tom-4.mp3';
        break;
      case "j":
        soundFile = 'sounds/crash.mp3';
        break;
      case "k":
        soundFile = 'sounds/kick-bass.mp3';
        break;
      case "l":
        soundFile = 'sounds/snare.mp3';
        break;
      default:
        return;
    }

    playSound(soundFile);
  });
});
