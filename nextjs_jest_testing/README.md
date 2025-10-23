# 🧪 Jest Testing Setup for Next.js (with TypeScript)

This guide explains how to set up and configure **Jest** with **Next.js** and **TypeScript** for unit and component testing using **React Testing Library**.

---

## 🚀 1. Install Required Packages

Install Jest and testing libraries as **development dependencies**:

```bash
npm install -D jest jest-environment-jsdom @testing-library/react @testing-library/dom @testing-library/jest-dom ts-node @types/jest
```

---

## ⚙️ 2. Initialize Jest

Run the following command to initialize Jest in your project:

```bash
npm init jest@latest
```

Then answer the prompts as follows:

```bash
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
```

---

## 🧱 3. Create a Setup File

Add a new file named **`jest.setup.ts`** at the root of your project and include the following import:

```typescript
import "@testing-library/jest-dom";
```

This adds useful matchers like `.toBeInTheDocument()` to your tests.

---

## ⚙️ 4. Configure Jest — `jest.config.ts`

Create or update the **`jest.config.ts`** file with the following configuration:

```typescript
import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
const config: Config = {
  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,
  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,
  // The directory where Jest should output its coverage files
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  // Add more setup options before each test is run
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  // The test environment that will be used for testing
  testEnvironment: "jsdom",
  // Show individual test results with the test suite hierarchy
  verbose: true,
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);
```

---

## 🧩 5. Update `package.json` Scripts (if not done automatically)

Make sure your **`package.json`** includes a test script:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "test": "jest"
  }
}
```

---

## 🧠 6. Running Tests

Run all your Jest tests using:

```bash
npm run test
```

To **update snapshots**, run:

```bash
npm run test -- -u
```

To **show individual test results** (verbose output):

```bash
npm test -- --verbose
```

---

## 🧾 7. Example Test File

Here’s a simple example test for a component named `ContactPage.tsx`:

```typescript
import { render, screen } from "@testing-library/react";
import ContactPage from "../app/contact/page";

describe("ContactPage", () => {
  it("renders contact information", () => {
    render(<ContactPage />);
    expect(screen.getByText("Contact Page Information")).toBeInTheDocument();
    expect(screen.getByText(/John Dow/i)).toBeInTheDocument();
  });
});
```

---

## 📊 8. Generate Coverage Report

To view a **coverage report**, run:

```bash
npm run test -- --coverage
```

After running, open the generated `coverage/lcov-report/index.html` in your browser.

---

## 🎥 9. Helpful Video Tutorial

Watch this YouTube tutorial for additional guidance:  
📺 [How to Set Up Jest in Next.js with TypeScript](https://www.youtube.com/watch?v=g3GFZx1KyWs)

---

## ✅ Summary

| Step | Description                                  |
| ---- | -------------------------------------------- |
| 1    | Install Jest & testing libraries             |
| 2    | Initialize Jest with setup wizard            |
| 3    | Create `jest.setup.ts` for testing utilities |
| 4    | Configure Jest using `jest.config.ts`        |
| 5    | Add `test` script in `package.json`          |
| 6    | Run, update, and debug tests                 |
| 7    | Generate coverage reports                    |

---
