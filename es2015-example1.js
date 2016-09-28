"use strict";

console.log('ES2015 classes, example one: the new super keyword');

class Dog {
  constructor(name) {
    this.name = name;
  }
  bark() {
    console.log(this.name + ' barked.');
  }
}

class Collie extends Dog {
  // I could skip this constructor entirely since I'm not changing it
  constructor(name) {
    super(name);
  }
  bark() {
    super.bark();
    console.log('Then she herded some sheep.');
  }
}

var collie = new Collie("Jane");
collie.bark();
