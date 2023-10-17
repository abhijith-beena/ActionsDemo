const axios = require('axios');
const fs = require('fs');

const slackWebhookUrl = 'https://hooks.slack.com/services/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';  // Replace with your Slack webhook URL

const sendMochawesomeReportToSlack = async () => {
  try {
    // Read the Mochawesome report
    const report = fs.readFileSync('cypress/reports/mocha/index.json', 'utf-8');

    // Send the report to Slack
    await axios.post(slackWebhookUrl, {
      text: 'Cypress Mochawesome report',
      attachments: [
        {
          title: 'Mochawesome Report',
          text: report,
        },
      ],
    });
    console.log('Cypress Mochawesome report sent to Slack successfully.');
  } catch (error) {
    console.error('Error sending Cypress Mochawesome report to Slack:', error);
  }
};

sendMochawesomeReportToSlack();