//Object Literal
const hacker1 = {
    name: "Frey",
    fav_language: "Javascript",
    gender: "male",

    getDetails: function() {
        return `My name is ${this.name}
        and my favorite programming langauge is ${this.fav_language}
        oh and i'm a ${this.gender}`
    }

}

const hacker2 = {
    name: "Vance",
    fav_language: "PHP",
    gender: "male",

    getDetails: function() {
        return `My name is ${this.name}
        and my favorite programming langauge is ${this.fav_language}
        oh and i'm a ${this.gender}`
    }

}

console.log(hacker1.getDetails());
console.log(hacker2.getDetails());
console.log(Object.values(hacker1));
console.log(Object.keys(hacker1));