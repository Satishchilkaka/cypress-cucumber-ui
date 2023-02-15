const { defineConfig } = require("cypress");
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const addCucumberPreprocessorPlugin = require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;
const createEsBuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin;

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsBuildPlugin(config)],
        });
        on('file:preprocessor', bundler);
        await addCucumberPreprocessorPlugin(on, config);
        return config;
        },
        baseUrl: "http://localhost:4200/",
        chromeWebSecurity: false,

    specPattern: "cypress/e2e/features/*.feature"
  },
});
