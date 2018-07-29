// Execute this code when the DOM has fully loaded.
$(document).ready(function(){
    // VARIABLE DECLARATION
    //==============================================================================================

    // Creating an object to hold our characters.
    var characters = {
        "Lone Starr": {
            name: "Lone Starr",
            health: 120,
            attack: 8,
            imageUrl: "assets/Images/loneStarr.gif",
            enemyAttackBack: 15
        },
        "Dark Helmet" : {
            name: "Dark Helmet",
            health: 100,
            attack: 14,
            imageUrl: "assets/Images/darkHelmet.gif",
            enemyAttackBack: 5
        },
            "Barf" : {
                name: "Barf",
                health: 150,
                attack: 8,
                imageUrl: "assets/Images/barfMog.gif",
                enemyAttackBack: 10
    
        },
        "President Skroob" : {
            name: "President Skroob",
            health: 180,
            attack: 7,
            imageUrl: "assets/Images/skroob.gif",
            enemyAttackBack: 20
        }
    };
    var currSelectedCharacter;
    var combatants = [];
    // FUNCTIONS
    // ================================================================================================

    // This function will render a character card to the page.
    // The character rendered and the area they are rendered to
    var renderOne = function(character, renderArea, charStatus) {
        var charDiv = $("<div class='character' data-name='" + character.name + "'>");
        var charName = $("<div class='character-name'>").text(character.name);
        var charImage = $("<img alt='image' class='character-image'>").attr("src", character.imageUrl);
        var charHealth = $("<div class='character-health'>").text(character.health);
        charDiv.append(charName).append(charImage).append(charHealth);
        $(renderArea).append(charDiv);

        if (charStatus === "enemy"){
            $(charDiv).addClass("enemy");
        }
    }
    //This function handles the rendering of characters base on which are selected
    var renderCharacters = function(charObj, areaRender) {
        if (areaRender === "#characters-section") {
            $(areaRender).empty();
            //Loop through the characters object
            for (var key in charObj) {
                if(charObj.hasOwnProperty(key)) {
                    renderOne(charObj[key], areaRender, "");
                }
            }
        }

        // "selected-character" is the div where our selected character
        // If true, render the selected player character to this area
        if (areaRender === "#selected-character"){
            renderOne(charObj, areaRender, "");
        }

        // "available-to-attack" is the div where inactive opponenets are
        if (areaRender === "#available-to-attack-section"){
            for(var i = 0; i < charObj.length; i++) {
                renderOne(charObj[i], areaRender, "enemy");
            }

            $(document).on("click", ".enemy", function(){
                var name = ($(this).attr("data-name"));
            })
        }
    }
    // Render all characters to the page when the game starts.
    renderCharacters(characters, "#characters-section");

    // On click event for selecting our character.
    $(document).on("click", ".character", function(){
        // Saving the clicked character's name.
        var name = $(this).attr("data-name");

        if ($("#defender").children().length === 0) {
            renderCharacters(name, "#defender");
            $(this).hide();
        }

        if (!currSelectedCharacter) {
            currSelectedCharacter = characters[name];
            for(var key in characters) {
                if(key!== name) {
                    combatants.push(characters[key]);
                }
            }

            console.log(combatants);
            // Hide the character select div.
            $("#characters-section").hide();

            // Then render our selected character and our combatants.
            renderCharacters(currSelectedCharacter, "#selected-character");
            renderCharacters(combatants, "#available-to-attack-section");

        }
    })
});