import { test, expect } from '@playwright/test';
import { data } from '../config/test.config';
import path from 'path';


test('enviar solicitud de reseteo con un correo no válido', async ({ page }) => {
  // Configurar tamaño de ventana (1920x1080 para pantalla completa)
  await page.setViewportSize({ width: 1530, height: 780 });

  // Navegar a la página de login
  await page.goto(data.urllogin);

  // Verificar que la URL es correcta
  await expect(page).toHaveURL(/\/login/);

  // Hacer clic en el botón de olvide contraseña
  await page.click('a[href="/olvide-contrasena"]');

  // Le indicamos que espere hasta que la pagina contenga 
  await expect(page.locator("//h1[contains(.,'¿Olvidaste tu contraseña?')]")).toBeVisible();

  // Verificar que la URL es correcta
  await expect(page).toHaveURL(/\/olvide-contrasena/);

    // Llenar el campo de usuario
    await page.fill('input[name="email"]', data.Emailinvalido);

  // Hacer clic en el botón de inicio de sesión
  await page.click('button[type="submit"]');

  // Le indicamos que espere hasta que la pagina contenga 
  await expect(page.locator('text="El correo electrónico no está registrado."')).toBeVisible();

    // Definir la ruta donde se guardarán las capturas
    const carpetaBase = path.join(__dirname, '..', 'screenshots', 'restablecer contrasenha');  // Usamos __dirname para referirnos a la ubicación actual del test

    // Definir el nombre del archivo de la captura
    const screenshotPath = path.join(carpetaBase, 'reseteo_con_un_correo_no_válido.png');
    
    // Guardar la captura de pantalla en la ruta especificada
    await page.screenshot({ path: screenshotPath, fullPage: true });
    
    console.log(`Captura de pantalla guardada en: ${screenshotPath}`);

});
``


