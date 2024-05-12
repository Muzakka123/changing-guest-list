


let guestArray:string[] = ["hina","mehak","wajeeha"];

guestArray.map((items)=> console.log(`Hello,${items} you are invited to dinner`))


let canNotAttend:string = "hina";
console.log(`${canNotAttend} can not make it , for dinner`);

let newGuest : string = " sana";
guestArray[guestArray.indexOf(canNotAttend)] = newGuest

console.log(guestArray);

