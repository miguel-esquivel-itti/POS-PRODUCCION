import { test, expect } from '@playwright/test';
import { data } from '../config/test.config';
import path from 'path';

test('Ingreso de solo el contraseña', async ({ page }) => {
  // Configurar tamaño de ventana (1920x1080 para pantalla completa)
  await page.setViewportSize({ width: 1530, height: 780 });

  // Navegar a la página de login
  await page.goto(data.urllogin);

  // Verificar que la URL es correcta
  await expect(page).toHaveURL(/\/login/);

  // Llenar el campo de contraseña
  await page.fill('input[name="password"]', data.Passwordconsulta);

  // Hacer clic en el botón de inicio de sesión
  await page.click('button[type="submit"]');

  // Le indicamos que espere hasta que la pagina contenga 
  await expect(page.locator('text="Correo electrónico es obligatorio"')).toBeVisible({ timeout: 5000 });

  // Definir la ruta donde se guardarán las capturas
  const carpetaBase = path.join(__dirname, '..', 'screenshots','inicio de sesión');  // Usamos __dirname para referirnos a la ubicación actual del test

  // Definir el nombre del archivo de la captura
  const screenshotPath = path.join(carpetaBase, 'Ingreso_de_solo_el_contraseña.png');
    
  // Guardar la captura de pantalla en la ruta especificada
  await page.screenshot({ path: screenshotPath, fullPage: true });
    
  console.log(`Captura de pantalla guardada en: ${screenshotPath}`);

 
});
``