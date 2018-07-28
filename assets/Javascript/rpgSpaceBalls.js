// Execute this code when the DOM has fully loaded.

$(document).ready(function(){
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
    console.log(characters);
    // This function will render a character card to the page.
    // The character rendered and the area they are rendered to
    var renderOne = function(character, renderArea) {
        var charDiv = $("<div class='character' data-name='" + character.name + "'>");
        var charName = $("<div class='character-name'>").text(character.name);
        var charImage = $("<img alt='image' class='character-image'>").attr("src", character.imageUrl);
        var charHealth = $("<div class='character-health'>").text(character.health);
        charDiv.append(charName).append(charImage).append(charHealth);
        $(renderArea).append(charDiv);
    }
    //This function handles the rendering of characters base on which are selected
    var renderCharacters = function(charObj, areaRender) {
        if (areaRender === "#characters-section") {
            $(areaRender).empty();
            for (var key in charObj) {
                if(charObj.hasOwnProperty(key)) {
                    renderOne(charObj[key], areaRender);
                }
            }
        }
    }
    // Render all characters to the page when the game starts.
    renderCharacters(characters, "#characters-section");
});