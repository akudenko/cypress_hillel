const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://guest:welcome2qauto@qauto2.forstudy.space",
    viewportWidth: 1920,
    viewportHeight: 1080,
    screenshotOnRunFailure: true,
    env: {
      USER_EMAIL: "phpcarieer+2@gmail.com",
      USER_PASSWORD: "5ENM7.SttmBczLu",
    },
  },
});
