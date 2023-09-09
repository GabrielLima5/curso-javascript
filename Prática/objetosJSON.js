class Dog {
  constructor(dogName, dogAge, dogBreed) {
    this.name = dogName;
    this.age = dogAge;
    this.breed = dogBreed;
  }
}

const july = new Dog("July", 7, "Poodle");
//console.log(` Nome: ${july.name}, Idade: ${july.age}, Raça: ${july.breed}`);

const princesa = new Dog("Princesa", 12, "Pastor Alemão");
/*console.log(
  ` Nome: ${princesa.name}, Idade: ${princesa.age}, Raça: ${princesa.breed}`
);*/
const julyString = JSON.stringify(july, null, 4);
//console.log(julyString);

const julyObject = JSON.parse(julyString);
//console.log(julyObject);

const dog = Object.assign(princesa, july);
//console.log(dog);

const dogKeys = Object.keys(dog);
//console.log(dogKeys);

//console.log({ ...princesa, ...july });

const princesaN = {
  name: "Princesa",
  age: 12,
  breed: "Pastor Alemão",
};

const julyN = {
  adjective: "Cobra",
  color: "Black",
};

const uniao = { ...princesaN, ...julyN };
console.log(uniao);

const { adjective } = julyN;
console.log(adjective);
