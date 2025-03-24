
# Pruebas Automatizadas con Playwright en Producción

Este repositorio contiene la automatización de pruebas con Playwright para los módulos **Landing Page, Inicio de Sesión y Reseteo de Contraseña** en ambiente productivo.

## 📌 Requisitos

Antes de ejecutar las pruebas, asegúrese de contar con los siguientes requisitos:

- Node.js (versión 16 o superior)
- Playwright instalado
- Un navegador compatible con Playwright
- Configuración de las credenciales en un archivo de entorno (.env)

## 📂 Estructura del Proyecto

```
├── tests
│   ├── config
│   ├── test001-landing-page
│   ├── test002-inicio-de-sesion
│   ├── test003-reseteo-de-contraseña
├── package.json
├── README.md
└── .env
```

## 🚀 Instalación

Ejecute el siguiente comando para instalar las dependencias necesarias:

```sh
npm install
```

## 🏃 Ejecución de las Pruebas

Ejecute las pruebas con el siguiente comando:

```sh
npx playwright test
```

Para ejecutar un test específico:

```sh
npx playwright test tests/inicio_sesion.spec.ts
```

Para generar un reporte de pruebas:

```sh
npx playwright show-report
```

## 📊 Reportes

Los reportes se generan automáticamente en la carpeta `playwright-report`. Puede visualizar los resultados ejecutando:

```sh
npx playwright show-report
```

## 📌 Consideraciones

- Asegúrese de que el ambiente de producción esté disponible antes de ejecutar las pruebas.
- No utilizar credenciales reales en el repositorio; usar variables de entorno.
- Si las pruebas fallan, verificar logs y reportes generados para identificar posibles errores.

## 📞 Contacto

Para consultas o soporte, puede contactarme en [miguel.esquivel@itti.digital].

