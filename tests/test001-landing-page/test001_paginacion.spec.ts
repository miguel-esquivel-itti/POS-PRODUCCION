import { test, expect } from '@playwright/test';
import { data } from '../config/test.config';
import path from 'path';
import fs from 'fs';

test('test', async ({ page }) => {
  await page.goto(data.url);

  // Definir la carpeta para las capturas de pantalla
  const carpetaBase = path.join(__dirname, '..', 'screenshots', 'landing page');
  if (!fs.existsSync(carpetaBase)) {
    fs.mkdirSync(carpetaBase, { recursive: true });
  }

  // Lista de enlaces y sus URLs esperadas
  const enlaces = [
    { name: 'upay logo', expectedUrl: null },
    { name: 'Inicio', expectedUrl: null },
    { name: 'Quienes somos', expectedUrl: /\/#quienes-somos/ },
    { name: 'Soluciones', expectedUrl: /\/#servicios/ },
    { name: 'Portal upay', expectedUrl: /\/#portal/ },
    { name: 'FAQ', expectedUrl: /\/#faq/ },
    { name: 'Contacto', expectedUrl: /\/#contacto/ },
    { name: 'Inicio', expectedUrl: null },
    { name: 'Quienes somos', expectedUrl: /\/#quienes-somos/ },
    { name: 'Soluciones', expectedUrl: /\/#servicios/ },
  ];

  // Iterar sobre los enlaces y hacer clic
  for (const [index, { name, expectedUrl }] of enlaces.entries()) {
    const link = page.getByRole('navigation').getByRole('link', { name });

    await link.waitFor();
    await link.click();

    if (expectedUrl) {
      await expect(page).toHaveURL(expectedUrl);
    }

    // Guardar captura de pantalla con un nombre único
    const screenshotPath = path.join(carpetaBase, `paso_${index + 1}_${name.replace(/\s/g, '_')}.png`);
    await page.screenshot({ path: screenshotPath, fullPage: true });
    console.log(`📸 Captura de pantalla guardada en: ${screenshotPath}`);
  }
});
