class NavigationHelper {
  static open(url) {
    const path = `${browser.options.baseUrl}/${url}`;

    return browser.url(path);
  }

  static scrollTo(selector) {
    browser.execute(() => {
      document.querySelector(selector).scrollIntoView();
    });
  }

  static isInRange(resultPrices, minPrice, maxPrice) {
    return resultPrices.some(i => i > maxPrice || i < minPrice)
  }

  static getFilteredArray(prices) {
    return prices.map(element =>
      element.getText().replace(/[€,-.Sold]+/g, '')).filter(el => el !== '');
  }

  static isAscSorted(resultPrices) {
    for (let i = 0; i < resultPrices.length - 1; i++) {
      const current = resultPrices[i], next = resultPrices[i + 1];
      if (current > next) { return false; }
    }
    return true;
  }
}

module.exports = NavigationHelper;
