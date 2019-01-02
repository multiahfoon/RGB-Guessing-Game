document.addEventListener('DOMContentLoaded', function(){

    const rgbColorGenerator = function(){
        const generateNum = [];
        let rgbString;
        for (var i = 1; i <= 3; i++){
            let randomNum = Math.floor(Math.random() * 255) + 1;
            generateNum.push(randomNum);
            rgbString = `rgb(${generateNum.join(", ")})`;
        }
        console.log(rgbString);
        return rgbString;
    };

    const rgbDisplay = document.querySelector('#rgbDisplay');    
    const colorDisplay = document.querySelectorAll('main > .container > button');

    for(var i = 0; i < colorDisplay.length; i++){
        colorDisplay[i].style.backgroundColor = rgbColorGenerator();
    }

    const secretColor = rgbDisplay.innerHTML = colorDisplay[(Math.floor(Math.random() * 6))].style.backgroundColor;


});
