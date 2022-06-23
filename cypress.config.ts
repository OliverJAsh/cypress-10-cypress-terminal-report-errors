import { defineConfig } from "cypress";
import enableTerminalReportLogsPrinter from "cypress-terminal-report/src/installLogsPrinter";

export default defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            enableTerminalReportLogsPrinter(on);
        },
    },
});
