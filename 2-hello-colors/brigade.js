const { events, Job } = require('brigadier');
const { uniqueNamesGenerator, adjectives, animals } = require('unique-names-generator');
const colors = require('colors');

colors.enable();

events.on('exec', () => {
  randomJobName = uniqueNamesGenerator({
    dictionaries: [adjectives, animals],
    length: 2,
    separator: '-'
  });
  console.log(('using job name: ' + randomJobName).green);
  var job = new Job(randomJobName, 'alpine:3.8');
  job.tasks = [
    'echo "Hello from ' + randomJobName + '."'
  ];
  job.run();
});
