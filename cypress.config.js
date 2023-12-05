const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    //  baseUrl: 'https://example.cypress.io', 
    baseUrl: 'http://localhost:3000/'
  },
  
});
