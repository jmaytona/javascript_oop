//Prototypes
function Hacker(name, fav_language, gender, birth_year) {
    this.name = name,
    this.fav_language = fav_language,
    this.gender = gender,
    this.birth_year = birth_year,

    this.getDetails = function() {
        return `My name is ${this.name}
        and my favorite programming langauge is ${this.fav_language}
        oh and i'm a ${this.gender}`
    }
};

Hacker.prototype.getAge = function() {
    const year = new Date().getFullYear() - this.birth_year;
    return `${this.name} is ${year} years old`;
};

const hacker1 = new Hacker('Frey', 'Javascript', 'male', '2004');
const hacker2 = new Hacker('Vance', 'PHP', 'male', '2005');

console.log(hacker1.getAge());