console.log('moog, example 4: the trouble with changing defaults');

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

// Doesn't work: the pretty dog doesn't get an adjective

var dog = synth.create('pretty-dog', { name: 'Tuli' });
