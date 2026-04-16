import {test,expect} from "playwright/test"
test ('actions1 click',async({page})=> {
await page.goto("https://the-internet.herokuapp.com/login");

await page.locator('#username').fill("tomsmith");
await page.locator('#password').fill("SuperSecretPassword!");
await page.locator("button[type='submit']").click({button:"right"});
await page.locator("button[type='submit']").dblclick();
}
);


test ('actions2 check',async({page})=> {
await page.goto("https://the-internet.herokuapp.com/checkboxes");
await page.locator('//*[@id="checkboxes"]/input[2]').uncheck();
await expect(page.locator('//*[@id="checkboxes"]/input[2]')).not.toBeChecked();
await page.locator('//*[@id="checkboxes"]/input[2]').check();
await expect(page.locator('//*[@id="checkboxes"]/input[2]')).toBeChecked();
}); 

test ('actions3 select',async({page})=> {
await page.goto("https://the-internet.herokuapp.com/dropdown");
await page.locator('#dropdown').selectOption('Option 2');
await expect(page.locator('#dropdown')).toHaveValue('2');
// await expect(page.locator('#dropdown')).toHaveText('Option 2');
await page.locator('#dropdown').click();
await page.locator('//*[@id="dropdown"]/option[2]').click();
await expect(page.locator('#dropdown')).toHaveValue('1');
});

test ('actions4 javascript allerts ',async({page})=> {
await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

let alertMessage = '';
page.on('dialog', async (alert) => {
  alertMessage = alert.message();
  console.log(alertMessage);
  await alert.accept();
});

await page.locator('//*[@id="content"]/div/ul/li[2]/button').click();
await expect(page.locator('#result')).toHaveText('You clicked: Ok');
expect(alertMessage).toBe('I am a JS Confirm');
});

test ('actions4 javascript allerts cancel ',async({page})=> {
await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

let alertMessage = '';
page.on('dialog', async (alert) => {
  alertMessage = alert.message();
  console.log(alertMessage);
  await alert.dismiss();
});

await page.locator('//*[@id="content"]/div/ul/li[2]/button').click();
await expect(page.locator('#result')).toHaveText('You clicked: Cancel');
expect(alertMessage).toBe('I am a JS Confirm');
});


test ('actions4 javascript prompts ',async({page})=> {
await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

let alertMessage = '';
page.on('dialog', async (alert) => {
  alertMessage = alert.message();
  alert.type() === 'prompt' && await alert.accept('Playwright');
  });

await page.locator('//*[@id="content"]/div/ul/li[3]/button').click();
await expect(page.locator('#result')).toHaveText('You entered: Playwright');
});
