//Object
class Hacker {
    //Constructor
    constructor(name, fav_language, gender, birth_year){
        this.name = name,
        this.fav_language = fav_language,
        this.gender = gender,
        this.birth_year = birth_year
    }
    //Method/Prototype
    getDetails() {
        return `My name is ${this.name}
            and my favorite programming langauge is ${this.fav_language}
            oh and i'm a ${this.gender}`
    }

    getAge() {
        const birth_year = new Date().getFullYear() - this.birth_year;
        return `${this.name} is ${birth_year} years old`;
    }

    reviseAge(newYear) {
        this.birth_year = newYear;
        this.revised = true;
    }

    static testSkills() {
        return 'Coding Skills will be tested';
    }

}

//Instantiate
const hacker1 = new Hacker('Frey', 'Javascript', 'male', '1990');

console.log(hacker1.getAge());
hacker1.reviseAge('2000');
console.log(hacker1.getAge());
console.log(Hacker.testSkills());