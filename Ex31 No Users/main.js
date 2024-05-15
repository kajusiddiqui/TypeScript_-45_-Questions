"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Array list not Empty
let userName = ["Admin", "Kazim", "Bilal", "Ali", "Adil"];
userName.forEach(oneUser => {
    if (oneUser === "Admin") {
        console.log("Hello Admin, would you like to see a status report?");
    }
    else {
        console.log(`"Hello "${oneUser}", thank you for logging in again."`);
    }
});
//Now List is Empty
userName = [];
if (userName.length == 0) {
    console.log("\n User name List is Empty We need to find some users!");
}
