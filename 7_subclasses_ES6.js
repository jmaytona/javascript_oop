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
            oh and i'm a ${this.gender}`;
    }

}

//Inheritance
class Programmer extends Hacker {
    constructor(name, fav_language, gender, birth_year, color){
        super(name, fav_language, gender, birth_year);
        this.color = color;
    }
}

const prog1 = new Programmer('Robin', 'HTML', 'Female', '1995', 'Red');
console.log(prog1.getDetails());