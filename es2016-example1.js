"use strict";

console.log('ES2016 classes, example one: bind via syntactic sugar');

class Dog {
  constructor(name) {
    this.name = name;
  }
  bark() {
    console.log(this.name + ' barked.');
  }
  barkAfterOneSecond() {
    setTimeout(::this.bark, 1000);
  }
}

var dog = new Dog("Roma");
dog.bark();
dog.barkAfterOneSecond();
