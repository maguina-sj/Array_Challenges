function alwaysHungry (arr) {
    var alwaysHungry = [];
    for (var i =0; i<alwaysHungry.length; i++) {
        if (alwaysHungry[i] == "food") {
            console.log("yummy");
        }
    }
}

alwaysHungry([3.14, "food", "pie", true, "food"]);

// this should console log "yummy", "yummy"
// alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"
