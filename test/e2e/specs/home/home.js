describe('homepage', function () {
  beforeEach(function () {
    browser.get('http://127.0.0.1:9000/#/');
  });

  it('should load the page', function () {
    var allEpisodes = element.all(by.repeater("episode in episodes"));
    browser.sleep(2000);
    expect(allEpisodes.count()).toBeGreaterThan(0);
  });
});