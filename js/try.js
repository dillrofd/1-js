let age = 16;

console.log(age);


const name = "Yuna";

console.log(name);



let isStudent = true;

console.log(isStudent);



let myString ="Who needs a wide, bright path that's already crowded? I'll walk my crooked path until it's dark!";
 
console.log(myString);


let myNumber = 13;

myNumber = myNumber + 10;

console.log(myNumber);



const myNull = null;

console.log(myNull);

const userName = prompt (" Будь ласка, введіть ваше ім'я ")
console.log(typeof userName)
alert ( `Привіт, ${userName}!` )


const userAnswer = confirm("Ви дійсно хочете покинути сторінку?");
console.log(typeof userAnswer);
if (userAnswer === true){ 
alert ("Дякую за підтвердження!");
} else {
    alert ("Дію відмінено!") ;
}


alert (" Увага! Дія може бути небезпечною. ");
const message = confirm ("Ви впевнені що хочете продовжити?");

if (message === true){ 
    alert ("Дякую за підтвердження!");
    } else {
        alert ("Дію відмінено!") ;
    }