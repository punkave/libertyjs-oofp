console.log('moog, example 5: pretty defaults');

var synth = require('moog')();

synth.define('dog', {
  construct: function(self, options) {
    self.name = options.name;
    self.wake = function() {
      console.log(self.name + ' woke up.');
    };
  },
  afterConstruct: function(self) {
    self.wake();
  }
});

synth.define('pretty-dog', {
  extend: 'dog',
  beforeConstruct: function(self, options) {
    options.name = 'Pretty ' + options.name;
  }
});

// Now the pretty dog gets an adjective

var dog = synth.create('pretty-dog', { name: 'Tuli' });
