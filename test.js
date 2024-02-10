var UI = require('ui');
var ajax = require('ajax');

var webBrowser = new UI.Card({
  title: 'Web Browser',
  body: 'Press Select to load website',
  scrollable: true
});

webBrowser.on('click', 'select', function() {
  // Show a menu to input website URL
  var urlMenu = new UI.Menu({
    sections: [{
      title: 'Enter URL',
      items: [{
        title: 'Confirm',
        icon: 'images/menu_icon.png',
        subtitle: 'Press Select'
      }]
    }]
  });

  var urlText = '';

  urlMenu.on('select', function(e) {
    if (e.item.title === 'Confirm') {
      // Load website using AJAX
      ajax(
        {
          url: urlText,
          type: 'text'
        },
        function(data) {
          // Display the website content
          webBrowser.body(data);
        },
        function(error) {
          // Display error if unable to load website
          webBrowser.body('Error: ' + error);
        }
      );
    }
  });

  // Prompt user to enter URL
  urlMenu.on('show', function() {
    urlText = '';
    webBrowser.subtitle('');
  });

  urlMenu.on('select', function(e) {
    if (e.item.title === 'Confirm') {
      urlMenu.hide();
    }
  });

  urlMenu.show();
});

webBrowser.show();
