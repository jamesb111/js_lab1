"use strict";
let user = undefined;
let userLife = 40;
let grantLife = 10;
let userWs = 0;
let grantWs = 0;
let userDmg = 0;
let grantDmg = 0;

let game = prompt("Would you like to play?", "yes or no");
if (game === "yes") {
    user = prompt("Enter your name");
    while (grantWs < 1 && userWs < 3) {
        if (userLife > 0 && grantLife > 0) {
            userDmg = Math.floor((Math.random() * 2) + 1);
            grantDmg = Math.floor((Math.random() * 2) + 1);
            userLife = userLife - userDmg;
            console.log(`${user} has ${userLife} health left`);
            grantLife = grantLife - grantDmg;
            console.log(`Grant the almighty chicken has ${grantLife} health left`);
            if (grantLife <= 0) {
            userWs++;
            grantLife = 10;
            console.log("You beat Grant");
            } if (userLife <= 0) {
            grantWs++;
            console.log("The almighty Grant won game over");
            break;
            } if (userWs === 3)
            console.log("You won the game");
            break;

        }
    }
}