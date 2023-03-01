-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: mydb
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `aeropuerto`
--

LOCK TABLES `aeropuerto` WRITE;
/*!40000 ALTER TABLE `aeropuerto` DISABLE KEYS */;
INSERT INTO `aeropuerto` VALUES (1,NULL,'Aeroparque Internacional Jorge Newbery','34°33′32″S','58°24′59″O','AEP','2023-02-25 19:55:40',NULL),(2,NULL,'Aeropuerto Comodoro Ricardo Salomón','35°29′00″S','69°35′04″O','LGS ','2023-02-25 19:55:40',NULL),(3,NULL,'Aeropuerto Almirante Marcos A. Zar','43°12′35″S','65°17′02″O','REL','2023-02-25 19:55:40',NULL),(4,1,'Aeropuerto Internacional de Ezeiza Ministro Pistarini','34°49′15″S','58°32′31″O','EZE','2023-02-26 20:07:15',NULL),(5,2,'Aeropuerto Internacional de Mendoza','32°49′54″S','68°47′00″O','MDZ','2023-02-26 20:07:15',NULL),(6,3,'Aeropuerto General Enrique Mosconi','45°47′24″S','67°28′20″O','CRD','2023-02-26 20:07:15',NULL),(7,4,'Aeropuerto Internacional Mariscal Sucre','0°7′57″N','78°28′25″O','UIO','2023-02-26 20:07:15',NULL),(8,4,'Aeropuerto Internacional José Joaquín de Olmedo','2°09′43″S','79°52′33″O','GYE','2023-02-26 20:07:15',NULL),(9,3,'Aeropuerto Internacional Jorge Chávez','12°01′47″S','77°06′12″O','LIM','2023-02-26 20:07:15',NULL),(10,3,'Aeropuerto Internacional Alejandro Velasco Astete','13°32′47″S','71°56′21″O','CUZ','2023-02-26 20:07:15',NULL);
/*!40000 ALTER TABLE `aeropuerto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `agencia`
--

LOCK TABLES `agencia` WRITE;
/*!40000 ALTER TABLE `agencia` DISABLE KEYS */;
INSERT INTO `agencia` VALUES (1,'2023-02-25 19:55:40',NULL);
/*!40000 ALTER TABLE `agencia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `asiento`
--

LOCK TABLES `asiento` WRITE;
/*!40000 ALTER TABLE `asiento` DISABLE KEYS */;
INSERT INTO `asiento` VALUES (1,1,'ejecutivo','libre',1,'2022-10-11 10:00:00',NULL),(2,1,'ejecutivo','reservado',2,'2022-10-11 10:00:00',NULL),(3,1,'turista','reservado',3,'2022-10-11 10:00:00',NULL),(4,1,'turista','libre',4,'2022-10-11 10:00:00',NULL),(5,2,'premium','libre',1,'2022-08-01 15:00:00','2022-12-15 09:00:00'),(6,2,'premium','libre',2,'2022-08-01 15:00:00','2022-12-15 09:00:00'),(7,1,'turista','libre',3,'2022-08-01 15:00:00','2022-12-15 09:00:00'),(8,1,'turista','reservado',4,'2022-08-01 15:00:00','2022-12-15 09:00:00');
/*!40000 ALTER TABLE `asiento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `avion`
--

LOCK TABLES `avion` WRITE;
/*!40000 ALTER TABLE `avion` DISABLE KEYS */;
INSERT INTO `avion` VALUES (1,'FlyBondi',660,'LV-JTC','2023-02-25 19:55:40',NULL),(2,'Aerolineas Argentinas',400,'LV-JTP','2023-02-25 19:55:40',NULL),(3,'FlyBondi',660,'LV-JTE','2023-02-25 19:55:40',NULL),(4,'LATAM Airlines',250,'LV-FUB','2023-02-26 20:07:26',NULL),(5,'Sky Airline',200,'CC-ABL','2023-02-26 20:07:26',NULL),(6,'JetSMART',186,'CC-AWA','2023-02-26 20:07:26',NULL),(7,'Avianca',100,'N854AV','2023-02-26 20:07:26',NULL),(8,'TAME',60,'HC-CDY','2023-02-26 20:07:26',NULL),(9,'Peruvian Airlines',50,'OB-1878P','2023-02-26 20:07:26',NULL),(10,'Viva Air Peru',35,'OB-1886-P','2023-02-26 20:07:26',NULL);
/*!40000 ALTER TABLE `avion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `ciudad`
--

LOCK TABLES `ciudad` WRITE;
/*!40000 ALTER TABLE `ciudad` DISABLE KEYS */;
INSERT INTO `ciudad` VALUES (1,1,'Ciudad Autónoma de Buenos Aires',1802,'2023-02-26 17:58:56',NULL),(2,2,'Malargüe',5613,'2023-02-26 17:58:56',NULL),(3,1,'Trelew',9100,'2023-02-26 17:58:56',NULL),(4,1,'La Plata',1900,'2023-02-26 20:08:19',NULL),(5,2,'San Rafael',5600,'2023-02-26 20:08:19',NULL),(6,3,'Mar del Plata',7600,'2023-02-26 20:08:19',NULL),(7,3,'Puerto Madryn',9120,'2023-02-26 20:08:19',NULL),(8,4,'Guayaquil',90150,'2023-02-26 20:08:19',NULL);
/*!40000 ALTER TABLE `ciudad` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `direccion`
--

LOCK TABLES `direccion` WRITE;
/*!40000 ALTER TABLE `direccion` DISABLE KEYS */;
INSERT INTO `direccion` VALUES (1,1,NULL,'Av. Costanera Rafael Obligado','2023-02-26 17:59:33',NULL),(2,2,NULL,'Ruta Nacional 40 Sur','2023-02-26 17:59:33',NULL),(3,1,NULL,' Ruta 3','2023-02-26 17:59:33',NULL),(4,5,1200,'Av. Hipolito Yrigoyen','2023-02-26 20:08:29',NULL),(5,6,3000,'Av. Independencia','2023-02-26 20:08:29',NULL),(6,7,200,'Av. Rawson','2023-02-26 20:08:29',NULL),(7,8,100,'Av. Malecón Simón Bolívar','2023-02-26 20:08:29',NULL);
/*!40000 ALTER TABLE `direccion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `oferta`
--

LOCK TABLES `oferta` WRITE;
/*!40000 ALTER TABLE `oferta` DISABLE KEYS */;
/*!40000 ALTER TABLE `oferta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `pago`
--

LOCK TABLES `pago` WRITE;
/*!40000 ALTER TABLE `pago` DISABLE KEYS */;
INSERT INTO `pago` VALUES (1,346,'2023-02-26 17:59:33',NULL),(2,406,'2023-02-26 17:59:33',NULL),(3,406,'2023-02-26 17:59:33',NULL);
/*!40000 ALTER TABLE `pago` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `pais`
--

LOCK TABLES `pais` WRITE;
/*!40000 ALTER TABLE `pais` DISABLE KEYS */;
INSERT INTO `pais` VALUES (1,'Argentina','2023-02-26 17:59:33',NULL),(2,'Ecuador','2023-02-26 17:59:33',NULL),(3,'Perú','2023-02-26 17:59:33',NULL),(4,'Brasil','2023-02-26 20:07:51',NULL),(5,'Colombia','2023-02-26 20:07:51',NULL),(6,'Uruguay','2023-02-26 20:07:51',NULL),(7,'Chile','2023-02-26 20:07:51',NULL),(8,'Paraguay','2023-02-26 20:07:51',NULL),(9,'Bolivia','2023-02-26 20:07:51',NULL),(10,'Perú','2023-02-26 20:07:51',NULL),(11,'Ecuador','2023-02-26 20:07:51',NULL),(12,'Venezuela','2023-02-26 20:07:51',NULL),(13,'Guyana','2023-02-26 20:07:51',NULL);
/*!40000 ALTER TABLE `pais` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `region`
--

LOCK TABLES `region` WRITE;
/*!40000 ALTER TABLE `region` DISABLE KEYS */;
INSERT INTO `region` VALUES (1,1,'Buenos Aires','2023-02-26 17:59:33',NULL),(2,1,'Mendoza','2023-02-26 17:59:33',NULL),(3,1,'Chubut','2023-02-26 17:59:33',NULL),(4,2,'Quito','2023-02-26 17:59:33',NULL),(5,4,'Sao Paulo','2023-02-26 20:08:08',NULL),(6,4,'Rio de Janeiro','2023-02-26 20:08:08',NULL),(7,5,'Bogota','2023-02-26 20:08:08',NULL),(8,5,'Medellin','2023-02-26 20:08:08',NULL),(9,6,'Montevideo','2023-02-26 20:08:08',NULL),(10,6,'Maldonado','2023-02-26 20:08:08',NULL),(11,7,'Santiago','2023-02-26 20:08:08',NULL),(12,7,'Valparaiso','2023-02-26 20:08:08',NULL),(13,8,'Asuncion','2023-02-26 20:08:08',NULL),(14,8,'Ciudad del Este','2023-02-26 20:08:08',NULL),(15,9,'La Paz','2023-02-26 20:08:08',NULL),(16,9,'Santa Cruz','2023-02-26 20:08:08',NULL),(17,10,'Lima','2023-02-26 20:08:08',NULL),(18,10,'Cusco','2023-02-26 20:08:08',NULL),(19,11,'Quito','2023-02-26 20:08:08',NULL),(20,11,'Guayaquil','2023-02-26 20:08:08',NULL),(21,12,'Caracas','2023-02-26 20:08:08',NULL),(22,12,'Maracaibo','2023-02-26 20:08:08',NULL),(23,13,'Georgetown','2023-02-26 20:08:08',NULL);
/*!40000 ALTER TABLE `region` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `reserva`
--

LOCK TABLES `reserva` WRITE;
/*!40000 ALTER TABLE `reserva` DISABLE KEYS */;
INSERT INTO `reserva` VALUES (1,2,'pendiente',1,'2023-02-26 17:59:33',NULL,1,2),(2,3,'confirmada',1,'2023-02-26 17:59:33',NULL,3,NULL),(3,1,'confirmada',1,'2023-02-26 17:59:33',NULL,5,6),(4,1,'pendiente',4,'2023-02-28 22:36:21',NULL,7,8),(5,1,'confirmada',5,'2023-02-28 22:36:21',NULL,9,10),(6,3,'confirmada',6,'2023-02-28 22:36:21',NULL,1,NULL),(7,3,'pendiente',7,'2023-02-28 22:36:21',NULL,3,4),(8,2,'confirmada',8,'2023-02-28 22:36:21',NULL,5,6),(9,2,'confirmada',9,'2023-02-28 22:36:21',NULL,7,NULL),(10,2,'pendiente',10,'2023-02-28 22:36:21',NULL,9,10);
/*!40000 ALTER TABLE `reserva` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,1,'Marcos','Aramburu','maramburu@gmail.com','cliente','Marambu28',37395418,23554,'1994-04-27','DNI',1,'2023-02-26 17:59:33',NULL),(2,1,'Juan','Pérez','juan.perez@mail.com','usuario','contraseña123',12345678,11223344,'1990-05-22','DNI',1,'2023-02-26 20:04:50',NULL),(3,1,'María','González','maria.gonzalez@mail.com','administrador','clave456',23456789,22334455,'1985-09-12','DNI',2,'2023-02-26 20:09:07',NULL),(4,1,'Pedro','Rodríguez','pedro.rodriguez@mail.com','usuario','password789',34567890,33445566,'1995-12-01','DNI',3,'2023-02-26 20:09:07',NULL),(5,1,'Ana','Martínez','ana.martinez@mail.com','administrador','clave123',45678901,44556677,'1992-03-15','DNI',4,'2023-02-26 20:09:07',NULL),(6,1,'Lucas','Sánchez','lucas.sanchez@mail.com','usuario','password456',56789012,55667788,'1993-11-10','DNI',5,'2023-02-26 20:09:07',NULL),(7,1,'Carolina','Díaz','carolina.diaz@mail.com','usuario','contraseña456',67890123,66778899,'1996-07-28','DNI',6,'2023-02-26 20:09:07',NULL),(8,1,'Diego','Gómez','diego.gomez@mail.com','administrador','clave789',78901234,77889900,'1988-04-19','DNI',1,'2023-02-26 20:09:07',NULL),(9,1,'Luciana','Fernández','luciana.fernandez@mail.com','usuario','password123',89012345,88990011,'1991-08-05','DNI',1,'2023-02-26 20:09:07',NULL),(10,1,'Javier','López','javier.lopez@mail.com','usuario','password789',90123456,99001122,'1994-02-27','DNI',2,'2023-02-26 20:09:07',NULL),(11,1,'Valeria','Ramírez','valeria.ramirez@mail.com','administrador','clave456',12345678,11223344,'1989-06-14','DNI',3,'2023-02-26 20:09:07',NULL),(12,1,'Pablo','Suárez','pablo.suarez@mail.com','usuario','contraseña789',23456789,22334455,'1997-09-08','DNI',4,'2023-02-26 20:09:07',NULL),(13,1,'Natalia','Luna','natalia.luna@mail.com','usuario','password456',34567890,33445566,'1990-12-23','DNI',5,'2023-02-26 20:09:07',NULL),(14,1,'Miguel','García','miguel.garcia@mail.com','administrador','clave123',45678901,44556677,'1986-01-31','DNI',6,'2023-02-26 20:09:07',NULL);
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `vuelo`
--

LOCK TABLES `vuelo` WRITE;
/*!40000 ALTER TABLE `vuelo` DISABLE KEYS */;
INSERT INTO `vuelo` VALUES (1,1,NULL,'1','3','2022-11-27 23:00:00','2022-11-27 14:00:00',345.8,'2023-02-26 17:59:34',NULL,0),(2,3,NULL,'3','1','2022-11-30 05:00:00','2022-11-29 20:00:00',405.9,'2023-02-26 17:59:34',NULL,0),(3,2,NULL,'2','3','2022-12-01 12:00:00','2022-12-01 18:00:00',259.3,'2023-02-26 17:59:34',NULL,0),(4,1,NULL,'2','1','2022-11-25 09:00:00','2022-11-25 15:00:00',200,'2023-02-26 20:07:37',NULL,0),(5,3,NULL,'3','2','2022-11-28 08:00:00','2022-11-28 18:00:00',300,'2023-02-26 20:07:37',NULL,0),(6,2,NULL,'1','2','2022-12-01 11:00:00','2022-12-01 15:00:00',150,'2023-02-26 20:07:37',NULL,0),(7,1,NULL,'3','1','2022-11-30 10:00:00','2022-11-30 16:00:00',400,'2023-02-26 20:07:37',NULL,0),(8,3,NULL,'2','3','2022-12-02 16:00:00','2022-12-02 22:00:00',250,'2023-02-26 20:07:37',NULL,0),(9,2,NULL,'1','3','2022-11-26 14:00:00','2022-11-26 22:00:00',320,'2023-02-26 20:07:37',NULL,0),(10,1,NULL,'3','2','2022-12-03 07:00:00','2022-12-03 15:00:00',280,'2023-02-26 20:07:37',NULL,0);
/*!40000 ALTER TABLE `vuelo` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-01  0:28:27
