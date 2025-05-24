'use strict';

var isAVowel = function(ltr) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  return vowels.includes(ltr.toLowerCase());
};

module.exports = isAVowel;
