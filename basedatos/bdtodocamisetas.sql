CREATE TABLE `camiseta`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `titulobigint` VARCHAR(255) NOT NULL,
    `club` VARCHAR(255) NOT NULL,
    `pais` VARCHAR(255) NOT NULL,
    `tipo` VARCHAR(255) NOT NULL,
    `color` VARCHAR(255) NOT NULL,
    `precio` BIGINT NOT NULL,
    `tallas disponibles` CHAR(255) NOT NULL,
    `detalles` VARCHAR(255) NOT NULL,
    `codigo de producto` VARCHAR(255) NOT NULL
);
CREATE TABLE `cliente`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `nombre` BIGINT NOT NULL,
    `rut` BIGINT NOT NULL,
    `direccion` BIGINT NOT NULL,
    `categoria` BIGINT NOT NULL,
    `contacto` BIGINT NOT NULL,
    `porcentaje de oferta` BIGINT 
);
CREATE TABLE `preciodeoferta`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `id_camiseta` BIGINT UNSIGNED NOT NULL,
    `id_cliente` BIGINT UNSIGNED NOT NULL,
    `precio` BIGINT NOT NULL
);
ALTER TABLE
    `preciodeoferta` ADD UNIQUE `preciodeoferta_id_camiseta_unique`(`id_camiseta`);
ALTER TABLE
    `preciodeoferta` ADD UNIQUE `preciodeoferta_id_cliente_unique`(`id_cliente`);
ALTER TABLE
    `preciodeoferta` ADD CONSTRAINT `preciodeoferta_id_cliente_foreign` FOREIGN KEY(`id_cliente`) REFERENCES `cliente`(`id`);
ALTER TABLE
    `preciodeoferta` ADD CONSTRAINT `preciodeoferta_id_camiseta_foreign` FOREIGN KEY(`id_camiseta`) REFERENCES `camiseta`(`id`);