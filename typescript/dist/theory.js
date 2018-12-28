"use strict";
/*interface human{
    name:string;
    age:number;
    gender:string;
}*/
Object.defineProperty(exports, "__esModule", { value: true });
class human {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
const lynn = new human("Lynn", 24, "female");
const sayHi = (person) => {
    return `${person.name} ${person.age} ${person.gender}`;
};
console.log(sayHi(lynn));
//# sourceMappingURL=theory.js.map