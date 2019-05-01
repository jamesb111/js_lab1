"use strict";
let wins = 0;
let userHP = 40;
let grantHP = 10;

let play = "";
let name = "";
let aOq = "";

function startGame() {
    play = prompt("Would you like to play?");
    if (play === "yes") {
        name = prompt("Enter your name.");
        startCombat();
    } else {
        console.log("Goodbye");
    }
}
function getDamage() {
    userHP -= Math.floor((Math.random() * 5) + 1);
    grantHP -= Math.floor((Math.random() * 5) + 1);
}

function startCombat() {
    while (play) {
        aOq = prompt("attack or quit");
        if (aOq === "attack") {
            getDamage();
            console.log(`${name} has ${userHP} health left.`);
            console.log(`Grant has ${grantHP} health left.`);
            if (grantHP <= 0) {
                wins++;
                grantHP = 10;
                if (wins === 3) {
                    console.log(`${name} is victorious. ${name} wins the game.`);
                    break;
                } else {
                    console.log(`Grant has been defeated. ${name} has to beat Grant ${3 - wins} more time(s).`);
                }
            }
            if (userHP <= 0) {
                console.log(`${name} has been defeated. Sucks to suck.`);
                break;
            }
        } else {
            return;
        }
    }
}

startGame();

