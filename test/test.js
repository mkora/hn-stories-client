import { config } from '../src/js/config';
import { request } from '../src/js/util';

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

const { expect } = chai;

chai.use(chaiAsPromised);
describe('util:request function', function() {
  it('request should be a function', function() {
    expect(request).to.be.a('function');
  });

  it('request(URL) should return an error', function() {
    const result = request(`${config.apiEndPoint}topstory.json`);
    return expect(result).to.be.rejectedWith(Error);
  });

  it('request(URL) should return a response (an array)', function() {
    const result = request(`${config.apiEndPoint}topstories.json`);
    return expect(result).to.eventually.be.an('array');
  });
});
