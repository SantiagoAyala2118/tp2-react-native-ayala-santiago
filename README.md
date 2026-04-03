# LuxDrive API & Concesionaria - Fullstack 

 Aplicación fullstack con arquitectura cliente-servidor desarrollada para la gestión integral de una flota de vehículos de lujo. 

 Este proyecto es el resultado del **Trabajo Práctico N.º 2** correspondiente a la asignatura **Taller de Lenguajes de Programación III**.

##  Datos Académicos
* **Institución:** Instituto Politécnico Formosa 
* **Docente a cargo:** Rolón Lautaro Emanuel 
* **Docente auxiliar:** Mereles Juliana Aracelli
* **Estudiante:** Ayala Santiago Tomas
* **Fecha de entrega:** 06/04/2026 

---

##  Tecnologías Utilizadas

El proyecto está organizado estrictamente en dos directorios principales para separar la lógica del servidor y la interfaz de usuario.

### Backend (`/backend`)
* **Node.js & Express:** Creación de una API RESTful robusta.
* **Sequelize & MySQL:** ORM y base de datos relacional.
* **Características:** * Configuración de CORS habilitada.
  * Parseo de datos con `express.json()`.
  * Validación de campos obligatorios y manejo de estados HTTP (400, 404, 500).
  * Endpoints implementados para operaciones GET (todos y por ID), POST, PUT y DELETE.

### Frontend (`/frontend`)
* **React.js (Vite):** Desarrollo de una interfaz de usuario reactiva.
* **Tailwind CSS:** Diseño moderno, responsivo y con paleta de colores personalizada (Dark/Premium theme).
* **Características:**
  * Uso intensivo de Hooks (`useState`, `useEffect`) y Custom Hooks para la gestión del estado.
  * Consumo de la API mediante la API `fetch` asíncrona.
  * Componentización avanzada (App, Lista, Ítem, Formulario Modal, Barra de Búsqueda).
  * Manejo de estados de carga (Loading) y visualización de errores.

---

##  Instrucciones de Ejecución

Para evaluar el proyecto, es necesario levantar ambos entornos de manera local. 

> **Aviso Importante:** Asegúrese de contar con Node.js y un motor de base de datos MySQL (ej. XAMPP) instalados. Las carpetas `node_modules` no están incluidas en el repositorio por buenas prácticas, por lo que deberán instalarse las dependencias manualmente.

### 1. Configuración del Servidor (Backend)
1. Abrir una terminal y navegar al directorio del backend:
   ```bash
   cd backend
2. Instalar dependencias:
   ```bash
   npm install
   ```
3. Configurar las variables de entorno cambiando el nombre del archivo `.env.example` a `.env` y rellenando los campos puestos con sus credenciales de MySQL.
4. Poblar la base de datos con los vehiculos por defecto ejecutando el script (seeder):
   ```bash
   npm run seed:cars
   ```
   o en su defecto
   ```bash
    node /src/scripts/carSeed.js
   ```
5. Iniciar el servidor:
   ```bash
   npm run dev
   ```
La api estara escuchando en el puerto `http://localhost:{el puerto que usted configuro}`.  
### 2. Configuracion de la interfaz (Frontend)
1. Abrir una nueva terminal y navegar a la carpeta frontend:
   ```bash
    cd frontend
   ```
2. Instalar dependencias:
   ```bash
    npm install
   ```
3. Levantar el servidor de Vite
   ```bash
    npm run dev
   ```
4. Abrir el navegador en http://localhost:5173 para interactuar con la plataforma y visualizar el flujo de datos entre el cliente y el servidor.
