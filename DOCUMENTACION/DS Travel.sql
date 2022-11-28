
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`agencia`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`agencia` (
  `id_agencia` INT NOT NULL AUTO_INCREMENT,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_agencia`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`pais`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`pais` (
  `id_pais` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_pais`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`region`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`region` (
  `id_region` INT NOT NULL AUTO_INCREMENT,
  `id_pais` INT NULL,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_region`),
  INDEX `fk_region_pais1_idx` (`id_pais` ASC) VISIBLE,
  CONSTRAINT `fk_region_pais1`
    FOREIGN KEY (`id_pais`)
    REFERENCES `mydb`.`pais` (`id_pais`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`ciudad`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`ciudad` (
  `id_ciudad` INT NOT NULL AUTO_INCREMENT,
  `id_region` INT NOT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  `codigoPostal` VARCHAR(45) NOT NULL,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_ciudad`),
  INDEX `fk_ciudad_region1_idx` (`id_region` ASC) VISIBLE,
  CONSTRAINT `fk_ciudad_region1`
    FOREIGN KEY (`id_region`)
    REFERENCES `mydb`.`region` (`id_region`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`direccion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`direccion` (
  `id_direccion` INT NOT NULL AUTO_INCREMENT,
  `id_ciudad` INT NULL,
  `altura` INT NULL,
  `calle` VARCHAR(45) NULL,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_direccion`),
  INDEX `fk_direccion_ciudad1_idx` (`id_ciudad` ASC) VISIBLE,
  CONSTRAINT `fk_direccion_ciudad1`
    FOREIGN KEY (`id_ciudad`)
    REFERENCES `mydb`.`ciudad` (`id_ciudad`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`usuario` (
  `id_usuario` INT NOT NULL AUTO_INCREMENT,
  `id_agencia` INT NOT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  `apellido` VARCHAR(45) NOT NULL,
  `correo` VARCHAR(45) NOT NULL,
  `rol` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `dni` INT NULL,
  `telefono` INT NULL,
  `fechaNacimiento` DATE NULL,
  `tipoDocumento` VARCHAR(45) NULL,
  `id_direccion` INT NULL,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_usuario`),
  INDEX `fk_usuario_agencia1_idx` (`id_agencia` ASC) VISIBLE,
  UNIQUE INDEX `correo_UNIQUE` (`correo` ASC) VISIBLE,
  INDEX `fk_usuario_direccion1_idx` (`id_direccion` ASC) VISIBLE,
  CONSTRAINT `fk_usuario_agencia1`
    FOREIGN KEY (`id_agencia`)
    REFERENCES `mydb`.`agencia` (`id_agencia`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_usuario_direccion1`
    FOREIGN KEY (`id_direccion`)
    REFERENCES `mydb`.`direccion` (`id_direccion`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`aeropuerto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`aeropuerto` (
  `id_aeropuerto` INT NOT NULL AUTO_INCREMENT,
  `id_region` INT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  `latitud` DOUBLE NOT NULL,
  `longitud` DOUBLE NOT NULL,
  `codigo` INT NOT NULL,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_aeropuerto`),
  INDEX `fk_aeropuerto_region1_idx` (`id_region` ASC) VISIBLE,
  CONSTRAINT `fk_aeropuerto_region1`
    FOREIGN KEY (`id_region`)
    REFERENCES `mydb`.`region` (`id_region`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`pago`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`pago` (
  `id_pago` INT NOT NULL AUTO_INCREMENT,
  `monto` INT NULL,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_pago`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`reserva`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`reserva` (
  `id_reserva` INT NOT NULL AUTO_INCREMENT,
  `id_pago` INT NOT NULL,
  `estado` VARCHAR(45) NOT NULL,
  `id_usuario` INT NULL,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_reserva`),
  INDEX `fk_reserva_pago1_idx` (`id_pago` ASC) VISIBLE,
  INDEX `fk_reserva_usuario1_idx` (`id_usuario` ASC) VISIBLE,
  CONSTRAINT `fk_reserva_pago1`
    FOREIGN KEY (`id_pago`)
    REFERENCES `mydb`.`pago` (`id_pago`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_reserva_usuario1`
    FOREIGN KEY (`id_usuario`)
    REFERENCES `mydb`.`usuario` (`id_usuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`avion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`avion` (
  `id_avion` INT NOT NULL AUTO_INCREMENT,
  `aerolinea` VARCHAR(45) NULL,
  `cantAsientos` INT NULL,
  `matricula` VARCHAR(45) NULL,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_avion`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`oferta`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`oferta` (
  `id_oferta` INT NOT NULL AUTO_INCREMENT,
  `fechaInicio` DATE NULL,
  `fechaFin` DATE NULL,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_oferta`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`vuelo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`vuelo` (
  `id_vuelo` INT NOT NULL AUTO_INCREMENT,
  `id_avion` INT NOT NULL,
  `id_oferta` INT NULL,
  `aeropuertoOrigen` VARCHAR(45) NULL,
  `aeropuertoDestino` VARCHAR(45) NULL,
  `fechaYHoraArribo` DATETIME NULL,
  `fechaYHoraPartida` DATETIME NULL,
  `precio` FLOAT NULL,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_vuelo`),
  INDEX `fk_vuelo_avion1_idx` (`id_avion` ASC) VISIBLE,
  INDEX `fk_vuelo_oferta1_idx` (`id_oferta` ASC) VISIBLE,
  CONSTRAINT `fk_vuelo_avion1`
    FOREIGN KEY (`id_avion`)
    REFERENCES `mydb`.`avion` (`id_avion`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_vuelo_oferta1`
    FOREIGN KEY (`id_oferta`)
    REFERENCES `mydb`.`oferta` (`id_oferta`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`servicio`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`servicio` (
  `id_servicio` INT NOT NULL AUTO_INCREMENT,
  `id_reserva` INT NOT NULL,
  `id_agencia` INT NOT NULL,
  `id_vuelo` INT NOT NULL,
  `precio` VARCHAR(45) NOT NULL,
  `fechaInicio` DATE NOT NULL,
  `fechaFin` DATE NOT NULL,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_servicio`),
  INDEX `fk_servicio_reserva1_idx` (`id_reserva` ASC) VISIBLE,
  INDEX `fk_servicio_agencia1_idx` (`id_agencia` ASC) VISIBLE,
  INDEX `fk_servicio_vuelo1_idx` (`id_vuelo` ASC) VISIBLE,
  CONSTRAINT `fk_servicio_reserva1`
    FOREIGN KEY (`id_reserva`)
    REFERENCES `mydb`.`reserva` (`id_reserva`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_servicio_agencia1`
    FOREIGN KEY (`id_agencia`)
    REFERENCES `mydb`.`agencia` (`id_agencia`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_servicio_vuelo1`
    FOREIGN KEY (`id_vuelo`)
    REFERENCES `mydb`.`vuelo` (`id_vuelo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`asiento`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`asiento` (
  `id_asiento` INT NOT NULL AUTO_INCREMENT,
  `id_avion` INT NOT NULL,
  `clase` VARCHAR(45) NULL,
  `estado` VARCHAR(45) NULL,
  `numero` INT NULL,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_asiento`),
  INDEX `fk_asiento_avion1_idx` (`id_avion` ASC) VISIBLE,
  CONSTRAINT `fk_asiento_avion1`
    FOREIGN KEY (`id_avion`)
    REFERENCES `mydb`.`avion` (`id_avion`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
