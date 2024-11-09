// ai/aiProcessor.js
const axios = require('axios');
require('dotenv').config();

async function processAlerts(alerts) {
  const response = await axios.post(
    'https://api.openai.com/v1/completions',
    {
      model: 'text-davinci-003',
      prompt: `Format the following alerts: ${JSON.stringify(alerts)}`,
      max_tokens: 500,
    },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
    }
  );
  return JSON.parse(response.data.choices[0].text);
}

module.exports = processAlerts;
