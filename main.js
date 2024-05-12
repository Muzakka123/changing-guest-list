// You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations.
// You’ll have to think of someone else to invite.
var guestArray = ["hina", "mehak", "wajeeha"];
guestArray.map(function (items) { return console.log("Hello,".concat(items, " you are invited to dinner")); });
var canNotAttend = "hina";
console.log("".concat(canNotAttend, " can not make it , for dinner"));
var newGuest = " sana";
guestArray[guestArray.indexOf(canNotAttend)] = newGuest;
console.log(guestArray);
