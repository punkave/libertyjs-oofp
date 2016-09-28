"use strict";

console.log('ES6 classes, example two: subclassing and parent/super');

class Dog {
  constructor(name) {
    this.name = name;
  }
  bark() {
    console.log(this.name + ' barked.');
  }
}

class Collie extends Dog {
}

// Override the "bark" method...
//
// WHAAAAT? ...
//
// It's all just syntactic sugar!

Collie.prototype.bark = function() {
  // Call "superclass" version
  Dog.prototype.bark.call(this);
  // Now extend it by doing more
  console.log('Then she herded some sheep.');
}

var collie = new Collie("Jane");
collie.bark();
