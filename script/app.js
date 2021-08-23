const hexCodes = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
const btn = document.querySelector("#btn");
const colorName = document.querySelector(".color");

btn.addEventListener('click', function() {
    //generate Hex color
    let hexColor = '#';

    for(let i = 0; i < 6; i++){
        let randomNum = Math.floor(Math.random() * hexCodes.length);
        hexColor += hexCodes[randomNum];
    }

    colorName.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
})
