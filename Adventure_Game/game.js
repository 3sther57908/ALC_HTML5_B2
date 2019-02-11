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

    //Javascript Object for an inventory
    var inventory = {
        coins:5,
        Lunch:0,
        sword:0,
        knife:0,
        lantern:0,
        BadLuck:0,
        Dog:0,
        flagpole:0,
    }

Game();

function Game(){
    
    var enemynames = ["Taco Monster", "Bruce Lee", "Bugs Bunny"];
    
    alert("The Legend of Brave Royalties!");
    
    var playerName = prompt("What is your name, warrior?");
    
    alert("Welcome to the land of Narkia, "+ playerName +".");
    
    //castle dungeon overall
    Castle_Dungeon();
    
    function Castle_Dungeon(){
        var dungeon = prompt("You wake up in a pitch black place... The ground is wet and you can a hear a faint dripping sound from somewhere nearby. After getting up and wandering around for a bit you discover that you are in an underground, circular prison cell. There is a door on the left side of the space, that is the only exit. Probably wasnt the best idea to call the queen ugly and fat in front of Palace guards at that Tavern. \n -Try the door \n -Lay down and wait for a guard or something \n -Search floor to hopefully find something useful").toLowerCase();
    
        //dungeon door
        if(dungeon == "try door" || dungeon == "door"){
            
            var dungeonDoor = confirm("You check the door... It's locked. \n Go back?").toLowerCase();
            
            Castle_Dungeon();
        }
        //dungeon wait
        else if(dungeon == "lay down and wait"|| dungeon == "wait"){
            
            var dungeonWait = confirm("You wait but no one comes for you.");
            
            Castle_Dungeon();
        }
        //dungeon search
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
                var openingTableALL = confirm("Are you sure?");
                
                if(openingTableALL == true){
                    alert("You have taken everything on the table but you have been cursed with some bad luck because you stole more than you needed.  Thieves honor.");
                    (inventory.knife ++);
                    (inventory.lunch ++);
                    (inventory.lantern ++);
                    (inventory.BadLuck ++);
                    
                }
                else{
                    alert("Ok.");
                    
                    Openingtable();
                }
                
            }
        //dungeon table take lantern
        else if(openingTable == "take lantern" || openingTable == "lantern"){
            var openingTableLantern = confirm("Are you sure?");
            
            if(openingTableLantern == true){
                confirm("You took the lantern and headed back to the middle of the open room.  Do you wish to turn on the lantern and find a way to continue forward?");
                (inventory.lantern ++);   
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
            case"investigate" || "window" || "investigate window":
                alert("There is still nothing new.");
                Dungeon_Opening2();
                break;
            case"risk the dark" || "risk" || "dark":
                alert(enemynames[1]+" ate your soul.  Game over.");
                break;               
            
        }
    }
}