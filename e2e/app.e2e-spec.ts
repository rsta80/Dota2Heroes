import {Dota2Page} from "./app.po";

describe('dota2 App', () => {
  let page: Dota2Page;

  beforeEach(() => {
    page = new Dota2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
