var character = document.getElementById("character");
var block = document.getElementById("block");
function jump(){
    if(character.classList != "animate"){
    character.classList.add("animate");
    }
    setTimeout(function(){
        character.classList.remove("animate");
    },500);
}
var checkDead = setInterval(function() {
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>0 && characterTop>=130){
        block.style.animation = "none";
        block.style.display = "none";
       var playAgain = confirm("you lose.");
        if ( playAgain == true) {
            location.reload();
            //replay the game;
        }
    //you press ok execute the game again
    }
}, 10)

//add a replay feature when clicking the ok button
// if you lose press ok button on the alert box to start a new game.