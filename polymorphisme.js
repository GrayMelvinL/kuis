//Polymorphise overridding
class Animal {
    speak(){
        console.log("Animal makes a sound");
    }
}

class Dog extends Animal {
    speak(){
        console.log("Dog sounds like guk guk");
    }
}

class Cat extends Animal {
    speak(){
        console.log("Cat sounds like meow meow");
    }
}

const dog = new Dog();
dog.speak();