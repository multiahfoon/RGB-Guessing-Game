document.addEventListener('DOMContentLoaded', function(){
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

    const rgbDisplay = document.querySelector('#rgbDisplay');    
    const colorDisplay = document.querySelectorAll('main > .container > button');

    for(var i = 0; i < colorDisplay.length; i++){
        colorDisplay[i].style.backgroundColor = rgbColorGenerator();
    }

    const secretColor = rgbDisplay.innerHTML = colorDisplay[(Math.floor(Math.random() * 6) + 1)].style.backgroundColor;
    const message = document.querySelector('#message');
    const header = document.querySelector('header');
    for(var i = 0; i < colorDisplay.length; i++){
        colorDisplay[i].addEventListener('click', function(){
            console.log(this.style.backgroundColor);
            if(this.style.backgroundColor === secretColor){
                console.log("you picked the secret color");
                message.textContent = "Correct!";
                header.style.backgroundColor = this.style.backgroundColor;
            }else{
                message.textContent = "Try again";
            }
        });
    }
});
