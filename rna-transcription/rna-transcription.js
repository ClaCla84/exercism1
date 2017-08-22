var DnaTranscriber = function(){};


var dnaToRna = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U'
};

var transcribeDna = function(dna, controllore) {
  return dna.replace(/./g, function(dnaChange) {
    if (!(dnaChange in controllore)) { throw Error('Invalid input'); }
    return controllore[dnaChange];
  });
}

DnaTranscriber.prototype.toRna = function(dna) {
  return transcribeDna(dna, dnaToRna);
}

module.exports = DnaTranscriber;