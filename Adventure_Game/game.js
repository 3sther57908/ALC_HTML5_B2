// Single Line Comment
/*

Multiline comment

*/

// alert("Warning! Will Robinson... Warning!");

// confirm("Do you like pokemon?");

// prompt("What type of pokemon do you like?");

Game();

function Game(){
    
    alert("Land of Brave Princesses and Cowardly Knights!");
    
    var playerName = prompt("What is your name?");
    
    alert("Welcome to the land of Narkia "+ playerName);
    
    Castle_Dungeon();
    
    function Castle_Dungeon(){
        var dungeon = prompt("You wake up in a pitch black place... The ground is wet and you can a hear a faint dripping sound from somewhere nearby. After getting up and wandering around for a bit you discover that you are in an underground, circular prison cell. There is a door on the left side of the space, that is the only exit. Probably wasnt the best idea to call the queen ugly and fat in front of Palace guards at that Tavern. \n -Try the door \n -Lay down and wait for a guard or something \n -Search floor to hopefully find something useful");
    
        if(dungeon == "try the door" || dungeon == "door"){
            
            var dungeonDoor = confirm("You check the door... It's locked. \n Go back?");
            
            Castle_Dungeon();
        }
        else if(dungeon == "lay down and wait"|| dungeon || "wait"){
            
            var dungeonWait = confirm("")
        }
    }
}