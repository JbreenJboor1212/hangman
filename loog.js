let letters = "abcdefghijklmnopqrstuvwxyz";

let arrayLetters = Array.from(letters);

let letterContainer = document.querySelector(".letters");

arrayLetters.forEach((letter) => {
  let span = document.createElement("span");

  let textLetter = document.createTextNode(letter);

  span.appendChild(textLetter);

  span.className = "letter-Box";

  letterContainer.appendChild(span);
});

const words = {
  programming: [
    "php",
    "javascript",
    "go",
    "scala",
    "fortran",
    "r",
    "mysql",
    "python",
  ],
  movies: [
    "Prestige",
    "Inception",
    "Parasite",
    "Interstellar",
    "Whiplash",
    "Memento",
    "Coco",
    "Up",
  ],
  people: [
    "Albert Einstein",
    "Hitchcock",
    "Alexander",
    "Cleopatra",
    "Mahatma Ghandi",
  ],
  countries: [
    "Syria",
    "Palestine",
    "Ksa",
    "Yemen",
    "Egypt",
    "Qatar",
    "Bahrain",
  ],
};

let allKeys = Object.keys(words);

let randomPropNumber = Math.floor(Math.random() * allKeys.length);

let randomPropName = allKeys[randomPropNumber];

let randomPropValue = words[randomPropName];

let randomValueNumber = Math.floor(Math.random() * randomPropValue.length);

let randomValueValue = randomPropValue[randomValueNumber];

document
  .querySelector(".game-info .category span")
  .appendChild(document.createTextNode(randomPropName));

let lettersGuess = document.querySelector(".letters-guess");

let letterAndSpace = Array.from(randomValueValue);

letterAndSpace.forEach((letter) => {
  let spanLetter = document.createElement("span");

  if (letter === "") {
    spanLetter.className = "has-space";
  }

  lettersGuess.appendChild(spanLetter);
});

let spanLetter = document.querySelectorAll(".letters-guess span");

let wrongAttempts = 0;

let theDraw = document.querySelector(".hangman-draw");

document.addEventListener("click", (e) => {
  let theStatues = false;
  if (e.target.className == "letter-Box") {
    e.target.classList.add("clicked");

    let theClickLetter = e.target.innerHTML.toLowerCase();

    let theChosenWord = Array.from(randomValueValue.toLowerCase());

    theChosenWord.forEach((valueLatter, indexLatter) => {
      if (valueLatter == theClickLetter) {
        theStatues = true;

        spanLetter.forEach((span, indexSpan) => {
          if (indexSpan === indexLatter) {
            span.innerHTML = theClickLetter;
          }
        });
      }
    });

    if (theStatues !== true) {
      wrongAttempts++;

      theDraw.classList.add(`wrong-${wrongAttempts}`);

      document.getElementById("fail").play();

      if (wrongAttempts == 8) {
        Swal.fire({
          title: "Custom animation with Animate.css",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });

        letterContainer.classList.add("finished");
      }
    } else {
      document.getElementById("success").play();
    }
  }
});

