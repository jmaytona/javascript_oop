//Prototypes sample
const hackerProto =  {
    getDetails: function() { 
        return `My name is ${this.name}
        and my favorite programming langauge is ${this.fav_language}
        oh and i'm a ${this.gender}`
    },

    getAge: function() {
        const birth_year = new Date().getFullYear() - this.birth_year;
        return `${this.name} is ${birth_year} years old`;
    }
};


//Create Object
const hacker1 = Object.create(hackerProto, {
    name: { value: 'Frey' },
    fav_language: { value: 'JS' },
    gender: { value: 'male' },
    birth_year: { value: '1990' }
});

console.log(hacker1);