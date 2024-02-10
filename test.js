var currentIndex = 0;
var websites = [
  'https://www.example.com',
  'https://www.google.com',
  'https://www.wikipedia.org'
];

simply.on('singleClick', function(e) {
  if (e.button === 'select') {
    if (currentIndex < websites.length) {
      var url = websites[currentIndex];
      simply.subtitle('Loading...');
      simply.setText({ title: 'Web Browser', body: 'Loading ' + url + '...' }, true);
      simply.util.ajax({
        url: url
      }, function(data) {
        simply.setText({ title: 'Web Browser', body: data }, true);
      });
      currentIndex++;
    } else {
      simply.setText({ title: 'Error', body: 'No more websites to load.' }, true);
    }
  }
});
