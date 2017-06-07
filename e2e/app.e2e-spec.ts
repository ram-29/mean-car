import { MeanCarPage } from './app.po';

describe('mean-car App', () => {
  let page: MeanCarPage;

  beforeEach(() => {
    page = new MeanCarPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
