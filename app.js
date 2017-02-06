function showErrors() {
  $('.errors').append('<p>Bad Thing</p>');
  $('.errors').append('<p>Another Bad Thing</p>');
  $('.errors').append('<p>Yet Another Bad Thing</p>');
}

try {
  module.exports = {
    showErrors: showErrors,
  };
}
catch (e) { }
