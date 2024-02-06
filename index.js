


//detecting button press
var NoOfDrumButtons= document.querySelectorAll(".drum").length;

for(var i =0 ; i < NoOfDrumButtons;i++){
    //adding voice to the button which got clicked ,hence it takes the function as paramter which basically tells which button got hit 
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){

        //this.style.color="white";
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        animation(buttonInnerHTML);
        // var smthn = new Audio("so")
       
    });
}

//detecting keyboard press

document.addEventListener("keydown",function(event){
    makeSound(event.key);
    animation(event.key);
})

function makeSound(key)
{
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        default:
            console.log(buttonInnerHTML);
}
}

//animation when key is pressed

function animation(currentKey){
    //.k retreive the class  of the key "k" which is drum 
    var activeButton = document.querySelector("."+currentKey);

// appling shadow
    activeButton.classList.add("pressed");
// removing shadow after some time of pressing
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}
