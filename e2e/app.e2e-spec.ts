import { SampleWebAppPage } from './app.po';

describe('sample-web-app App', function() {
  let page: SampleWebAppPage;

  beforeEach(() => {
    page = new SampleWebAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
