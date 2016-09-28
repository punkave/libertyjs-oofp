console.log('Prototypal inheritance, example four: async via closure');

function Dog(name) {
  this.name = name;
}

Dog.prototype.bark = function() {
  console.log(this.name + ' barked.');
};

Dog.prototype.barkAfterOneSecond = function() {
  // Capture a reference to this, creating a closure
  var that = this;
  setTimeout(function() {
    that.bark();
  }, 1000);
};

var dog = new Dog('bella');

// Works fine
dog.bark();

// Also works
dog.barkAfterOneSecond();
