var Cipher = function(key) {
	if( key !== undefined && !key.match(/^[a-z]+$/) )
		throw Error("Bad key");
	this.key = key || "aaaaaaaaaa";
}

var a_asc = 'a'.charCodeAt(0);
var z_asc = 'z'.charCodeAt(0);

Cipher.prototype.encode = function(plainText) {
	/* Encode */
	return plainText.split('')
		.map(function(letter, index) {
				var the_letter = letter.charCodeAt(0) + this.key[index % this.key.length].charCodeAt(0); 
				the_letter -= 2 * a_asc
				the_letter %= z_asc - a_asc + 1;
				the_letter += a_asc;
				return String.fromCharCode(the_letter);
			}, this)
		.join('');
};

Cipher.prototype.decode = function(cipherText) {
	/* Decode */
	return cipherText.split('')
		.map(function(letter, index) {
				var the_letter = letter.charCodeAt(0) - this.key[index % this.key.length].charCodeAt(0); 
				the_letter %= z_asc - a_asc + 1;
				the_letter += a_asc;
				return String.fromCharCode(the_letter);
			}, this)
		.join('');
};

module.exports = Cipher;