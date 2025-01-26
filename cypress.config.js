const { defineConfig } = require("cypress");

module.exports = defineConfig({
  setupNodeEvents(on, config) {
    require("cypress-mochawesome-reporter/plugin")(on);
  },
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: true,
    html: true,
    json: true,
    inline: true,
  },
  e2e: {
    baseUrl: "https://guest:welcome2qauto@qauto.forstudy.space",
    viewportWidth: 1920,
    viewportHeight: 1080,
    screenshotOnRunFailure: true,
    defaultCommandTimeout: 4000,
    env: {
      USER_EMAIL: "phpcarieer+1@gmail.com",
      USER_PASSWORD: "5ENM7.SttmBczLu",
    },
    defaultBrowser: 'chrome'
  },
});
