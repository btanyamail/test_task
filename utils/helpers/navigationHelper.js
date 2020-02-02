class NavigationHelper {
  static open(url) {
    const path = `${browser.options.baseUrl}/${url}`;

    return browser.url(path);
  }

  // static scrollTo(selector) {
  //   browser.execute(() => {
  //     document.querySelector(selector).scrollIntoView();
  //   });
  // }

  static elementHasText(arr, text) {
    arr.forEach(element => element.getText().should.contain(text))
  }

}

module.exports = NavigationHelper;
