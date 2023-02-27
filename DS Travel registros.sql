/*GENERACIÓN DE INSERTS PARA PRUEBA*/
insert into aeropuerto (
codigoIata,latitud,longitud,nombre,id_aeropuerto,id_region)
values
('AEP','34°33′32″S','58°24′59″O','Aeroparque Internacional Jorge Newbery',00001,00001),
('LGS ','35°29′00″S','69°35′04″O','Aeropuerto Comodoro Ricardo Salomón',00002,00002),
('REL','43°12′35″S','65°17′02″O','Aeropuerto Almirante Marcos A. Zar',00003,00003),
('EZE','34°49′15″S','58°32′31″O','Aeropuerto Internacional de Ezeiza Ministro Pistarini',00004,00001),
('MDZ','32°49′54″S','68°47′00″O','Aeropuerto Internacional de Mendoza',00005,00002),
('CRD','45°47′24″S','67°28′20″O','Aeropuerto General Enrique Mosconi',00006,00003),
('UIO','0°7′57″N','78°28′25″O','Aeropuerto Internacional Mariscal Sucre',00007,00004),
('GYE','2°09′43″S','79°52′33″O','Aeropuerto Internacional José Joaquín de Olmedo',00008,00004),
('LIM','12°01′47″S','77°06′12″O','Aeropuerto Internacional Jorge Chávez',00009,00003),
('CUZ','13°32′47″S','71°56′21″O','Aeropuerto Internacional Alejandro Velasco Astete',00010,00003);

insert into avion (
id_avion,aerolinea,cantAsientos,matricula)
values
(00001,'FlyBondi',660,'LV-JTC'),
(00002,'Aerolineas Argentinas',400,'LV-JTP'),
(00003,'FlyBondi',660,'LV-JTE'),
(00004,'LATAM Airlines',250,'LV-FUB'),
(00005,'Sky Airline',200,'CC-ABL'),
(00006,'JetSMART',186,'CC-AWA'),
(00007,'Avianca',100,'N854AV'),
(00008,'TAME',60,'HC-CDY'),
(00009,'Peruvian Airlines',50,'OB-1878P'),
(00010,'Viva Air Peru',35,'OB-1886-P');

insert into vuelo (
id_vuelo,id_avion,id_oferta,aeropuertoOrigen,aeropuertoDestino,fechaYHoraArribo,fechaYHoraPartida,precio)
values
(00001,00001,NULL,00001,00003,'2022-11-27 23:00:00','2022-11-27 14:00:00',345.8),
(00002,00003,NULL,00003,00001,'2022-11-30 05:00:00','2022-11-29 20:00:00',405.9),
(00003,00002,NULL,00002,00003,'2022-12-01 12:00:00','2022-12-01 18:00:00',259.3),
(00004,00001,NULL,00002,00001,'2022-11-25 09:00:00','2022-11-25 15:00:00',200.0),
(00005,00003,NULL,00003,00002,'2022-11-28 08:00:00','2022-11-28 18:00:00',300.0),
(00006,00002,NULL,00001,00002,'2022-12-01 11:00:00','2022-12-01 15:00:00',150.0),
(00007,00001,NULL,00003,00001,'2022-11-30 10:00:00','2022-11-30 16:00:00',400.0),
(00008,00003,NULL,00002,00003,'2022-12-02 16:00:00','2022-12-02 22:00:00',250.0),
(00009,00002,NULL,00001,00003,'2022-11-26 14:00:00','2022-11-26 22:00:00',320.0),
(00010,00001,NULL,00003,00002,'2022-12-03 07:00:00','2022-12-03 15:00:00',280.0);

insert into pais (
id_pais,nombre)
values
(00001,'Argentina'),
(00002,'Ecuador'),
(00003,'Perú'),
(00004, 'Brasil'),
(00005, 'Colombia'),
(00006, 'Uruguay'),
(00007, 'Chile'),
(00008, 'Paraguay'),
(00009, 'Bolivia'),
(00010, 'Perú'),
(00011, 'Ecuador'),
(00012, 'Venezuela'),
(00013, 'Guyana');

insert into region (
id_region,id_pais,nombre)
values
(00001,00001,'Buenos Aires'),
(00002,00001,'Mendoza'),
(00003,00001,'Chubut')
(00004,00002,'Quito'),
(00005, 00004, 'Sao Paulo'),
(00006, 00004, 'Rio de Janeiro'),
(00007, 00005, 'Bogota'),
(00008, 00005, 'Medellin'),
(00009, 00006, 'Montevideo'),
(00010, 00006, 'Maldonado'),
(00011, 00007, 'Santiago'),
(00012, 00007, 'Valparaiso'),
(00013, 00008, 'Asuncion'),
(00014, 00008, 'Ciudad del Este'),
(00015, 00009, 'La Paz'),
(00016, 00009, 'Santa Cruz'),
(00017, 00010, 'Lima'),
(00018, 00010, 'Cusco'),
(00019, 00011, 'Quito'),
(00020, 00011, 'Guayaquil'),
(00021, 00012, 'Caracas'),
(00022, 00012, 'Maracaibo'),
(00023, 00013, 'Georgetown');

insert into ciudad (
id_ciudad,id_region,nombre,codigoPostal)
values
(00001,00001,'Ciudad Autónoma de Buenos Aires',1802),
(00002,00002,'Malargüe',5613),
(00003,00001,'Trelew',9100),
(00004, 00001, 'La Plata', 1900),
(00005, 00002, 'San Rafael', 5600),
(00006, 00003, 'Mar del Plata', 7600),
(00007, 00003, 'Puerto Madryn', 9120),
(00008, 00004, 'Guayaquil', 090150);

insert into direccion (
id_direccion,id_ciudad,altura,calle)
values
(00001,00001,NULL,'Av. Costanera Rafael Obligado'),
(00002,00002,NULL,'Ruta Nacional 40 Sur'),
(00003,00001,NULL,' Ruta 3'),
(00004, 00005, '1200', 'Av. Hipolito Yrigoyen'),
(00005, 00006, '3000', 'Av. Independencia'),
(00006, 00007, '200', 'Av. Rawson'),
(00007, 00008, '100', 'Av. Malecón Simón Bolívar');

insert into asiento (
id_asiento,id_avion,clase,estado,numero,created_at,updated_at)
values
(00001,00001,'ejecutivo','libre',1,'2022-10-11 10:00:00',NULL),
(00002,00001,'ejecutivo','reservado',2,'2022-10-11 10:00:00',NULL),
(00003,00001,'turista','reservado',3,'2022-10-11 10:00:00',NULL),
(00004,00001,'turista','libre',4,'2022-10-11 10:00:00',NULL),
(00005,00002,'premium','libre',1,'2022-08-01 15:00:00','2022-12-15 09:00:00'),
(00006,00002,'premium','libre',2,'2022-08-01 15:00:00','2022-12-15 09:00:00'),
(00007,00001,'turista','libre',3,'2022-08-01 15:00:00','2022-12-15 09:00:00'),
(00008,00001,'turista','reservado',4,'2022-08-01 15:00:00','2022-12-15 09:00:00');

insert into usuario (id_usuario, id_agencia, nombre, apellido, correo, rol, password, dni, telefono, fechaNacimiento, tipoDocumento, id_direccion) 
values
(2,1, 'Juan', 'Pérez', 'juan.perez@mail.com', 'usuario', 'contraseña123', 12345678, 11223344, '1990-05-22', 'DNI', 00001),
(3,1, 'María', 'González', 'maria.gonzalez@mail.com', 'administrador', 'clave456', 23456789, 22334455, '1985-09-12', 'DNI', 00002),
(4,1, 'Pedro', 'Rodríguez', 'pedro.rodriguez@mail.com', 'usuario', 'password789', 34567890, 33445566, '1995-12-01', 'DNI', 00003),
(5,1, 'Ana', 'Martínez', 'ana.martinez@mail.com', 'administrador', 'clave123', 45678901, 44556677, '1992-03-15', 'DNI', 00004),
(6,1, 'Lucas', 'Sánchez', 'lucas.sanchez@mail.com', 'usuario', 'password456', 56789012, 55667788, '1993-11-10', 'DNI', 00005),
(7,1, 'Carolina', 'Díaz', 'carolina.diaz@mail.com', 'usuario', 'contraseña456', 67890123, 66778899, '1996-07-28', 'DNI', 00006),
(8,1, 'Diego', 'Gómez', 'diego.gomez@mail.com', 'administrador', 'clave789', 78901234, 77889900, '1988-04-19', 'DNI', 00001),
(9,1, 'Luciana', 'Fernández', 'luciana.fernandez@mail.com', 'usuario', 'password123', 89012345, 88990011, '1991-08-05', 'DNI', 00001),
(10,1, 'Javier', 'López', 'javier.lopez@mail.com', 'usuario', 'password789', 90123456, 99001122, '1994-02-27', 'DNI', 00002),
(11,1, 'Valeria', 'Ramírez', 'valeria.ramirez@mail.com', 'administrador', 'clave456', 12345678, 11223344, '1989-06-14', 'DNI', 00003),
(12,1, 'Pablo', 'Suárez', 'pablo.suarez@mail.com', 'usuario', 'contraseña789', 23456789, 22334455, '1997-09-08', 'DNI', 00004),
(13,1, 'Natalia', 'Luna', 'natalia.luna@mail.com', 'usuario', 'password456', 34567890, 33445566, '1990-12-23', 'DNI', 00005),
(14,1, 'Miguel', 'García', 'miguel.garcia@mail.com', 'administrador', 'clave123', 45678901, 44556677, '1986-01-31', 'DNI', 00006);
