console.log('Prototypal inheritance, example 4b: forEach via the "that" pattern');

function Dog(name) {
  this.name = name;
}

Dog.prototype.sniff = function(dog) {
  console.log(this.name + ' sniffed ' + dog.name + '.');
};

Dog.prototype.sniffFriends = function(friends) {
  var that = this;
  friends.forEach(function(dog) {
    that.sniff(dog);
  });
};

var bella = new Dog('Bella');
var tuli = new Dog('Tuli');
var roma = new Dog('Roma');

bella.sniff(tuli);

bella.sniffFriends([ tuli, roma ]);
