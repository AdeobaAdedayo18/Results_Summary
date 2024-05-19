let valueDisplays = document.querySelectorAll(".num");
let interval =  3000;
let specialDisplays = document.querySelector(".numb")

 valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-value"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function(){
        startValue += 1;
        valueDisplay.textContent = startValue;
        if(startValue === endValue) {
            clearInterval(counter);
        }
    }, duration);
    
 } );

 function work(specialDisplays) {
    let startValue = 0;
    let endValue = parseInt(specialDisplays.getAttribute("data-value"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function(){
        startValue += 1;
        specialDisplays.textContent = startValue;
        if(startValue === endValue) {
            clearInterval(counter);
            setTimeout(() => {
                specialDisplays.classList.add('bounce')
                console.log("Bounce is working");
              }, 1);
        }
    }, duration);
    
    
 } ;
//  specialDisplays.classList.add('.bounce')
//  console.log("Bounce is working");

work(specialDisplays);




//  bingo();   

//  function bingo(endValue) {
//     const special = document.querySelector(".total-score .digit .num.special");
//     const now = parseInt(special.textContent);
//     console.log("Current value:", now);
    
//     if (now === endValue) {
//       special.classList.add("bounce");
//       console.log("Bounce class added.");
//     }
// }