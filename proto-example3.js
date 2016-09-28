console.log('Prototypal inheritance, example three: async FAIL!');

// This doesn't work

function Dog(name) {
  this.name = name;
}

Dog.prototype.bark = function() {
  console.log(this.name + ' barked.');
};

Dog.prototype.barkAfterOneSecond = function() {
  setTimeout(function() {
    // "Who is this? Sorry, wrong number"
    this.bark();
  }, 1000);
};

var dog = new Dog('bella');

// Works fine
dog.bark();

// Fails miserably
dog.barkAfterOneSecond();
