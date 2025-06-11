Proyecto Todo Camisetas
Índice
Descripción General
Arquitectura
Estructura de Carpetas
Base de Datos
API REST
Camisetas
Clientes
Precios de Oferta
Lógica de Negocio
Ejemplos de Uso
Autores
Descripción General
Todo Camisetas es un sistema backend para la gestión mayorista de camisetas de fútbol, orientado a ventas B2B. Permite administrar productos, clientes y precios de oferta personalizados, calculando dinámicamente el precio final según la categoría del cliente y sus descuentos.

Arquitectura
Backend: Node.js + Express
Base de datos: MariaDB/MySQL
Modelo de datos: Relacional, con tablas para camisetas, clientes y precios de oferta.
API: RESTful, CRUD completo para cada entidad principal.
Estructura de Carpetas
app.js
Archivo principal que inicializa la aplicación Express y monta los routers.

basedatos/
Contiene el script SQL para crear y poblar la base de datos.

controllers/
Lógica de negocio y controladores para cada entidad (camiseta, cliente, precio de oferta).

models/
Modelos de datos y funciones para interactuar con la base de datos.

routers/
Rutas de la API REST y router principal.

README.md
Documentación general del proyecto.

Base de Datos
Tablas principales:

camiseta: Información de cada producto.
cliente: Datos de clientes B2B.
preciodeoferta: Precios personalizados por cliente y camiseta.
Consulta el archivo bdtodocamisetas.sql para el detalle de la estructura.

API REST
Camisetas
GET /api/camisetas
Lista todas las camisetas.
POST /api/camisetas/create
Crea una nueva camiseta.
PUT /api/camisetas/update
Actualiza una camiseta existente.
DELETE /api/camisetas/remove
Elimina una camiseta.
Atributos de camiseta:
Título, Club, País, Tipo, Color, Precio, Tallas disponibles, Detalles, Código de producto.

Clientes
GET /api/clientes
Lista todos los clientes.
POST /api/clientes/create
Crea un nuevo cliente.
PUT /api/clientes/update
Actualiza un cliente existente.
DELETE /api/clientes/remove
Elimina un cliente.
Atributos de cliente:
Nombre comercial, RUT o ID comercial, Dirección, Categoría (Regular/Preferencial), Contacto (nombre y correo), Porcentaje de oferta.

Precios de Oferta
GET /api/preciodeoferta
Lista todos los precios de oferta.
POST /api/preciodeoferta
Crea un precio de oferta personalizado.
PUT /api/preciodeoferta
Actualiza el precio de oferta según la lógica de negocio.
DELETE /api/preciodeoferta
Elimina un precio de oferta.
Lógica de Negocio
El precio final de una camiseta para un cliente se calcula así:
Si el cliente es preferencial y tiene un porcentaje de oferta, el precio final es el precio base menos el porcentaje de descuento.
Si el cliente es regular o no tiene oferta, el precio final es el precio base.
Los precios de oferta se almacenan en la tabla preciodeoferta y se recalculan automáticamente al actualizar los datos del cliente o producto.
Ejemplo de Uso
Crear una camiseta:

POST /api/camisetas/create
{
  "titulobigint": "Camiseta Local 2025",
  "club": "Deportivo Cali",
  "pais": "Colombia",
  "tipo": "Local",
  "color": "Blanco",
  "precio": 30000,
  "tallasdisponibles": "S,M,L,XL",
  "detalles": "Edición especial",
  "codigodeproducto": "COLCAL2025L"
}
Autores
ALEJANDRO GAMBIN FAJARDO
FREDERICK GIOVANNI IRIBARREN BARRAZA