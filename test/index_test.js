var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('return the output for 5!', () => {
      const expected = Calculate.factorial(5);
      result = 120;
      assert.equal(expected, result);
    });
    it('return the output for 4!', () => {
      const expected = Calculate.factorial(4);
      result = 24;
      assert.equal(expected, result);
    });
    it('return the 0!', () => {
      const expected = Calculate.factorial(0);
      result = 1;
      assert.equal(expected, result);
    });
  });
});
