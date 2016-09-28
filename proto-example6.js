console.log('Prototypal inheritance, example six: promises have the same issues');

function Dog(name) {
  this.name = name;
}

Dog.prototype.bark = function() {
  console.log(this.name + ' barked.');
};

Dog.prototype.barkAfterOneSecond = function() {
  var that = this;
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      // this.bark will fail because "this" is not our "this"
      // this.bark();
      that.bark();
      resolve();
    }, 1000);
  });
};

var dog = new Dog('bella');

dog.barkAfterOneSecond().then(function() {
  console.log('How nice.');
});

