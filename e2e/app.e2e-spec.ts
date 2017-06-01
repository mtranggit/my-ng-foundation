import { MyNgFoundationPage } from './app.po';

describe('my-ng-foundation App', () => {
  let page: MyNgFoundationPage;

  beforeEach(() => {
    page = new MyNgFoundationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ngf works!');
  });
});
