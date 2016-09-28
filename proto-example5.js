console.log('Prototypal inheritance, example five: async via bind()');

function Dog(name) {
  this.name = name;
}

Dog.prototype.bark = function() {
  console.log(this.name + ' barked.');
};

Dog.prototype.barkAfterOneSecond = function() {
  // Use bind() to create a function for which `this`
  // is always the same `this` as at the time this
  // method was called. IE8+
  setTimeout(this.bark.bind(this), 1000);
};

var dog = new Dog('bella');

// Works fine
dog.bark();

// Also works
dog.barkAfterOneSecond();
