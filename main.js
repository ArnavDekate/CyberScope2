// main.js
const updateAlerts = require('./services/alertService');

// Initial run to update alerts
updateAlerts().then(() => console.log("Initial update complete."));

// Schedule updates every hour
setInterval(updateAlerts, 60 * 60 * 1000);
