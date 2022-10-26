import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  // Go to https://adaptagency.com/
  await page.goto("https://adaptagency.com/");

  // Click [aria-label="Accept all"]
  await page.locator('[aria-label="Accept all"]').click();

  // Click a:has-text("Careers6")
  await page.locator('a:has-text("Careers6")').click();
  await expect(page).toHaveURL("https://adaptagency.com/careers");

  // Click text=Interactive Designer
  const [page1] = await Promise.all([
    page.waitForEvent("popup"),
    page.locator("text=Interactive Designer").click(),
  ]);

  // Click h1:has-text("Interactive Designer")
  await page1.locator('h1:has-text("Interactive Designer")').click();
});
