const Token = artifacts.require('./Token');

require('chai')
  .use(require('chai-as-promised'))
  .should();

contract('Token', accounts => {
  describe('deployment', () => {
    it('tracks the token name', async () => {
      //fetch token from blockchian
      const token = await Token.new();
      //read token name
      const name = await token.name();
      name.should.equal('Coinstance');
      //check if the token name is coinstance
    });
  });
});
