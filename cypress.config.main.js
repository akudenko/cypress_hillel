const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: true,
    json: false,
  },
  e2e: {
    baseUrl: "https://guest:welcome2qauto@qauto.forstudy.space",
    viewportWidth: 1920,
    viewportHeight: 1080,
    screenshotOnRunFailure: true,
    defaultCommandTimeout: 4000
  },
});