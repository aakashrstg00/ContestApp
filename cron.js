var cron = require('node-cron');
var task = cron.schedule('0 8 * * *', function () {
    console.log('running a task every day at 8 am.');
});
task.start();
module.exports = cron;