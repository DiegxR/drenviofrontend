# Drenvio Frontend

## Introducción
Este proyecto es el frontend de la prueba tecnica, desarrollado con React y TypeScript. Utiliza **TailwindCSS** para el diseño de la interfaz y **React Router Dom** para el manejo de rutas. Además, está organizado en módulos para una mejor escalabilidad y mantenimiento.

## Instalación 
1. Clonar el repositorio con `git clone https://github.com/DiegxR/drenviofrontend.git`
2. Instalar dependencias con `npm install`
3. Crear un archivo .env y añadir la siguiente variable de entorno `REACT_APP_API_URL="http://drenviobackend-git-main-diegxrs-projects.vercel.app"`
4. Correr el proyecto con el comando `npm run start`
5. Para iniciar sesión puede usar el correo `admin@email.com` ahí verá todos los demás usuarios, pulsando click derecho podrá copiar el correo para loguearse posteriormente

## Justificación de Elecciones Técnicas

- **React con TypeScript**: Se utilizó TypeScript porque ayuda a mejorar la escalabilidad y el desarrollo del proyecto mediante tipado estático.
- **TailwindCSS**: Facilita el diseño responsivo y la personalización de estilos mediante clases utilitarias, acelerando el desarrollo de la UI.
- **React Router Dom**: Para manejar la navegación de manera eficiente en una SPA (Single Page Application).
- **Zustand**: Para gestionar el estado global de la aplicación de manera simple y escalable.
- **Axios**: Para realizar peticiones HTTP de forma fácil y mantenible.
- **React Toastify**: Para mostrar notificaciones de manera elegante.
- **Hero UI**: Se utilizó esta librería de componentes preconstruidos para mantener un diseño consistente y profesional.

## Descripción de la Estructura del Proyecto

## Arquitectura
Se uso una arquitectura modular para separar cada vista en modules diferentes haciendo que sean más accesibles, escalables y fáciles de comprender

### Descripción de Carpetas
- **constants/**: Contiene las variables de entorno.
- **modules/**: Organiza el proyecto en módulos independientes para un mantenimiento más sencillo y una escalabilidad adecuada. Los modulos contienen uni indice .tsx con el nombre del mismo, una carpeta llamada `components` donde se pone las estructuras individuales del módulo y `hooks` donde se aisla los custom hooks para lógicas complejas usadas en los componentes
- **services/**: Se gestionan las llamadas a la API utilizando Axios para mantener un acceso centralizado y limpio a los endpoints.
- **store/**: Utiliza Zustand para gestionar el estado global de manera eficiente.
- **types/**: Define las interfaces y tipos de datos utilizados en toda la aplicación, mejorando la tipificación estática con TypeScript.

