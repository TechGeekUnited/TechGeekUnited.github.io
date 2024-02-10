var commands = [{
  name: 'setText',
  params: [{
    name: 'title',
  }, {
    name: 'subtitle',
  }, {
    name: 'body',
  }, {
    name: 'clear',
  }],
}, {
  name: 'singleClick',
  params: [{
    name: 'button',
  }],
}, {
  name: 'longClick',
  params: [{
    name: 'button',
  }],
}, {
  name: 'vibe',
  params: [{
    name: 'type',
  }],
}];

var currentIndex = 0;

simply.on('singleClick', function(e) {
  if (e.button === 'select') {
    if (currentIndex < commands.length) {
      executeCommand(commands[currentIndex]);
      currentIndex++;
    } else {
      simply.text({ title: 'Error', body: 'No more commands' });
    }
  }
});

function executeCommand(command) {
  switch (command.name) {
    case 'setText':
      simply.text({
        title: command.params[0].value,
        subtitle: command.params[1].value,
        body: command.params[2].value,
        clear: command.params[3].value || false
      });
      break;
    case 'vibe':
      simply.vibe(command.params[0].value);
      break;
    // Add cases for other commands as needed
    default:
      simply.text({ title: 'Error', body: 'Unsupported command' });
  }
}
