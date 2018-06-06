const chai = require('chai');
const should = chai.should();

const mockValue = 10;

describe('Test mocking data', () => {
  it('mockValue should be 10', (done) => {
    mockValue.should.equal(10);
    done();
  });
});
