describe('homepage', function () {
  beforeEach(function () {
    browser.get('/#/');
  });

  it('should load the page', function () {
    var allEpisodes = element.all(by.repeater("episode in episodes"));
    browser.sleep(1000);
    expect(allEpisodes.count()).toBeGreaterThan(0);
  });
});