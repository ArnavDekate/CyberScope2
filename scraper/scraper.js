// scraper/scraper.js
const { Builder, By } = require('selenium-webdriver');

async function fetchAlerts() {
  const driver = await new Builder().forBrowser('chrome').build();
  let alerts = [];
  try {
    await driver.get('https://www.nciipc.gov.in/alerts_advisories_more.html');
    // Locate and scrape elements as per website's structure
    let alertElements = await driver.findElements(By.css('.alert-class'));
    for (let element of alertElements) {
      let title = await element.findElement(By.css('.title-class')).getText();
      let date = await element.findElement(By.css('.date-class')).getText();
      let link = await element.findElement(By.tagName('a')).getAttribute('href');
      alerts.push({ title, date, link });
    }
  } finally {
    await driver.quit();
  }
  return alerts;
}

module.exports = fetchAlerts;
