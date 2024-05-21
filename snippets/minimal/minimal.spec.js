// =============================================================================
// EzE2E minimal test.
// goto webpage.
// =============================================================================

import { test } from '@playwright/test';

test ( 'goto a webpage' , async ( { page, baseURL }  ) =>
{
  await page.goto(baseURL);
}
) ;
