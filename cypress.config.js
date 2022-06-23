const { defineConfig } = require("cypress");
const enableTerminalReportLogsPrinter = require("cypress-terminal-report/src/installLogsPrinter");

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            enableTerminalReportLogsPrinter(on);
        },
    },
});
