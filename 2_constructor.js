//Constructor
function Hacker(name, fav_language, gender) {
    this.name = name,
    this.fav_language = fav_language,
    this.gender = gender,

    this.getDetails = function() {
        return `My name is ${this.name}
        and my favorite programming langauge is ${this.fav_language}
        oh and i'm a ${this.gender}`
    }
}

const hacker1 = new Hacker('Frey', 'Javascript', 'male');
const hacker2 = new Hacker('Vance', 'PHP', 'male');

console.log(hacker2.getDetails());