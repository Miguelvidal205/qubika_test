const { defineConfig } = require("cypress");

module.exports = defineConfig({
  retries: { "runMode": 2, "openMode": 0 },
  screenshotOnRunFailure: true,
  pageLoadTimeout: 100000,
  defaultCommandTimeout: 5000,
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
