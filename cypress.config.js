const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "m3b8cw",
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports/mocha",
    "reportFilename": "index",  // Specify your custom file name for the HTML report
    overwrite: true,
    html: true,
    json: true
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
     // require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
