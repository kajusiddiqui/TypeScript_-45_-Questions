"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let userName = ["Admin", "Kazim", "Bilal", "Ali", "Adil"];
userName.forEach(oneUser => {
    if (oneUser === "Admin") {
        console.log("Hello Admin, would you like to see a status report?");
    }
    else {
        console.log(`"Hello "${oneUser}", thank you for logging in again."`);
    }
});
