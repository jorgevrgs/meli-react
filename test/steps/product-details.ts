import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { config } from "./support/config";
import { ICustomWorld } from "./support/custom-world";
// import { expect } from "@playwright/test";

Given(
  "I am on the product search results page",
  async function (this: ICustomWorld) {
    const page = this.page;
    await page?.goto(config.BASE_URL + "/items?search=apple%20watch");
  }
);

When("I click on the product name", async function () {
  const page = this.page;
  // look for and anchor inside section[role=listitem] and click on it
  await page?.locator("section[role=listitem] a").first().click();
  await page?.waitForURL(/\/items\/\w{3}\d+/);
});

Then("I should see the product detail page", async function () {
  const page = this.page;
  await page?.waitForSelector("role=article");
  await page?.screenshot({ path: "screenshots/product-details.png" });
  expect(page?.url()).toMatch(/\/items\/\w{3}\d+/);
});
