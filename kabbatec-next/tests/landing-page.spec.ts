import { test, expect } from '@playwright/test';

test('Visualizar landing page', async ({ page }) => {
  // Navegar para a landing page
  await page.goto('http://localhost:3000', { waitUntil: 'domcontentloaded' });

  // Aguardar um pouco
  await page.waitForTimeout(2000);

  // Screenshot para visualização
  await page.screenshot({ path: 'landing-page-screenshot.png', fullPage: true });

  // Manter a página aberta por 10 segundos para visualização
  await page.waitForTimeout(10000);
});