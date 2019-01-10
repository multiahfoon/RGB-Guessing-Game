document.addEventListener('DOMContentLoaded', function(){
    const rgbDisplay = document.querySelector('#rgbDisplay');    
    const colorDisplay = document.querySelectorAll('main > .container > button');
    const message = document.querySelector('#message');
    const header = document.querySelector('header');
    const newColors = document.querySelector('#newColors');
    const easyMode = document.querySelector('#easyMode');

    // generates a rbg string
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

    // immediate executing function that generates the main colors to pick from
    const generateMainColors = (function mainColors(){
        for(var i = 0; i < colorDisplay.length; i++){
            colorDisplay[i].style.backgroundColor = rgbColorGenerator();
        }
        return mainColors;
    })();
    
    // immediate executing function that picks a color from main colors to be the rgb value in the header
    const generateSecretColor = (function secretColor(){
        rgbDisplay.textContent = colorDisplay[(Math.floor(Math.random() * colorDisplay.length))].style.backgroundColor;
        return secretColor;
    })();

    // event handler that responds if user picks the right or wrong color from main colors
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

    
    function reset(){
        console.log("button working!");
        generateMainColors();
        generateSecretColor();
        header.style.backgroundColor = "steelblue";
        message.textContent = "";
    }
    
    newColors.addEventListener('click', function(){
        reset();
    });

    // easy mode needs work 
    // all through there are only 3 colors to pick from the arrary still holds 6 colors.
    easyMode.addEventListener('click', function(){
        for(var i = 3; i < colorDisplay.length; i++){
            colorDisplay[i].remove();
        }
        reset();
        console.log(colorDisplay);
    });

});

// easymode