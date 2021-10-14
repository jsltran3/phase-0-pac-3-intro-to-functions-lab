const string = "Hello!"; 


function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(string.toUpperCase());
}
function logWhisper(string) {
    console.log(string.toLowerCase());
}

const lowerGrand = "hello";
const upperGrand = "HELLO";
const loverGrand = "I love you, Grandma.";

function sayHiToGrandma(greeting) {
  if (greeting === lowerGrand.toLowerCase()) {
    return "I can\'t hear you!"
  } else if (greeting === upperGrand.toUpperCase()) {
      return "YES INDEED!"
  } else if (greeting === loverGrand) {
      return "I love you, too."
  }
}

console.log(sayHiToGrandma(lowerGrand), sayHiToGrandma(upperGrand), sayHiToGrandma(loverGrand));
/*
console.log(sayHiToGrandma(lowerGrand));
console.log(sayHiToGrandma(upperGrand));
console.log(sayHiToGrandma(loverGrand));
*/