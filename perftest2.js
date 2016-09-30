"use strict";

// run me with --expose-gc

var now = require("performance-now");
var dogsTotal = 100000;

memory();
bindTest();
memory();
thatTest();
memory();
selfTest();
memory();

function bindTest() {
  console.log('arrow function / bind test');
  var sniffs = '';
  class Dog {
    constructor(name) {
      this.name = name;
    }
    sniff(dog) {
      sniffs += (this.name + ' sniffed ' + dog.name + '.');
    };
    sniffFriends(friends) {
      friends.forEach((dog) => {
        this.sniff(dog);
      });
    };
  }
  var dogs = [];
  var i = 0;
  while (i < dogsTotal) {
    dogs.push(new Dog(i));
    i++;
  }
  var start = now();
  dogs[0].sniffFriends(dogs.slice(1));
  var end = now();

  console.log(dogsTotal + ' sniffs time:');
  console.log(end - start);
  console.log('Prevent overoptimization:');
  console.log(sniffs.length);
}

function thatTest() {
  console.log('\n\n"that" pattern test');
  var sniffs = '';
  class Dog {
    constructor(name) {
      this.name = name;
    }
    sniff(dog) {
      sniffs += (this.name + ' sniffed ' + dog.name + '.');
    };
    sniffFriends(friends) {
      var that = this;
      friends.forEach(function(dog) {
        that.sniff(dog);
      });
    };
  }
  var dogs = [];
  var i = 0;
  while (i < 100000) {
    dogs.push(new Dog(i));
    i++;
  }
  var start = now();
  dogs[0].sniffFriends(dogs.slice(1));
  var end = now();

  console.log('100000 sniffs time:');
  console.log(end - start);
  console.log('Prevent overoptimization:');
  console.log(sniffs.length);
}

function selfTest() {
  console.log('\n\self pattern test');
  var sniffs = '';

  function Dog(name) {
    var self = this;
    self.name = name;
    self.sniff = function(dog) {
      sniffs += (self.name + ' sniffed ' + dog.name + '.');
    };
    self.sniffFriends = function(friends) {
      friends.forEach(self.sniff);
    };
  }
  var dogs = [];
  var i = 0;
  while (i < 100000) {
    dogs.push(new Dog(i));
    i++;
  }
  var start = now();
  dogs[0].sniffFriends(dogs.slice(1));
  var end = now();

  console.log('100000 sniffs time:');
  console.log(end - start);
  console.log('Prevent overoptimization:');
  console.log(sniffs.length);
}

function memory() {
  console.log('heap size: ' + process.memoryUsage().heapUsed);
  console.log('bytes per dog: ' + (process.memoryUsage().heapUsed / dogsTotal));
  gc();
}
