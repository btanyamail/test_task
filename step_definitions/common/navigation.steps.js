const { Given, When, Then } = require('cucumber'),
  navigationHelper = require('../../utils/helpers/navigationHelper');

Given(/^I navigate to "([^"]*)" page$/, url => navigationHelper.open(url));
When(/^I select make Tesla in make dropdown$/, function() {
  browser.execute(function () {
    window.scrollTo(0, 400);
  });
  browser.pause(1000);
  browser.element('div.optanon-alert-box-button.optanon-button-allow > div > button').click();
  browser.element('[data-e2e-id="brandDropdown"]').click();
  browser.execute(function () {
    document.querySelector('[data-e2e-grid-item]').scrollIntoView();
  });
  let inputs = $('div[data-e2e-grid-item] > ul').$$('div[data-e2e-checkbox] > label > div');
  inputs[20].click();
  browser.pause(2000);
});

When(/^I select model Model X in model dropdown$/, function() { 
  browser.element('[data-e2e-id="modelDropdown"]').click();
  $('div[data-e2e-grid-item] div > div > ol').$$('div[data-e2e-checkbox] > label > div')[0].click();
});

When(/^I click Find cars button$/, function() { 
  browser.element('[data-e2e-id="searchButton"]').click();
});

Then(/^I should see a list of cars of only selected make and model$/, function() { 
  const results = $('div[data-ab-results]').$$('h3[data-e2e-id="cardCarName"]');
  results.forEach(element => element.getText().should.contain('Tesla Model X'));
});  

