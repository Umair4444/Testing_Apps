- npm install -D jest jest-environment-jsdom @testing-library/react @testing-library/dom @testing-library/jest-dom ts-node @types/jest

- npm init jest@latest

(base) PS D:\1.GITHUB\Testing_Apps> npm init jest@latest

> npx
> create-jest

The following questions will help Jest to create a suitable configuration for your project

√ Would you like to use Jest when running "test" script in "package.json"? ... yes
√ Would you like to use Typescript for the configuration file? ... yes
√ Choose the test environment that will be used for testing » jsdom (browser-like)
√ Do you want Jest to add coverage reports? ... yes
√ Which provider should be used to instrument code for coverage? » v8
√ Automatically clear mock calls, instances, contexts and results before every test? ... yes

- add file jest.setup.ts ===> import "@testing-library/jest-dom";

- add or update jest.config.ts ====>

import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
// Provide the path to your Next.js app to load next.config.js and .env files in your test environment
dir: "./",
});

// Add any custom config to be passed to Jest
const config: Config = {
coverageProvider: "v8",
testEnvironment: "jsdom",
// Add more setup options before each test is run
setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);

npm run test

to update snapshot
npm run test -- -u


video tutorial for help : https://www.youtube.com/watch?v=g3GFZx1KyWs