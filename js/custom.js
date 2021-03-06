document.addEventListener('DOMContentLoaded', function(){
    const rgbDisplay = document.querySelector('#rgbDisplay');    
    const colorDisplay = document.querySelectorAll('main > .container > button');
    const message = document.querySelector('#message');
    const header = document.querySelector('header');
    const newColors = document.querySelector('#newColors');
    const easyMode = document.querySelector('#easyMode');
    const hardMode = document.querySelector('#hardMode');
    // mode keeps track of how many buttons are in main secction.
    let mode = 6;

    // generates a rbg string.
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

    // function that generates the colors in main section.
    function generateMainColors(){
        for(var i = 0; i < mode; i++){
            colorDisplay[i].style.backgroundColor = rgbColorGenerator();
        }
    }

    // function that picks a color from main colors to be the rgb value in the header.
    function generateSecretColor(){
        rgbDisplay.textContent = colorDisplay[(Math.floor(Math.random() * mode))].style.backgroundColor;
    }
    
    // this function does not need to be called.
    // this function loads once on its own to setup game.
    (function(){
        generateMainColors();
        generateSecretColor();
    })();

    // event handler that responds if user picks the right or wrong color from main colors.
    for(var i = 0; i < mode; i++){
        colorDisplay[i].addEventListener('click', function(){
            console.log(this.style.backgroundColor);
            if(this.style.backgroundColor === rgbDisplay.textContent ){
                console.log("you picked the secret color");
                message.textContent = "Correct!";
                header.style.backgroundColor = this.style.backgroundColor;
                // loop that sets all buttons in main section to be the same as the secret color.
                for(var i = 0; i < mode; i++){
                    colorDisplay[i].style.backgroundColor = this.style.backgroundColor;
                }
            }else{
                message.textContent = "Try again";
                // background color set to match background to look like button is removed.
                this.style.backgroundColor = "#000"
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

    easyMode.addEventListener('click', function(){
        easyMode.classList.toggle('selected');
        hardMode.classList.remove('selected');
        for(var i = 3; i < mode; i++){
            colorDisplay[i].style.display = "none";
        }
        mode = 3;
        reset();
        console.log(colorDisplay);
    });

    hardMode.addEventListener('click', function(){
        easyMode.classList.remove('selected');
        hardMode.classList.toggle('selected');
        mode = 6;
        for(var i = 3; i < mode; i++){
            colorDisplay[i].style.display = "block";
        }
        reset();
        console.log(colorDisplay);
    })
});

// easymode