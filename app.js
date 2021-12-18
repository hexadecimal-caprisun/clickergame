// variables
const counter = document.querySelector(".click-counter");
const counterBtn = document.querySelector(".funny-button");
const upgradeBtn = document.querySelector(".upgrade-btn");
const loadBtn = document.querySelector(".load-btn");
const saveBtn = document.querySelector(".save-btn");
const saveText = document.querySelector(".saveText");
let counterUpdate = 0
// let upgrade = false

// events
/* proper counter function w/ uprgade functionality
counterBtn.addEventListener('click', function(){
    if(upgrade === false){
       counterUpdate++
       counter.textContent = "click counter = " + counterUpdate; 
    } else if (upgrade === true){
        counterUpdate = counterUpdate + 3
        counter.textContent = "click counter = " + counterUpdate;
    }
});
*/

counterBtn.addEventListener('click', function(){
       counterUpdate++
       counter.textContent = "click counter = " + counterUpdate;
});

upgradeBtn.addEventListener('click', function(){
    if(counterUpdate >= 2000){
    window.location.replace("https://youtu.be/dQw4w9WgXcQ")
    }
});

loadBtn.addEventListener('click', function(){
    JSON.parse(window.localStorage.getItem('count'));
    counterUpdate = JSON.parse(window.localStorage.getItem('count'));
    counter.textContent = "click counter = " + counterUpdate;
});

saveBtn.addEventListener('click', function(){
    saveFunction();
    setTimeout(saveTextReset, 5000);
});

//functions
function saveFunction(){
    window.localStorage.setItem('count', JSON.stringify(counterUpdate));
    saveText.textContent = "saved " + window.localStorage.getItem('count') + " clicks!";
};

function saveTextReset(){
    saveText.textContent = "Progress is saved on click"
}

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
