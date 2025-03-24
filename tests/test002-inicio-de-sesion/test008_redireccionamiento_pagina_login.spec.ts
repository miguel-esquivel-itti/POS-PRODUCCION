import { test, expect } from '@playwright/test';
import { data } from '../config/test.config';
import path from 'path';

test('Ingreso de contrasenha incorrecto', async ({ page }) => {
  // Configurar tamaño de ventana (1920x1080 para pantalla completa)
  await page.setViewportSize({ width: 1530, height: 780 });

  // Navegar a la página de login
  await page.goto(data.url);

  // Hacer clic en el botón ingresar
  page.locator("text=Ingresar").click()

  page.locator("text=Ingresar con usuario y contraseña").click()

  await page.waitForTimeout(3000);  // Espera 3 segundos

  // Verificar que la URL es correcta
  await expect(page).toHaveURL(/\/login/);



  // Definir la ruta donde se guardarán las capturas
  const carpetaBase = path.join(__dirname, '..','screenshots','inicio de sesión');  // Usamos __dirname para referirnos a la ubicación actual del test

  // Definir el nombre del archivo de la captura
  const screenshotPath = path.join(carpetaBase, 'redireccionamiento_pagina_login.png');
      
  // Guardar la captura de pantalla en la ruta especificada
  await page.screenshot({ path: screenshotPath, fullPage: true });
      
  console.log(`Captura de pantalla guardada en: ${screenshotPath}`);

 
});
``


