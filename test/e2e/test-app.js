const { expect } = require('chai');
const express = require('express');
const path = require('path');
const { prepareChromeDriver, cleanupChromeDriver } = require('./util');
const { By } = require('selenium-webdriver');

const port = 8009;

describe('hn-stories app', function () {
  let server;
  let driver;

  before((done) => {
    const app = express();
    app.use('/', express.static(path.resolve(__dirname, '../../dist')));
    server = app.listen(port, done);
  });

  after(() => {
    server.close();
  });

  before(async () => {
    driver = await prepareChromeDriver();
    driver.manage().timeouts().implicitlyWait(60000);
  });

  after(() => cleanupChromeDriver(driver));

  it('should have a header and 10 list items', async function () {
    await driver.get(`http://localhost:${port}`);

    const title = await driver.getTitle();
    expect(title).to.equal('10 Hacker News');

    const header = await driver.findElement(By.css('.header'));
    const headerText = await header.getText();
    expect(headerText).to.equal('Hacker News');

    const list = await driver.findElements(By.css('.story-list .story-item'));
    const listSize = await list.length;
    expect(listSize).to.equal(10);

  });
});
