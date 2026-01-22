turbantes-backend/
 ├─ src/
 │   ├─ index.js
 │   ├─ routes/
 │   │   └─ products.routes.js
 │   ├─ models/
 │   │   └─ Product.js
 │   └─ db.js
 ├─ package.json
 └─ .env

Parte	Herramienta
Frontend	HTML + CSS + JS
Backend	Node.js + Express
Base de datos	MongoDB Atlas (gratis)
Comunicación	Fetch + JSON
Pruebas	Postman
Código	VS Code
Control versiones	Git + GitHub
Deploy frontend	Vercel
Deploy backend	Render o Railway
Contenedores	Docker (opcional, luego)

Mongodb Cluster0 8cHNZ3yLoGuNUgbQ   dgarcia_db_user
password database user: r5QJ_tvqb$W2ZC#

# Tienda de Turbantes - Estado Actual

## Backend
- Servidor Node.js + Express funcionando
- Ruta GET /api/products devuelve JSON desde MongoDB
- MongoDB Atlas conectado con Mongoose
- Modelo Product creado
- Variables de entorno en .env

## Frontend
- Estructura de archivos creada (index.html, style.css, script.js)
- No conectado aún con backend

## Próximo Paso
- Hacer fetch desde frontend a /api/products
- Mostrar turbantes dinámicamente en HTML
- Estilizar con CSS básico

## Deploy
- Backend: pendiente (Render o Railway)
- Frontend: pendiente (Vercel)
