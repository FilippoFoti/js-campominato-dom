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
        // Creo la griglia al click del tasto Play
        // playBtn.addEventListener('click', gridEasy);

        // Genero la griglia e caselle (100)
        function gridEasy() {
            gridBox.innerHTML = '';
            for (i = 1; i <= 100; i++){
                const grid = generateGridItem(i);
                grid.addEventListener("click", colorClick)
                gridBox.append(grid);
            }
        }
        gridEasy()

        function generateGridItem(text) {
            const newSquare = document.createElement("div");
            newSquare.classList.add("grid-item");
            newSquare.classList.add("easy")
            newSquare.innerHTML = `<span>${text}</span>`;
            return newSquare;
        }
    } else if (userChoiceInput === "medium") {
        // Creo la griglia al click del tasto Play
        // playBtn.addEventListener('click', gridMedium);

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
    } else if (userChoiceInput === "hard") {
         // Creo la griglia al click del tasto Play
        //  playBtn.addEventListener('click', gridHard);

        // Genero la griglia e caselle (100)
        function gridHard() {
            gridBox.innerHTML = '';
            for (i = 1; i <= 49; i++){
                const grid = generateGridItem(i);
                grid.addEventListener("click", colorClick)
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
    }

    // Ripulisco i campi di input
    userChoice.value = "";
});

// La casella si colora al click
function colorClick() {
    const clickedNumber = parseInt(this.querySelector("span").textContent);
    this.classList.toggle("blue");
    console.log(clickedNumber);
}