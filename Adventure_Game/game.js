// Single Line Comment
/*

Multiline comment

*/

// alert("Warning! Will Robinson... Warning!");

// confirm("Do you like pokemon?");

// prompt("What type of pokemon do you like?");


/*switch(insideCastle){
 case "upstairs":
      var upstairs = prompt("You walk a long flight of stairs to top floor of the castle.");
  break;
  case "downstairs":
      alert("you go downstairs");
      
  break;
}
*/

/*
for (i =1; i <= buyArrows; i++){
    inventory.arrows++;
    inventory.coins -= 10;
}
*/


//Javascript Object for an inventory
    var inventory = {
        Lunch:0,
        knife:0,
        lantern:0,
        BadLuck:0,
        Dog:0,
        flagpole:0, 
    }
    
//quit game repeat function
var quitGame = function (){
        alert("Game Over, "+playerName+"!");
    quitGame();
    }

//Congradulations!!!
var winGame = function (){
        alert("Congradulations!");
    winGame();
}

//Float
var you = 90.9;

Game();

function Game(){
    
    var enemynames = ["Taco Monster", "Bruce Lee", "Bugs Bunny"];
    
    alert("The Legend of Brave Confusion!");
    
    var playerName = prompt("What is your name, warrior?");
    
    while(!confirm("Are you sure you want "+playerName+" as your name?")){
        playerName = prompt("What do you want your name to be?");
    }
    
    alert("Welcome to the land of Narkia, "+ playerName +".  You have a "+String(you)+" percent chance of dying in this game.... good luck.");
    
    
    
//castle dungeon overall
    Castle_Dungeon();
    
    function Castle_Dungeon(){
        var dungeon = prompt("You wake up in a pitch black place... The ground is wet and you can a hear a faint dripping sound from somewhere nearby. After getting up and wandering around for a bit you discover that you are in an underground, circular prison cell. There is a door on the left side of the space, that is the only exit. Probably wasnt the best idea to call the queen ugly and fat in front of Palace guards at that Tavern. \n -Try the door \n -Lay down and wait for a guard or something \n -Search floor to hopefully find something useful").toLowerCase();
    
//dungeon door
        if(dungeon == "try the door" || dungeon == "door" || dungeon == "try door"){
            
            var dungeonDoor = alert("You check the door... It's locked.").toLowerCase();
            Castle_Dungeon();
        }
//dungeon wait
        else if(dungeon == "lay down and wait"|| dungeon == "wait"){
            
            var dungeonWait = confirm("You wait but no one comes for you.");
            
            Castle_Dungeon();
        }
//dungeon search
        else if(dungeon == "search floor"|| dungeon == "search" || dungeon == "search floor to hopefully find something useful"){
            
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
        alert("I dont understand '"+dungeon+"'.");
        Castle_Dungeon();
        }
    }
//dungeon opening overall
    Dungeon_Opening();
    
    function Dungeon_Opening(){
        var opening = prompt("In the small opening chamber outside of your cell it is barely illuminated by a small, barred window to your right that is about 10 feet above your head.  Though the room is illuminated it is too dark for it to be wise to proceed forward. To your left you see a large retangular table with something on it. \n -Investigate window \n -Go to table").toLowerCase();
        
//dungeon table overall
        if(opening == "go to table"||opening == "table"){
           
    Openingtable();
            
    function Openingtable(){
        var openingTable = prompt("On the table you find a lantern, small black bag with lunch in it, and knife. \n -take everything \n -ignore \n -take lantern").toLowerCase();
            
//dungeon table take everything
            if(openingTable == "take everything" || openingTable == "everything"){
                Openingtakeally();
            }

//Are you sure TakeAll??    
    Openingtakeally();
        
    function Openingtakeally(){            
        var openingTableALL = confirm("Are you sure?");
                
                if(openingTableALL == true){
                    alert("You have taken everything on the table but you have been cursed with some bad luck because you stole more than you needed.  Thieves honor.");
                    (inventory.knife ++);
                    (inventory.lunch ++);
                    (inventory.lantern ++);
                    (inventory.BadLuck ++);
                    
                    Opening_takeall();
                }
                else{
                    alert("Ok.");
                    
                    Openingtable();
                }
    }
            
//dungeon table take lantern
        if(openingTable == "take lantern" || openingTable == "lantern"){
            var openingTableLantern = confirm("Are you sure?");
            
            if(openingTableLantern == true){
                confirm("You took the lantern and headed back to the middle of the open room.  Do you wish to turn on the lantern and find a way to continue forward?");
                (inventory.lantern ++); 
                
                if(openingLantern == true){
                    Opening_lanternonly();
                }
                else{
                    alert("Smart or foolish? Up to you");
                    Openingtable();
                }
            }
            else{
                alert("Ok.");
                
                Openingtable();
                
                }
            }
//dungeon table ignore
        else if(openingTable == "ignore"){
            var openingTableignore = alert("Alright.")
            
            Dungeon_Opening2();
            
            }
        }
    }
//dungeon opening investigate
        else if(opening == "investigate window" || opening == "window" || opening == "investigate"){
            
            var openingWindow = alert("There is nothing new that you havent already observed.");
            
            Dungeon_Opening();
        }
        
        else{
            alert("I dont know what '"+opening+"' is.");
            Dungeon_Opening();
        }
    }
//Dungeon Opening Overall 2.0
    Dungeon_Opening2();
    
    function Dungeon_Opening2(){
        var opening2 = prompt("You have moved back to the center of the open room. Do you wish to wander around in the dark and hope "+enemynames[1]+" doesn't come to eat you? \n -Risk the dark \n -Go back to the table \n -Investigate window").toLowerCase();
    
        switch(opening2){
            case"investigate": case"window": case"investigate window":
                alert("There is still nothing new.");
                Dungeon_Opening2();
                break;
            case"risk the dark": case"risk": case"dark":
                alert(enemynames[1]+" ate your soul.");
                quitGame();
                break;              
            case"go back": case"go back to table": case"table":
                Openingtable();
                break;
                
            default:
                alert("Um, I dont know what " +opening2+" is")
        }
    }
//Path you take with only lantern
    Opening_lanternonly();
    
    function Opening_lanternonly(){
        var openingLantern = confirm("Thanks to the power of light you wont be eaten by "+enemynames[1]+"! While walking down a long empty corridor you come upon some stairs. Do you go up?");
        
        if(lanternonly == true){
            Staircase();
        }
        
        else{
            alert("Well I guess we are going back then.");
            Opening_again();
        }
    }
//Staircase out
    Staircase();
    
    function Staircase(){
        var stairCase = prompt("You went up the staircase and made your way out.  Congradulations! You've made it out into the open fresh air without being eaten by a scary monster.... but now what?  You've escaped but now you cant remember your original reason for coming to this country.  \n -Sit and ponder \n -Go North \n -Go South").toLowerCase();
        
        if(stairCase == "sit and ponder" || stairCase == "sit" ||stairCase == "ponder"){
            alert("...")
            alert("well that was pointless.");
            Staircase();
        }
        else if(stairCase == "go north" || stairCase == "north"){
            alert("You make your way north and to your surprise you run into a city ruled by angels.  It is beautiful and bright and positively covered in the color white.  The angels spot you approaching and come to investigate.");
            
            if(inventory.BadLuck > 0){
                alert("The Angels gaze at you for a moment. Seeing that you have evil badluck, they give you a pitying glare and the next second you find yourself impaled with a spear. You died.");
                quitGame();
            }
            else{
                alert("The Angels deem that you are an amazingly good person, pick you up and take you to the great heaven above!");
                winGame();
            }
        }
        else if(stairCase == "go south" || stairCase == "south"){
            alert("You make your way south and to a very unpleasant thought, you discover a city ruled by demons!  The city is covered in an intimidating black and red colors.  The demons spot you approaching and come to investigate.");
            
            if(inventory.BadLuck > 0){
                alert("The demons see you and observe that you are a horrible person, a thief!  They celebrate your existence and take you to the entrance to hell so that you may party with them for eternity!");
                Entrance_hell();
            }
            else{
                alert("The demons sense that you are a good person and they dont like it!  They pick you up with their strong arms and crucify you. You died.");
                quitGame();
            }
        }
         else{
            alert("I dont understand what "+stairCase+" means.");
            Staircase();
            }
    }
//Opening Again
    Opening_again();
    
    function Opening_again(){
        var openingAgain = prompt("*sigh* And here we are again... This STUPID. FREAKIN. ROOM!  What is wrong with you?! What are you even going to do in here now huh?!  Gonna Go back to that STUPID table and take some more STUPID stuff or are you actually going to move forward in this STUPID game!!! \n -Go to table and take everything on it \n -Move back to staircase \n -Just lay down and die").toLowerCase();
        
        if(openingAgain == "go to table and take everything on it" || "go to table" || "take everything on table" || "table"){
            
            Openingtakeally();
        }
        else if(openingAgain == "move back to staircase" || openingAgain == "staircase" || openingAgain == "go back"){
        
            Staircase();
    }
        
        else if(openingAgain == "just lay down and die" || openingAgain == "lay down and die" || openingAgain == "just die" || openingAgain == "die"){
            alert("Well I guess if its too hard then...");
            quitGame();
        }
        else{
            alert("I dont know what "+openingAgain+" is.");
            Opening_again();
        }
        
    }
//Opening After taking Everything off of the table
    Opening_takeall();
    
    function Opening_takeall(){
        var openingTakeall = prompt("You have gone back to the center of the room, would you like to turn on the lantern and continue forward? Or would you like to risk the dark and hope certain evil creatures dont come to kill you? \n - Light lantern and continue \n - risk the dark").toLowerCase();
        
        if(openingTakeall == "light lantern and continue" || openingTakeall == "light lantern" || openingTakeall == "lantern"){
            
            var takeallLantern = confirm("You light the lantern and make your way down a narrow corridor that you didnt realize was there till then. Congrats. You avoided being eaten by the infamous "+enemynames[1]+".  While traveling down the corridor you come across a staircase. would you like to go up?");
            
            if(takeallLantern == true){
                Staircase();
            }
            else{
                alert("Well where else are you going to go? You literally have only one way to go in the small dark dungeon and that is up! \n *You gave up and ended up going up the stiarcase anyway*");
                Staircase();
            }
        }
        else if(openingTakeall == "risk the dark" || openingTakeall == "the dark" || openingTakeall == "dark"){
            alert("You decide to brave the dark for some weird reason and end up being eaten by "+enemynames[2]+".  You have died.");
            quitGame();
        }
        else{
            alert("I dont understand "+takeallLantern+".");
            Opening_takeall();
        }
    }
    
    //The Entrance to Hell with bugs bunny
    Entrance_hell();
    
    function Entrance_hell(){
        var entranceHell = prompt("At the entrance you meet a strange create.... its "+enemynames[2]+"!  He is very huge, very fat and very hungry.  How will you get him to move out of the way so that you can get your happy/unhappy ending? \n - Push him \n - Feed him your lunch \n - Give up").toLowerCase();
        
        if(entranceHell == "push him" || entranceHell == "push"){
            alert("You and the demons try pushing him but he is just toooooooo fat. Luckily "+enemynames[2]+" doesnt seem to get angry about it.");
            Entrance_hell();
        }
        
        else if(entranceHell == "feed him your lunch" || entranceHell == "feed him" || entranceHell == "lunch" || entranceHell == "feed him lunch"){
            alert("You lead him away from the door with the lure of your delicious lunch *sad you wont be able to eat it* He leaves the doorway.  You give him your lunch.  You enter the existence called hell where the demons love you and party for eternity.");
            winGame();
        }
        
        else if(entranceHell == "give up"){
            alert("You suck");
            quitGame();
        }
    }
}