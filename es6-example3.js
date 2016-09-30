"use strict";

console.log('ES6 classes, example three: arrow functions make bind() more concise');
console.log('(But still a special snowflake)');

class Dog {
  constructor(name) {
    this.name = name;
  }
  sniff(dog) {
    console.log(this.name + ' sniffed ' + dog.name + '.');
  };
  sniffFriends(friends) {
    friends.forEach((dog) => {
      this.sniff(dog);
    });
  };
}

var bella = new Dog('Bella');
var tuli = new Dog('Tuli');
var roma = new Dog('Roma');

bella.sniff(tuli);

bella.sniffFriends([ tuli, roma ]);
