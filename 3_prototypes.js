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

Hacker.prototype.getAge = function() {
    const birth_year = new Date().getFullYear() - this.birth_year;
    return `${this.name} is ${birth_year} years old`;
};

Hacker.prototype.reviseAge = function(newYear) {
    this.birth_year = newYear;
    this.revised = true;
}

const hacker1 = new Hacker('Frey', 'Javascript', 'male', '1990');
const hacker2 = new Hacker('Vance', 'PHP', 'male', '1995');

console.log(hacker1.getDetails());
console.log(hacker1);

hacker1.reviseAge('2000');

console.log(hacker1);