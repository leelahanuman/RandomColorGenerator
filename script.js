let bgColorsArray = ["#e75d7c", "#b16cef", "#53cca4", "#efc84d", "#628ef0", "#184b73", "#883e7f", "#ed048b"];
let containerElement = document.getElementById("bgContainer");
let buttonElement = document.getElementById("button");


buttonElement.onclick = function() {
    let numberOfBgColors = bgColorsArray.length;
    let randomNumber = Math.ceil(Math.random() * numberOfBgColors);
    if (randomNumber === numberOfBgColors) {
        randomNumber = numberOfBgColors - 1;
    }
    containerElement.style.backgroundColor = bgColorsArray[randomNumber];
}
