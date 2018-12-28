/*interface human{
    name:string;
    age:number;
    gender:string;
}*/

class human {
  public name: string;
  public age: number;
  public gender: string;
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const lynn = new human("Lynn", 24, "female");

const sayHi = (person: human): string => {
  return `${person.name} ${person.age} ${person.gender}`;
};

console.log(sayHi(lynn));

export {};
