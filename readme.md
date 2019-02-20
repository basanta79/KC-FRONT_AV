# BeerFlix

## Estructura
La apliación dispone de un header que contiene el nombre de la aplicación y un botón en forma de cerveza que muestra el campo de búsqueda en caso de terminales con pantalla pequeña.
Pulsar BEERLIST nos lleva a la página principal.

Debajo de este header se muestra el contenido de cada vista.


## Vista inicial "/"
Página de entrada. recoge el listado de las cervezas. Lo almacenamos en sesion storage para poder ir aplicando filtros sin realizar consultas posteriores.

### Estructura
ESta página tiene tres secciones. Una donde se muestra un campo de texto con un botón de búsqueda para poder filtrar por fecha. 
Este campo dispone de un filtro que solo permite introducir 4 dígitos que representan un año.

Debajo disponemos de un campo donde mostrar errores o información diversa.

Debajo se muestra el campo del contenido con las tarjetas de cada cerveza. En caso de pantallas mas pequeñas las fichas salen una debajo de otra, mientras que en pantallas mas grandes las fichas se muestran en forma de cuadricula, de dos columnas por el número que sea menester de filas.

### Funcionalidad
**Filtro por fecha.**<br>
Explicado ya en el punto anterior, existe la posibilidad de que se filtre por fecha. Este filtro se aplica siempre, incluso cuando relizamos una busqueda por nombre.

**Añadir like**<br>
Desde esta vista podemos añadir likes a las cervezas que nos gustan, se realiza una nueva llamada a la API para refrescar el contador de likes.

**Visualizar detalle**<br>
desde esta vista si pulsamos en el nombre de la cerveza acedemos a la vista de detalle de la cerveza. 

## Vista de detalle 
La vista de detalle visualiza mas información de la cerveza,como son el precio y la cantidad de comentarios que tiene la cerveza y permite icnluir comentarios.

### Funcionalidad
**Añadir likes**<br>
En esta vista también se pueden añadir likes igual que en el listado principal. despues de pulsar el botón se reliza una consulta para actualizar el contador. Por eso es un poco lento.

**Añadir un comentario**<br>
En esta vista por debajo hay un campo de texto donde se permite la introducción de un comentario que una vez introducido se envia a la API, posteriormente se realiza una consulta del detalle a la API de neuvo para ver que el mensaje se ha añadido correctamente.

## Deployemnt
Esta página se ha puesto en producción en Github pages. se puede consultar en la siguiente dirección:

https://basanta79.github.io/beerflix/


