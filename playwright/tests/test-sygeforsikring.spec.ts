import { test, expect } from "@playwright/test";

test("bliv medlem has a button", async ({ page }) => {
  // Go to https://www.sygeforsikring.dk/
  await page.goto("https://www.sygeforsikring.dk/");

  // Click button:has-text("Jeg accepterer")
  await page.locator('button:has-text("Jeg accepterer")').click();

  // Click .group > .w-4 >> nth=0
  await page.locator(".group > .w-4").first().click();
  await expect(page).toHaveURL("https://www.sygeforsikring.dk/indmeldelse");

  // Click h1:has-text("Bliv medlem")
  await page.locator('h1:has-text("Bliv medlem")').click();
});
