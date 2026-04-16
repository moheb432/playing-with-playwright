import {test, expect} from '@playwright/test';

test('assertions', async ({ page }) => {
  await page.goto('https://www.youtube.com/watch?v=TSGnV1oMgds&list=PLRhDWHbfIeMYC-Ejg0uRN6Xbwg_uEuOdx&index=12');
  await expect(page.locator('#feedback-btn')).toBeHidden();
});

test('assertions 2', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/dynamic_controls');
  await page.locator('#checkbox').click();
  await expect(page.locator("//*[@id='input-example']/input")).toBeDisabled();
  await page.getByRole('button', { name: 'Enable' }).click();
  await expect(page.locator("//*[@id='input-example']/input")).toBeEnabled();

})

test('to ve ss', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/dynamic_controls');
    await expect(page).toHaveScreenshot();
}
);