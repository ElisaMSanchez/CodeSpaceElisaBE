# CodeSpaceElisaBE
Aplicacion Node de soporte a la aplicacion Web de Pilar Perez, educadora canina.

## API Rest
La aplicacion ofrece una completa API rest que permite acceder a la informacion requerida para gestionar los clientes y clases que se dan.

### Resource Customer
Customer representa a los clientes que contactan con el equipo profesional de la escuela canina y que desean entrenar a sus mascotas.

### Resource Voucher
En la escuela canina las clases se dan en grupos de 5, llamadas bonos, estas clases son manejadas por el recurso Voucher.
Solo puede haber un Voucher abierto para cada customer en un momento dado del tiempo.

### Resource Lesson
Representa las clases dadas por los clientes, y permiten modelar informacion acerca de cuando ocurrieron y añadir comentarios a las mismas.

## Tecnologias
* Javascript
* Node.js
* SQL

## Base de Datos
La informacion del producto se almacena en una base de datos de MySQL.
El modelo consta de 3 entidades que se relacionan entre si.

### Customer
Entidad que modela los clientes, relacion 1 - N con Voucher.

### Voucher
Entidad que modela los bonuses, relacion 1 - N con Customer y relacion 1 - N con Lesson.

### Lesson
Entidad que modela las lecciones, relacion 1 - N con Voucher.
