import {test , expect , APIRequestContext} from '@playwright/test';
  test('should have the correct API version', async ({request}) => {
   const req = await request.get('https://api.restful-api.dev/objects');
   console.log(await req.json());
    expect(req.status()).toBe(200);
//    await expect(req.json()).toEqual({ version: '1.0.0' });
});