// Single Line Comment
/*

Multiline comment

*/

// alert("Warning! Will Robinson... Warning!");

// confirm("Do you like pokemon?");

// prompt("What type of pokemon do you like?");

Game();

function Game(){
    
    alert("The Legend of Brave Royalties!");
    
    var playerName = prompt("What is your name?");
    
    alert("Welcome to the land of Narkia, "+ playerName +".");
    
    Castle_Dungeon();
    
    function Castle_Dungeon(){
        var dungeon = prompt("You wake up in a pitch black place... The ground is wet and you can a hear a faint dripping sound from somewhere nearby. After getting up and wandering around for a bit you discover that you are in an underground, circular prison cell. There is a door on the left side of the space, that is the only exit. Probably wasnt the best idea to call the queen ugly and fat in front of Palace guards at that Tavern. \n -Try the door \n -Lay down and wait for a guard or something \n -Search floor to hopefully find something useful");
    
        if(dungeon == "try door" || dungeon == "door"){
            
            var dungeonDoor = confirm("You check the door... It's locked. \n Go back?");
            
            Castle_Dungeon();
        }
        else if(dungeon == "lay down and wait"|| dungeon == "wait"){
            
            var dungeonWait = confirm("You wait but no one comes for you.");
            
            Castle_Dungeon();
        }
        else if(dungeon == "search floor"|| dungeon == "search"){
            
            var dungeonSearch = confirm("You Vigourously search the dungeon floor... You found a key!! You try the key on the door and it unlocks. \n Do you continue?");
            
            if(dungeonSearch == true){
                 Dungeon_Opening();
            }
            else{
                alert("To bad! You have no choice in the matter.");
                
                Dungeon_Opening();
            }
            
           
        }
       else{
        alert("I dont understand "+ dungeon);
        Castle_Dungeon();
        }
    }
    
    Dungeon_Opening();
    
    function Dungeon_Opening(){
        var opening = prompt("In the small opening chamber outside of your cell it is barely illuminated by a small, barred window to your right that is about 10 feet above your head. To your left you see a large retangular table with a lantern, small black bag, and knife on it. \n -Investigate window \n -Go to table");
        
        if(opening == "go to table"||opening == "table"){
            
            var openingTable = prompt("")
        }
    }
}