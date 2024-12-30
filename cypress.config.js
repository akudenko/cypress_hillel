const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.google.com",
    viewportWidth: 1920,
    viewportHeight: 1080,
    screenshotOnRunFailure: true,
  },
});
