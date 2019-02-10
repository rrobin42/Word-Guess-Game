var wins = 0;


//COLLECTION OF NAMES FOR GUESSING GAME
var names = ["cloud", "taru", "barret"];


//RANDOMLY CHOOSE NAME FROM ARRAY
var choiceId = Math.floor(Math.random() * (names.length - 1));
var choice = names[choiceId];

//ARRAY FOR CHOSEN WORD
var placeh = [];
for (i = 0; i < choice.length; i++) {
  placeh.push("_");
}

//VARIABLE FOR USER INPUT
var input;
var x = 0;
var correct = [];
var wrong = [];

//NUMBER OF GUESSES LEFT
var guesses = 20;

//DISPLAY CURRENT WORD PLACEHOLDER ON SCREEN
for (i = 0; i < choice.length; i++) {
  document.getElementById("word").append(placeh[i] + " ");
}

//COMPARE USER INPUT TO LETTERS IN THE CHOSEN WORD

document.addEventListener('keydown', function (event) {

  input = event.key;
  var y = 0;

  for (i = 0; i < choice.length; i++) {

    //IF LETTER IS FOUND IN STRING
    if (input === choice.charAt(i)) {
      y++;
      correct.push(input);

      //MODIFY PLACEHOLDER TO SHOW LETTERS FOUND
      placeh[i] = input.toString();
      document.getElementById("word").innerHTML = "";
      for (i = 0; i < choice.length; i++) {
        document.getElementById("word").append(placeh[i] + " ");
      }
      break;
    }
  }

  //IF LETTER IS NOT FOUND
  if (y === 0) {
    wrong.push(input);
    document.getElementById("letters").innerHTML = wrong.toString();
    guesses--;
    document.getElementById("guess").innerHTML = guesses;
  }

  //END OF IF THERE ARE BLANKS
  //CHECK IF ALL LETTERS HAVE BEEN FOUND
  for (i = 0; i < placeh.length; i++) {
    if (placeh[i] === "_") {
      x++;
      console.log(x);
    }
  }
  //IF THERE ARE NO BLANKS LEFT
  //ADD WINS, RESET EVERYTHING
  if (x === 0) {
    wins++;
    document.getElementById("wins").innerHTML = wins;
    guesses = 20;
    wrong = [];
    correct = [];

    //RANDOMLY CHOOSE NAME FROM ARRAY
    choiceId = Math.floor(Math.random() * (names.length - 1));
    choice = names[choiceId];

    //ARRAY FOR CHOSEN WORD
    placeh = [];
    for (i = 0; i < choice.length; i++) {
      placeh.push("_");
    }

    //RESET DISPLAY CURRENT WORD PLACEHOLDER ON SCREEN
    document.getElementById("word").innerHTML = "";
    for (i = 0; i < choice.length; i++) {
      document.getElementById("word").append(placeh[i] + " ");
      console.log(placeh[i]);
    }

    //RESET DISPLAY FOR GUESSES
    document.getElementById("letters").innerHTML = wrong.toString();
    document.getElementById("guess").innerHTML = guesses;

  }
  x = 0;
});



