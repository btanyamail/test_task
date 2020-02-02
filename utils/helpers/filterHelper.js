class FilterHelper {
  
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
  
  module.exports = FilterHelper;
  