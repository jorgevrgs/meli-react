import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { config } from "./support/config";
import { ICustomWorld } from "./support/custom-world";

Given("I am on the home page", async function (this: ICustomWorld) {
  const page = this.page;
  await page?.goto(config.BASE_URL);
  await page?.screenshot({ path: "screenshots/home-page.png" });
});

When(
  "I enter the product name in the search box",
  function (this: ICustomWorld) {
    const page = this.page;
    page?.locator("input[type='search']").fill("apple watch");
  }
);

When("I click on the search button", async function (this: ICustomWorld) {
  const page = this.page;
  await page?.locator("button[type='button']").click();
  await page?.screenshot({ path: "screenshots/search-box.png" });
  await page?.waitForURL(config.BASE_URL + "/items?search=apple%20watch");
});

Then(
  "I should see the product search results page",
  async function (this: ICustomWorld) {
    const page = this.page;
    await page?.waitForSelector("div[role=list]");
    await page?.screenshot({ path: "screenshots/search-results.png" });
    expect(page?.locator("div[role=list]")).toBeDefined();
  }
);

Then(
  "I should see max {int} products",
  async function (this: ICustomWorld, qty: number) {
    const page = this.page;
    const actual = await page?.locator("section[role=listitem]").all();
    expect(actual).toHaveLength(qty);
  }
);
