//Constructor
function Hacker(name, fav_language, gender, birth_year) {
    this.name = name,
    this.fav_language = fav_language,
    this.gender = gender,
    this.birth_year = birth_year
};

//Prototypes sample
Hacker.prototype.getDetails = function() {
    return `My name is ${this.name}
        and my favorite programming langauge is ${this.fav_language}
        oh and i'm a ${this.gender}`
};

//Inherti Prototype
Programmer.prototype = Object.create(Hacker.prototype)

//Programmer Constructor
function Programmer(name, fav_language, gender, birth_year, color) {
    Hacker.call(this, name, fav_language, gender, birth_year)
    this.color = color;
}

//Instantiate
const prog1 = new Programmer("Robin", "HTML", "Female", "1994", "Red");

//Use constructor
Programmer.prototype.constructor = Hacker;

console.log(prog1.getDetails());