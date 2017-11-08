const path = require('path');
const webdriver = require('selenium-webdriver');
const chromeDriver = require('chromedriver');

const prepareChromeDriver = async () => {
  process.on('beforeExit', () => this.browser && this.browser.quit());
  process.env.PATH += `:${path.dirname(chromeDriver.path)}`;

  const result = await new webdriver.Builder()
    .disableEnvironmentOverrides()
    .forBrowser('chrome')
    .setLoggingPrefs({ browser: 'ALL', driver: 'ALL' })
    .build();
  return result;
};

const cleanupChromeDriver = async (driver) => {
  if (driver) {
    driver.quit();
  }
  process.env.PATH = process.env.PATH.replace(`:${path.dirname(chromeDriver.path)}`, '');
};

module.exports = { prepareChromeDriver, cleanupChromeDriver };
