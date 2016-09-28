console.log('Self pattern, example four: private methods!');

function Dog(name) {
  var self = this;
  self.name = name;

  // Can only be called here in the closure
  function bark() {
    console.log(self.name + ' barked.');
  }

  self.barkAfterOneSecond = function() {
    setTimeout(bark, 1000);
  }
}

var dog = new Dog("Bella");

// We can't bark directly, by design
// dog.bark();

// But we can call a method that leverages bark
dog.barkAfterOneSecond();
