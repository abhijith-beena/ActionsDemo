const axios = require('axios');
const fs = require('fs');

const slackWebhookUrl = process.argv[2];  // Replace with your Slack webhook URL
const reportPath = 'cypress/reports/mocha/index.json';
const sendMochawesomeReportToSlack = async () => {
  try {
    // Read the Mochawesome report
    const report = JSON.parse(fs.readFileSync(reportPath, 'utf8'));

    // Send the report to Slack
    await axios.post(slackWebhookUrl, {
      text: 'Cypress Mochawesome report',
      attachments: [
        {
          color: 'good',
          title: 'Mochawesome Report',
          text: JSON.stringify(report, null, 2),
        },
      ],
    });
    console.log('Cypress Mochawesome report sent to Slack successfully.');
  } catch (error) {
    console.error('Error sending Cypress Mochawesome report to Slack:', error);
  }
};

sendMochawesomeReportToSlack();