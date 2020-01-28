const { Given, When, Then } = require('cucumber'),
  navigationHelper = require('../../utils/helpers/navigationHelper');


When(/^I select min and max price in price dropdowns$/, () => {

  browser.element('[data-e2e-id="openMenuButton"]').click();

  browser.execute(function () {
    document.querySelector('[data-e2e-id="FilterSet_salePrice"]').scrollIntoView();
  });

  browser.element('div#salePriceFrom').click();
  $('[data-e2e-select-input]').selectByIndex(1);
  browser.element('div#salePriceTo > div > select').click();
  $('div#salePriceTo > div > select').selectByIndex(3);
});

When(/^I select transmission option Automatic$/, () => {
  browser.execute(function () {
    document.querySelector('[data-e2e-id="FilterSet_euroNormClass"]').scrollIntoView();
  });
  browser.element('div[data-e2e-id="FilterSet_transmission"]> span > div > div > div > div > label > div').click();

});

When(/^I select sorting option Increasing by price from sorting dropdown$/, () => {
  browser.execute(() => {
    window.scrollTo(0, 50);
  });
  browser.element('div[data-e2e-id="sortingDropdown"]').click();
  $('div[data-e2e-id="sortingDropdown"] > div > select').selectByIndex(4);
});

Then(/^I should see a list of cars with Automatic transmission/, () => {
  let results = $('[data-ab-results]').$$('a[data-e2e-id="carDetailsButton"] > div > div > p');
  results.forEach(element => element.getText().should.contain('Automatic'));
});

Then(/^I should see a list of cars with prices within defined range and in increasing order/, () => {
  const prices = $('[data-ab-results]').$$('span[data-e2e-id="carBuyPrice"] > span');
  const resultPrices = navigationHelper.getFilteredArray(prices);

  navigationHelper.isInRange(resultPrices, 7500, 15000).should.be.false;
  navigationHelper.isAscSorted(resultPrices).should.be.true;
});