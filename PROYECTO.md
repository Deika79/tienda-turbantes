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
- Ruta GET /api/products debería devolver productos desde MongoDB
- MongoDB Atlas conectado con Mongoose **(problema: los cambios recientes no se reflejan)**
- Modelo Product creado
- Variables de entorno en .env

## Frontend
- HTML, CSS y JS creados
- Fetch a /api/products funcionando localmente
- Mostrando las tarjetas de turbantes

## Próximo Paso
- Revisar conexión a MongoDB y URI
- Ver por qué los cambios en Atlas no se reflejan
- Solucionar antes de deploy

## Seguridad
- Archivo .env eliminado del repositorio
- .gitignore configurado para ignorar variables de entorno
- Credenciales de MongoDB regeneradas tras exposición

## Notas de Desarrollo
- El backend debe reiniciarse manualmente para reflejar cambios
- Ctrl + C para detener el servidor
- node src/index.js para arrancarlo de nuevo
- En el futuro se usará nodemon para auto-reload