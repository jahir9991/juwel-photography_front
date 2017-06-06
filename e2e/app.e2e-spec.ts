import { AngulartryPage } from './app.po';

describe('angulartry App', () => {
  let page: AngulartryPage;

  beforeEach(() => {
    page = new AngulartryPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
