let value = 0;
let increaseBtn = document.querySelector(".increase");
let decreaseBtn = document.querySelector(".decrease");
let resetBtn = document.querySelector('.reset')

let counterValue = document.getElementById("value");
console.log(counterValue)

//Listening for increase
increaseBtn.addEventListener('click' , ()=>{
    console.log("increased clicked")
    value += 1;
    counterValue.textContent = value;
    if(value>0){
        counterValue.style.color = "green";
    }
})

//Listening for Decrease
decreaseBtn.addEventListener('click',()=>{
    console.log("decrease clicked")
    value -= 1;
    counterValue.textContent = value;
    if(value<0){
        counterValue.style.color = "red";
    }
})

//Listening for reset
resetBtn.addEventListener('click',()=>{
    console.log("reset clicked")
    value = 0;
    counterValue.textContent = value;
    counterValue.style.color = "black";
})