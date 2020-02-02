const { Given, When, Then } = require('cucumber'),
  navigationHelper = require('../../utils/helpers/navigationHelper');
  homePage = require('../../components/pageObjects/home-page.js');

Given(/^I navigate to "([^"]*)" page$/, url => navigationHelper.open(url));
When(/^I select make Tesla in make dropdown$/, function() {
  browser.execute(function () {
    window.scrollTo(0, 400);
  });
  browser.pause(1000);
  browser.element(homePage.acceptCookiesButton).click();
  browser.element(homePage.brandDropDown).click();
  //navigationHelper.scrollToElement('[data-e2e-grid-item]');
  browser.execute(function () {
    document.querySelector('[data-e2e-grid-item]').scrollIntoView();
  });
  let inputs = $(homePage.makeList).$$(homePage.makeCheckbox);
  inputs[20].click();
  browser.pause(3000);
});

When(/^I select model Model X in model dropdown$/, function() { 
  browser.element(homePage.modelDropDown).click();
  $(homePage.modelList).$$(homePage.modelCheckbox)[0].click();
});

When(/^I click Find cars button$/, function() { 
  browser.element(homePage.searchButton).click();
});

Then(/^I should see a list of cars of only selected make and model$/, function() { 
  const results = $(homePage.searchResults).$$(homePage.resultsCarName);
  navigationHelper.elementHasText(results, 'Tesla Model X');
});  

