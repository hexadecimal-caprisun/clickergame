// variables
const counter = document.querySelector(".click-counter");
const counterBtn = document.querySelector(".funny-button");
const upgradeBtn = document.querySelector(".upgrade-btn")
let counterUpdate = 0
let upgrade = false

// event listeners
counterBtn.addEventListener('click', function(){
    if(upgrade === false){
       counterUpdate++
       counter.textContent = "click counter = " + counterUpdate; 
    } else if (upgrade === true){
        counterUpdate = counterUpdate + 3
        counter.textContent = "click counter = " + counterUpdate;
    }
});

upgradeBtn.addEventListener('click', function(){
    if(counterUpdate >= 200){
    window.location.replace("https://youtu.be/dQw4w9WgXcQ")
    }
});

/* Proper Upgrade Functionality
upgradeBtn.addEventListener('click', function(){
    if(counterUpdate >= 200){
        upgrade = true
        counterUpdate = counterUpdate - 200;
        counter.textContent = "click counter = " + counterUpdate;
    } else{
        upgrade = false
    }
}) */