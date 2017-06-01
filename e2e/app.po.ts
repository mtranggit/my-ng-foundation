import { browser, by, element } from 'protractor';

export class MyNgFoundationPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ngf-root h1')).getText();
  }
}
