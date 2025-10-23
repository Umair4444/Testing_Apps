# 🧪 Cypress Setup & Navigation Testing in Next.js

This guide walks you through setting up **Cypress** for **end-to-end (E2E) testing** in a Next.js application.  
You’ll learn how to install Cypress, configure it, and create a simple navigation test between pages.

---

## 🚀 1. Install Cypress

```bash
npm install -D cypress
```

---

## 🛠️ 2. Update `package.json` Scripts

Add a script to open Cypress inside your **`package.json`** file:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint",
    "cypress:open": "cypress open" // add this line
  }
}
```

This allows you to run Cypress using:

```bash
npm run cypress:open
```

---

## ⚙️ 3. Configure Cypress — `cypress.config.ts`

Create a `cypress.config.ts` file in your project root (if it doesn’t exist yet):

````typescript
import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    // add base url this will let point to this location with just "/"
    baseUrl: "http://localhost:3000",

    setupNodeEvents(on, config) {},
  },
})


## 📁 4. Create Test Pages

To test navigation, we’ll create two simple pages inside the `app` directory.

### `app/page.js`

```javascript
import Link from 'next/link'

export default function Page() {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/about">About</Link>
    </div>
  )
}
````

---

### `app/about/page.js`

```javascript
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>About</h1>
      <Link href="/">Home</Link>
    </div>
  );
}
```

---

## 🧩 5. Write a Cypress Test

Inside the `cypress/e2e` directory, create a new file (e.g., `navigation.cy.js`) and add the following test:

```javascript
describe("Navigation", () => {
  it("should navigate to the about page", () => {
    // Start from the index page
    cy.visit("http://localhost:3000/");
    // or use this line of code when you set baseurl in cypress.config.ts
    // cy.visit('/')

    // Find a link with an href attribute containing "about" and click it
    cy.get('a[href*="about"]').click();

    // The new url should include "/about"
    cy.url().should("include", "/about");

    // The new page should contain an h1 with "About"
    cy.get("h1").contains("About");
  });
});
```

---

## 🧭 6. Run the Test

Start your Next.js development server:

```bash
npm run dev
```

Then open Cypress in a new terminal:

```bash
npm run cypress:open
```

Select **E2E Testing**, choose your browser, and run the `navigation.cy.js` test.

---

## ✅ 7. Expected Result

If everything is set up correctly:

- The test will start on the **Home** page.
- Cypress will click the **About** link.
- The page will navigate to `/about`.
- The test will confirm that the new page contains an `<h1>` with **"About"**.

---

## 🧠 Summary

| Step | Description                               |
| ---- | ----------------------------------------- |
| 1    | Install Cypress                           |
| 2    | Add Cypress command in `package.json`     |
| 3    | Configure base URL in `cypress.config.ts` |
| 4    | Create `Home` and `About` pages           |
| 5    | Write Cypress E2E test for navigation     |
| 6    | Run Cypress and verify navigation         |

---
