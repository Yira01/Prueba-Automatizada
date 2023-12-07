const { Builder, By, Key, until } = require('selenium-webdriver');
const fs = require('fs');
const path = require('path');

const screenshotPath = path.join(__dirname, 'screenshots');

async function takeScreenshot(driver, testName) {
  if (!fs.existsSync(screenshotPath)) {
    fs.mkdirSync(screenshotPath);
  }

  const screenshot = await driver.takeScreenshot();
  const screenshotFileName = `${testName.replace(/ /g, '_')}_${new Date().getTime()}.png`;
  const screenshotFilePath = path.join(screenshotPath, screenshotFileName);

  fs.writeFileSync(screenshotFilePath, screenshot, 'base64');
  console.log(`Screenshot saved: ${screenshotFilePath}`);
}

async function pruebaWikipedia() {
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    await driver.get('https://www.wikipedia.org');
    await takeScreenshot(driver, 'Step 1');

    await driver.findElement(By.name('search')).sendKeys('Selenium', Key.RETURN);
    await takeScreenshot(driver, 'Step 2');

    await driver.findElement(By.linkText('Selenium')).click();
    await takeScreenshot(driver, 'Step 3');

    await driver.findElement(By.linkText('Contents')).click();
    await takeScreenshot(driver, 'Step 4');

    await driver.findElement(By.id('p-lang-label')).click();
    await driver.findElement(By.linkText('Español')).click();
    await takeScreenshot(driver, 'Step 5');

    await driver.findElement(By.linkText('Historia')).click();
    await takeScreenshot(driver, 'Step 6');
  } finally {
    await driver.quit();
  }
}

pruebaWikipedia();

