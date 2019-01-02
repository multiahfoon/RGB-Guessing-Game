document.addEventListener('DOMContentLoaded', function(){

    // need a way to generate rgb numbers
    const rgbColorGenerator = function(){
        const generateNum = [];
        let rgbString;
        for (var i = 1; i <= 3; i++){
            let randomNum = Math.floor(Math.random() * 1000 - 1);
            generateNum.push(randomNum);
            rgbString = `rgb(${generateNum})`;
        }
        console.log(rgbString);
        return rgbString;
    };
    rgbColorGenerator();
    
    /* checking to see if rgbColorGenerator is working properly*/ 
    const body = document.querySelector('body');
    const main = document.querySelector('main');
    main.addEventListener('click', function(){
        document.body.style.backgroundColor = rgbColorGenerator();
    });
});
