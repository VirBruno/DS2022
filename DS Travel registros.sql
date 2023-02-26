/*GENERACIÓN DE INSERTS PARA PRUEBA*/
insert into aeropuerto (
codigoIata,latitud,longitud,nombre,id_aeropuerto,id_region)
values
('AEP','34°33′32″S','58°24′59″O','Aeroparque Internacional Jorge Newbery',00001,00001),
('LGS ','35°29′00″S','69°35′04″O','Aeropuerto Comodoro Ricardo Salomón',00002,00002),
('REL','43°12′35″S','65°17′02″O','Aeropuerto Almirante Marcos A. Zar',00003,00003);

insert into avion (
id_avion,aerolinea,cantAsientos,matricula)
values
(00001,'FlyBondi',660,'LV-JTC'),
(00002,'Aerolineas Argentinas',400,'LV-JTP'),
(00003,'FlyBondi',660,'LV-JTE');

insert into vuelo (
id_vuelo,id_avion,id_oferta,aeropuertoOrigen,aeropuertoDestino,fechaYHoraArribo,fechaYHoraPartida,precio)
values
(00001,00001,NULL,00001,00003,'2022-11-27 23:00:00','2022-11-27 14:00:00',345.8),
(00002,00003,NULL,00003,00001,'2022-11-30 05:00:00','2022-11-29 20:00:00',405.9),
(00003,00002,NULL,00002,00003,'2022-12-01 12:00:00','2022-12-01 18:00:00',259.3);*/

insert into pais (
id_pais,nombre)
values
(00001,'Argentina'),
(00002,'Ecuador'),
(00003,'Perú');

insert into region (
id_region,id_pais,nombre)
values
(00001,00001,'Buenos Aires'),
(00002,00001,'Mendoza'),
(00003,00001,'Chubut'),
(00004,00002,'Quito');

insert into ciudad (
id_ciudad,id_region,nombre,codigoPostal)
values
(00001,00001,'Ciudad Autónoma de Buenos Aires',1802),
(00002,00002,'Malargüe',5613),
(00003,00001,'Trelew',9100);

insert into direccion (
id_direccion,id_ciudad,altura,calle)
values
(00001,00001,NULL,'Av. Costanera Rafael Obligado'),
(00002,00002,NULL,'Ruta Nacional 40 Sur'),
(00003,00001,NULL,' Ruta 3');

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



