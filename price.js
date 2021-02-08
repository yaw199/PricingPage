// SELECTORS//

const amount = document.querySelector(".amount");
const checkBox = document.querySelector(".check-btn");
const rangeBar = document.querySelector("#range-btn");
const viewsDisplay = document.querySelector(".views");
const discountDisplay = document.querySelector(".discount");


// Global Variable//

let moneyArrow = [8,12,16,24,36]
let views = ["10K PAGEVIEWS","50K PAGEVIEWS","100K PAGEVIEWS","500K PAGEVIEWS","1M PAGEVIEWS"]


// SCREEN RESIZE//

window.addEventListener("resize", function(){
  if (window.screen.width <= 400){
    discountDisplay.innerText = "25%"; 
  }

})

// EVENTLISTENERS//

// Active Page//

document.addEventListener("DOMContentLoaded", function (){
  let moneyInitial = moneyArrow[rangeBar.value];
  let viewInitial = views[rangeBar.value];
  initialDisplay(moneyInitial,viewInitial)
})

// Range Values//
rangeBar.addEventListener("change",function(){
  let money = moneyArrow[rangeBar.value]
  let view = views[rangeBar.value]
  initialDisplay(money,view)
})

//Checbox/Discount//
checkBox.addEventListener("change",()=> {
  let  numCurrent = moneyArrow[rangeBar.value]
   displayDiscount(numCurrent);
   
})

// Functions//
// Discount function //
 
 function displayDiscount(money){
  let discount = parseFloat(money)*0.75;

   if (checkBox.checked === true){
     amount.innerText = discount.toFixed(2)
   }
   else{
     amount.innerText= money.toFixed(2);
   }
 } 

//  Display function//
     
   function initialDisplay(money,view){
     viewsDisplay.innerText = view
     amount.innerText = money.toFixed(2);

   }
  

// RANGE-SLIDER// 
let initial = rangeBar.value *25; //*25 to get the percentages since <input type="range" start from 0 to 4, therefore 0-100%//  
let color1 = "linear-gradient(90deg, hsl(174, 86%, 45%)" + initial + "%,hsl(224, 65%, 95%)" + initial + "%)";
rangeBar.style.background = color1

rangeBar.addEventListener("input", function(){
    let rangeValue = this.value*25;
    let color = "linear-gradient(90deg, hsl(174, 86%, 45%)" + rangeValue + "%,hsl(224, 65%, 95%)" + rangeValue + "%)";
    rangeBar.style.background = color;
    
})

