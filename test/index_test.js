var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('return the outout for 5!', () => {
      const expected = Calculate.factorial(5);
      result = 120;
      assert.equal(expected, result);
    });
  });
});
