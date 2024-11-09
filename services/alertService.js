// services/alertService.js
const fetchAlerts = require('../scraper/scraper');
const processAlerts = require('../ai/aiProcessor');
const saveAlerts = require('../db/database');

async function updateAlerts() {
  const rawAlerts = await fetchAlerts();
  const structuredAlerts = await processAlerts(rawAlerts);
  await saveAlerts(structuredAlerts);
}

module.exports = updateAlerts;
