const { Given, When, Then } = require('cucumber'),
  navigationHelper = require('../../utils/helpers/navigationHelper');
  filterHelper = require('../../utils/helpers/filterHelper')
  carsPage = require('../../components/pageObjects/cars-page.js');


When(/^I select min and max price in price dropdowns$/, () => {

  browser.element(carsPage.openMenuButton).click();

  browser.execute(function () {
    document.querySelector('[data-e2e-id="FilterSet_salePrice"]').scrollIntoView();
  });

  browser.element(carsPage.minPriceDropdown).click();
  $(carsPage.minPriceOptions).selectByIndex(1);
  browser.element(carsPage.maxPriceDropdown).click();
  $(carsPage.maxPriceOptions).selectByIndex(3);
});

When(/^I select transmission option Automatic$/, () => {
  browser.execute(function () {
    document.querySelector('[data-e2e-id="FilterSet_euroNormClass"]').scrollIntoView();
  });
  browser.element(carsPage.autoTransmissionFilter).click();

});

When(/^I select sorting option Increasing by price from sorting dropdown$/, () => {
  browser.execute(() => {
    window.scrollTo(0, 120);
  });
  //browser.pause(4000);
  // browser.element(carsPage.sortingDropdown).click();
  // $(carsPage.sortingOptions).selectByIndex(4);
});

Then(/^I should see a list of cars with Automatic transmission/, () => {
  let results = $(carsPage.filteredList).$$(carsPage.carDetails);
  navigationHelper.elementHasText(results, 'Automatic');
});

Then(/^I should see a list of cars with prices within defined range and in increasing order/, () => {
  const prices = $(carsPage.filteredList).$$(carsPage.carPrice);
  const resultPrices = filterHelper.getFilteredArray(prices);

  filterHelper.isInRange(resultPrices, 7500, 15000).should.be.false;
  filterHelper.isAscSorted(resultPrices).should.be.true;
});