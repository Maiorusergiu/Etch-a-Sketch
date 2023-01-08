//un div 16X16 square divs
const container = document.querySelector('.container');
const title = document.createElement('h1');
const resetButton = document.createElement('button');
const squaresContainer = document.createElement('div');
const mainContainer = document.createElement('div');
const chooseColorInput = document.createElement('input');
const chooseCustomColorButton = document.createElement('button');
const chooseColorDiv = document.createElement('div');

const generateColorButton = document.createElement('button');
const eraseButton = document.createElement('button');
let color;


const choose64x64Button = document.createElement('button');
const choose32x32Button = document.createElement('button');
const choose16x16Button = document.createElement('button');
chooseColorInput.style.cursor = "pointer";
chooseColorInput.type = "color";
chooseColorInput.value = "#FFFFFF"
chooseCustomColorButton.className = "chooseColorText";
chooseColorDiv.className = "chooseColorDiv";


title.textContent = "Etch-a-Sketch(Draw something!)"
title.className = "title";
container.appendChild(title);
container.appendChild(mainContainer);
container.appendChild(squaresContainer);
container.appendChild(chooseColorInput);
container.appendChild(generateColorButton);
container.appendChild(eraseButton);
container.appendChild(choose64x64Button);
container.appendChild(choose32x32Button);
container.appendChild(choose16x16Button);

choose64x64Button.innerText = "Small 64x64";
choose64x64Button.className="64x64";
choose32x32Button.innerText = "Medium 32x32";
choose32x32Button.className="32x32";
choose16x16Button.innerText = "Big 16x16";
choose16x16Button.className="16x16";

resetButton.innerText = "Clear";
resetButton.className="reset";

generateColorButton.innerText = "Generate Color";
generateColorButton.className="generateColorButton";

chooseColorDiv.appendChild(chooseCustomColorButton);
chooseColorDiv.appendChild(chooseColorInput);

eraseButton.innerText = "Eraser";
eraseButton.className = "eraseButton";
chooseCustomColorButton.innerText = "Click to choose the selected color: "
chooseCustomColorButton.style.fontSize = "18px";
chooseCustomColorButton.fontWeight = "600";
mainContainer.appendChild(squaresContainer);
mainContainer.appendChild(chooseColorDiv);
mainContainer.appendChild(resetButton);
mainContainer.appendChild(generateColorButton);
mainContainer.appendChild(eraseButton);
mainContainer.className = "mainContainer"
squaresContainer.className="squaresContainer";
function makeRows(rows, cols) {
    
    squaresContainer.style.setProperty('--grid-rows', rows);
    squaresContainer.style.setProperty('--grid-cols', cols);
    for(let i = 0; i<rows * cols;i++){
        let cell = document.createElement('div');
        squaresContainer.appendChild(cell).className = "gridItem";
    }
    generateColor();
    onCustomColor();
    Eraser();
    onMouseDown();
   

}
function onCustomColor() {

    chooseCustomColorButton.addEventListener("click", () => {
        color = chooseColorInput.value;
        color = color.replace("#", "");
    })
}
function generateColor() {
    generateColorButton.addEventListener('click', () => {
    color = Math.floor(Math.random()*16777215).toString(16);
    })
}
function Eraser(){
    eraseButton.addEventListener('click', () => {
        color = "FFFFFF";
    });

}
function onMouseDown() {
 
    squaresContainer.addEventListener("mouseover", function(event){
            event.target.style.backgroundColor = "#" + color;
            reset(event);
        });
}

function reset(event) {
    resetButton.addEventListener('click', () => {
        event.target.style.backgroundColor = "white";
    })
}
choose16x16Button.addEventListener('click', () => {
    makeRows(16, 16);
})
choose32x32Button.addEventListener('click', () => {
    makeRows(32, 32);
})
choose64x64Button.addEventListener('click', () => {
    makeRows(64, 64);
})
makeRows(64, 64);
changePadPixelsActive();
changeColorActive();
function changePadPixelsActive() {
    let changePadPixels = [choose16x16Button, choose32x32Button, choose64x64Button];
    choose64x64Button.className += " activeBoard"
    for (let i = 0; i < changePadPixels.length; i++) {
        changePadPixels[i].addEventListener("click", function() {
        let current = document.getElementsByClassName("activeBoard");
        if (current.length > 0) { 
          current[0].className = current[0].className.replace(" activeBoard", "");
        }
        this.className += " activeBoard";
        });
    }
}
function changeColorActive() {
    let changeColorButtons = [generateColorButton, eraseButton, chooseCustomColorButton];
    for (let i = 0; i < changeColorButtons.length; i++) {
        changeColorButtons[i].addEventListener("click", function() {
        let current = document.getElementsByClassName("activeColor");
        if (current.length > 0) { 
          current[0].className = current[0].className.replace(" activeColor", "");
        }
        this.className += " activeColor";
        });
    }
}






  








