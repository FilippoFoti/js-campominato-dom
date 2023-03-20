// Dichiaro le varie difficoltà e la quantità di casellle
const boxEasy = 100;
const boxMedium = 81;
const boxHard = 49;

const playBtn = document.querySelector('.play-btn');
playBtn.addEventListener("click", function() {

    const gridBox = document.querySelector(".grid");

    // Prendo il valore del input.
    const userChoice = document.getElementById("difficulty");
    const userChoiceInput = userChoice.value;
    console.log(userChoice)

    if (userChoiceInput === "easy") {
        // NUMERO DELLE BOMBE
        const bombNumber = 16;
   
        // GENERO LE BOMBE
        const bombs = generateBombs(boxEasy, bombNumber);
        console.log(bombs);

        // Genero la griglia e caselle (100)
        function gridEasy() {
            gridBox.innerHTML = '';
            for (i = 1; i <= 100; i++) {
                const grid = generateGridItem(i);
                grid.addEventListener("click", colorClick)
                gridBox.append(grid);
            }
        }
        gridEasy()

        function generateGridItem(text) {
            const newSquare = document.createElement("div");
            newSquare.classList.add("grid-item");
            newSquare.classList.add("easy");
            newSquare.innerHTML = `<span>${text}</span>`;
            return newSquare;
        }

        // La casella si colora al click
        let score = 0;
        const scoreArray = [];
        const maxScore = (boxEasy - 16)
        console.log(maxScore);

        function colorClick() {
            const clickedNumber = parseInt(this.querySelector("span").textContent);
            if (!bombs.includes(clickedNumber)) {
                this.classList.add("blue");
                this.removeEventListener("click", colorClick);
                scoreArray.push();
                score++;
                if (score === maxScore)
                alert("hai vinto");
            } else {
                this.classList.add("red");
                alert("hai perso, il tuo punteggio è " + score);
                this.removeEventListener("click", colorClick);
                
            }
            console.log(clickedNumber);
        }

    } else if (userChoiceInput === "medium") {
        // NUMERO DELLE BOMBE
        const bombNumber = 16;
   
        // GENERO LE BOMBE
        const bombs = generateBombs(boxMedium, bombNumber);
        console.log(bombs);

        // Genero la griglia e caselle (100)
        function gridMedium() {
            gridBox.innerHTML = '';
            for (i = 1; i <= 81; i++){
                const grid = generateGridItem(i);
                grid.addEventListener("click", colorClick)
                gridBox.append(grid);
            }
        }
        gridMedium()
        

        function generateGridItem(text) {
            const newSquare = document.createElement("div");
            newSquare.classList.add("grid-item");
            newSquare.classList.add("medium")
            newSquare.innerHTML = `<span>${text}</span>`;
            return newSquare;
        }

        // La casella si colora al click
        let score = 0;
        const scoreArray = [];
        const maxScore = (boxMedium - 16)
        console.log(maxScore);

        function colorClick() {
            const clickedNumber = parseInt(this.querySelector("span").textContent);
            if (!bombs.includes(clickedNumber)) {
                this.classList.add("blue");
                this.removeEventListener("click", colorClick);
                scoreArray.push();
                score++;
                document.getElementById("main-score").innerHTML = score;
                if (score === maxScore)
                alert("hai vinto");
            } else {
                this.classList.add("red");
                alert("hai perso, il tuo punteggio è " + score);
                this.removeEventListener("click", colorClick);
            } 
            console.log(clickedNumber);
        }

    } else if (userChoiceInput === "hard") {
        // NUMERO DELLE BOMBE
        const bombNumber = 16;
   
        // GENERO LE BOMBE
        const bombs = generateBombs(boxHard, bombNumber);
        console.log(bombs);

        // Genero la griglia e caselle (100)
        function gridHard() {
            gridBox.innerHTML = '';
            for (i = 1; i <= 49; i++){
                const grid = generateGridItem(i);
                grid.addEventListener("click", colorClick);
                gridBox.append(grid);
            }
        }
        gridHard()

        function generateGridItem(text) {
            const newSquare = document.createElement("div");
            newSquare.classList.add("grid-item");
            newSquare.classList.add("hard")
            newSquare.innerHTML = `<span>${text}</span>`;
            return newSquare;
        }

        // La casella si colora al click
        let score = 0;
        const scoreArray = [];
        const maxScore = (boxHard - 16)
        console.log(maxScore);

        function colorClick() {
            const clickedNumber = parseInt(this.querySelector("span").textContent);
            if (!bombs.includes(clickedNumber)) {
                this.classList.add("blue");
                this.removeEventListener("click", colorClick);
                scoreArray.push();
                score++;
                if (score === maxScore)
                alert("hai vinto");
            } else {
                this.classList.add("red");
                alert("hai perso, il tuo punteggio è " + score);
                this.removeEventListener("click", colorClick);
            }
            console.log(clickedNumber);
        }

    }

    // Ripulisco i campi di input
    userChoice.value = "";
});

// BOMBE //////////////////////////////////////////

// GENERO LE BOMBE
function generateBombs(maxNumber, numbersQuantity) {
    const numbers = [];
    while (numbers.length < numbersQuantity) {
        const rndNumber = getRndNumber(1, maxNumber)
        if (!numbers.includes(rndNumber)) {
            numbers.push(rndNumber)
        }
    }
    return numbers;
}


function getRndNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
