console.log('Prototypal inheritance, example 3b: simple forEach FAIL!');

// This doesn't work

function Dog(name) {
  this.name = name;
}

Dog.prototype.sniff = function(dog) {
  console.log(this.name + ' sniffed ' + dog.name + '.');
};

Dog.prototype.sniffFriends = function(friends) {
  friends.forEach(function(dog) {
    this.sniff(dog);
  });
};

var bella = new Dog('Bella');
var tuli = new Dog('Tuli');
var roma = new Dog('Roma');

bella.sniff(tuli);

bella.sniffFriends([ tuli, roma ]);
