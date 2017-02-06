var jsdom = require('jsdom');
var app = require('../app');

beforeEach(function(done) {
  jsdom.env({
    html: html(),
    done: (err, window) => {
      $ = require('jquery')(window);
      done();
    },
  });
});

describe("A suite", function() {
  it("contains spec with an expectation", function() {
    app.showErrors();
    const errors = $('.errors');
    expect(errors.children().length).toEqual(3);
  });
});


function html() {
  return `
<html>
  <body>
    <div class="errors"></div>
  </body>
</html>
  `;
}

