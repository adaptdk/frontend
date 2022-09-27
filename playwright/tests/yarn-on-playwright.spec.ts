import { test, expect } from "@playwright/test";

test("test that yarn is accessible on docs intro", async ({ page }) => {
  // Go to https://playwright.dev/
  await page.goto("https://playwright.dev/");

  // Click a:has-text("Docs")
  await page.locator('a:has-text("Docs")').click();
  await expect(page).toHaveURL("https://playwright.dev/docs/intro");

  // Click li[role="tab"]:has-text("yarn")
  await page.locator('li[role="tab"]:has-text("yarn")').click();

  // Click text=create playwright
  await page.locator("text=create playwright").click();

  // Click code:has-text("yarn create playwright")
  await page.locator('code:has-text("yarn create playwright")').click();
});
