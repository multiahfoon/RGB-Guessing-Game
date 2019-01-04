document.addEventListener('DOMContentLoaded', function(){
    const rgbDisplay = document.querySelector('#rgbDisplay');    
    const colorDisplay = document.querySelectorAll('main > .container > button');
    const message = document.querySelector('#message');
    const header = document.querySelector('header');
    const newColors = document.querySelector('#newColors');

    function rgbColorGenerator(){
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

    const generateMainColors = (function mainColors(){
        for(var i = 0; i < colorDisplay.length; i++){
            colorDisplay[i].style.backgroundColor = rgbColorGenerator();
        }
        return mainColors;
    })();
    
    const generateSecretColor = (function secretColor(){
        rgbDisplay.textContent = colorDisplay[(Math.floor(Math.random() * 6))].style.backgroundColor;
        return secretColor;
    })();

    for(var i = 0; i < colorDisplay.length; i++){
        colorDisplay[i].addEventListener('click', function(){
            console.log(this.style.backgroundColor);
            if(this.style.backgroundColor === rgbDisplay.textContent ){
                console.log("you picked the secret color");
                message.textContent = "Correct!";
                header.style.backgroundColor = this.style.backgroundColor;
            }else{
                message.textContent = "Try again";
            }
        });
    }
    
    newColors.addEventListener('click', function(){
        console.log("button working!");
        generateMainColors();
        generateSecretColor();
        header.style.backgroundColor = "steelblue";
        message.textContent = "";
    });
});

