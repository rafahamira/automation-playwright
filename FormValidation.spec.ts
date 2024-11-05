import { test, expect } from '@playwright/test';

let name = 'DODO';
let mobileNumber = '012-3456789';
let date = '2024-11-05';
let paymentMethod = 'cashondelivery'

test('has title', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/form-validation');
  await page.locator('[name="ContactName"]').fill(name);
  await page.locator('[name="contactnumber"]').fill(mobileNumber);
  await page.locator('[name="pickupdate"]').fill(date);
  await page.locator('[name="payment"]').selectOption({ value: paymentMethod });
  await page.locator('[type="submit"]').click();
});
