# Todo Camisetas

**Todo Camisetas** es una empresa fundada en 2023 y con sede en Santiago, Chile. Es un proveedor mayorista especializado en camisetas de fútbol de clubes nacionales e internacionales. Sus fundadores, Matías López y Camila Fuentes, detectaron que muchos vendedores locales carecían de acceso directo a productos de calidad a precios competitivos, por lo que decidieron crear un modelo de negocio basado en ventas B2B a tiendas minoristas en varias regiones del país.

---

## API: Funcionalidades CRUD

### 1. Gestión de Camisetas (Stock)

CRUD completo de productos, donde cada “camiseta” tiene los siguientes atributos:

- **Título:** Nombre descriptivo (ejemplo: “Camiseta Local 2025 – Selección Chilena”)
- **Club:** Nombre del club al que pertenece (ejemplo: “Selección Chilena”)
- **País:** Procedencia del diseño (ejemplo: “Chile”, “España”)
- **Tipo:** Clasificación del modelo (ejemplo: “Local”, “Visita”, “3era Camiseta”, “Femenino Local”, “Niño”)
- **Color:** Combinación principal de colores (ejemplo: “Blanco y Negro”)
- **Precio:** Valor base en pesos chilenos (ejemplo: 45 000)
- **Tallas disponibles:** Una o varias tallas asociadas (ejemplo: “S”, “M”, “L”, “XL”)
- **Detalles:** Texto adicional (ejemplo: “Edición aniversario 2025”)
- **Código de Producto:** SKU único (ejemplo: “SCL2025L”)

### 2. Gestión de Clientes

CRUD completo de clientes B2B, almacenando:

- **Nombre Comercial:** (ejemplo: “90minutos”)
- **RUT o ID Comercial:** Identificador tributario
- **Dirección:** Ciudad y región (ejemplo: “Providencia, Santiago”)
- **Categoría:** “Regular” o “Preferencial”
- **Contacto:** Nombre y correo del encargado de compras
- **Porcentaje de oferta:** Campo que permite obtener un descuento en porcentaje para los clientes en todos los productos

### 3. Logística de Precios de Oferta

La API debe calcular dinámicamente el precio final de una camiseta según el cliente que realiza la consulta:

- Si el `cliente_id` corresponde a “90minutos” (Categoría Preferencial) y la camiseta tiene `precio_oferta` definido, entonces el sistema debe devolver, al consultar el recurso, el campo `precio_final` igual a dicho `precio_oferta`.
- Si el `cliente_id` corresponde a “tdeportes” (Categoría Regular) o no existe ninguna oferta para esa camiseta, el sistema debe devolver `precio_final` igual a `precio` (precio base).
