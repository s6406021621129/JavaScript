class Dog {
    constructor(name) {
        this._name = name;
    }

    introduce() {
        console.log('This is ' + this._name + '!');
    }

    static bark() {
        console.log('Woof');
    }
}
const myDog = new Dog('Buster');
myDog.introduce();

Dog.bark();

const my2Dog = new Dog("Pluto");
my2Dog.introduce();

Dog.bark();
Dog.introduce();
