describe("Contact test 1", () => {
  it("passes", () => {
    cy.visit("/contact");

    cy.get("div").contains("Contact Page Information"); // check if it contains the text
    cy.get("h2").should("contain.text", "Name : John Dow"); // check for the exact same name
    cy.get("h2").contains("Email : john.dow@example.com");
    cy.get("h2").contains("Phone : (123) 456-7890");
    cy.get("h2").contains("Address : 123 Main St, Anytown, USA");
    cy.get("h2").contains("Website : www.johndow.com");
  });
});

// 🧩 1. ✅ Check all text together in a single element

// If all this text is inside one element, like:
describe("Contact test 2", () => {
  it("text is inside one element", () => {
    cy.visit("/contact");

    cy.get("div").should("contain.text", "Contact Page Information");
    cy.get("h2").should("contain.text", "Name : John Dow");
    cy.get("h2").should("contain.text", "Email : john.dow@example.com");
    cy.get("h2").should("contain.text", "Phone : (123) 456-7890");
    cy.get("h2").should("contain.text", "Address : 123 Main St, Anytown, USA");
    cy.get("h2").should("contain.text", "Website : www.johndow.com");
  });
});

// Then you can match the entire combined text:
describe("Contact test 3", () => {
  it("entire combined text", () => {
    cy.visit("/contact");

    cy.get("div").should(
      "contain.text",
      "Contact Page Information" +
        "Name : John Dow" +
        "Email : john.dow@example.com" +
        "Phone : (123) 456-7890" +
        "Address : 123 Main St, Anytown, USA" +
        "Website : www.johndow.com"
    );
  });
});

// 🧩 2. ✅ Check each h2 by index (if you expect a specific order) ""change eq value will change order"""
describe("Contact test 4", () => {
  it("specific order", () => {
    cy.visit("/contact");

    cy.get("h2").eq(0).should("have.text", "Name : John Dow");
    cy.get("h2").eq(1).should("have.text", "Email : john.dow@example.com");
    cy.get("h2").eq(2).should("have.text", "Phone : (123) 456-7890");
    cy.get("h2")
      .eq(3)
      .should("have.text", "Address : 123 Main St, Anytown, USA");
    cy.get("h2").eq(4).should("have.text", "Website : www.johndow.com");
  });
});

// 🧩 3. ✅ Use each() to loop through multiple expected values
describe("Contact test 5", () => {
  it("loop through multiple expected values", () => {
    const info = [
      "Contact Page Information",
      "Name : John Dow",
      "Email : john.dow@example.com",
      "Phone : (123) 456-7890",
      "Address : 123 Main St, Anytown, USA",
      "Website : www.johndow.com",
    ];

    cy.visit("/contact"); // Make sure to visit your Contact page first

    // Select all elements that contain visible text (div + h2)
    cy.get("div > *").each(($el, index) => {
      cy.wrap($el).should("have.text", info[index]);
    });
  });
});

// 🧩 4. ✅ Regex Match (Flexible Partial Matching)
describe("Contact test 6", () => {
  it("Regex Match", () => {
    // Step 1: Explicitly log page load (optional)
    cy.log("Visiting contact page...");
    cy.visit("/contact"); // <-- only if this is a routed page

    // Step 2: Explicitly get and assert
    cy.get("div").then(($div) => {
      const text = $div.text();
      expect(text).to.match(/Name\s*:\s*John Dow/);
      expect(text).to.match(/Email\s*:\s*john\.dow@example\.com/);
    });

    cy.log("✅ Regex match test passed!");
  });
});

// 🧩 4. ✅ Regex Match (Flexible Partial Matching)
describe("Contact Page - Regex Match Test", () => {
  it("should verify all contact details using regex", () => {
    cy.visit("/contact");

    const patterns = [
      /Contact Page Information/,
      /Name\s*:\s*John Dow/,
      /Email\s*:\s*john\.dow@example\.com/,
      /Phone\s*:\s*\(123\)\s*456-7890/,
      /Address\s*:\s*123 Main St, Anytown, USA/,
      /Website\s*:\s*www\.johndow\.com/,
    ];

    cy.get("div")
      .invoke("text")
      .then((text) => {
        patterns.forEach((regex) => {
          cy.log(`🔍 Checking for: ${regex}`);
          expect(text).to.match(regex);
        });
      });

    cy.log("✅ All regex checks passed successfully!");
  });
});

describe("Navigation", () => {
  it("should navigate to the about page", () => {
    // Start from the index page
    cy.visit("/");

    // Find a link with an href attribute containing "about" and click it
    cy.get('a[href*="about"]').click();

    // The new url should include "/about"
    cy.url().should("include", "/about");

    // The new page should contain an h1 with "About"
    cy.get("h2").contains("About");
  });
});
