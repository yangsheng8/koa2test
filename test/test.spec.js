const {Builder, By, Key, until} = require('selenium-webdriver');

let driver = new Builder()
    .forBrowser('firefox')
    .build();

driver.get('http://localhost:3000/Index/index');
driver.findElement(By.id('thumb')).click();
const _animation = driver.findElement(By.id('animation'))
driver.wait(_animation.isDisplayed(), 2000);
driver.quit();
