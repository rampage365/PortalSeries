# Proyecto de Módulo - FRONTED: Buscador de Series

## En que consiste la aplicacion
un buscador de series consumiendo la api https://www.tvmaze.com/api con React
Funcional

En este caso, espero terminar el proyecto con un diseño similar a las siguientes paginas
https://www3.animeflv.net/
https://www3.pelisplushd.to/series
https://pelisplus-hd.net/
https://www.pinterest.es/


## Stack Tecnológico 
### Front End Technologies
CSS,
HTML y
JS

### FRAMEWORK
REACT.js
Bootstrap

### Back End Technologies
NODE.js 


## Documentacion de la APP
Para acceder a las funciones del API, no es necesario un APIKEY, ya que es de libre acceso, sinembargo, hay funciones que son de paga.

### Endpoints API
Debido a que el fin del proyecto era simular lo mas que se pueda un portal o SPA de series, se recurrio a varios ENDPOINTS para simular dicha funcion.

Tambien debido a que el API devuelbe informacion no ligada, desordenada o o devuelbe un nuevo ENDPOINT para consultar mas informacion sobre una determinada serie o pelicula.

#### ENDPOINT #1
A travez de este primer ENDPOINT se obtiene una lista de 10 shows.

```http
  GET https://api.tvmaze.com/singlesearch/shows?q={nombreShow}
```

|  Parameter  |  Type     | Description                       |
| :---------- | :-------- | :-------------------------------- |
| `nombreShow`| `string`  | **Required**. Palabra clave, sirve para filtrar los shows que la API nos devolbera. |

Nos devolbera una lista de 10 shows, cada show contendra en su titulo o tendra similitud en su titulo ha dicho string que le pasemos como parametro.


#### ENDPOINT #2
A travez de este segundo ENDPOINT se obtienen la lista de episodios de un determinado show

```http
  GET https://api.tvmaze.com/shows/{idShow}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `idShow`      | `int` | **Required**. Puedes ingresar un numero(ID) del show del cual quieres obtener informacion |



#### ENDPOINT #3
Debido a que para poder filtrar correctamente las temporada y episodios necesitamos saber de antemano la cantidad de temporadas, recurrimos al tercer END POINT

```http
  GET https://api.tvmaze.com/shows/{idShow}/seasons
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `idShow`      | `int` | **Required**. Devuelbe en un json la cantidad de temporadas de un determinado show |




## Aplicacion en Construccion
### Avance 1
Por el momento se ha logrado completar la logica de consultas de shows.

Se puede apreciar ello consultando en el buscador superior.

Esta funcion hace uso del ENDPOINT 1 y nos los shows relacionados o mas parecidos a la palabra que ingresemos


### Avance 2
Se esta mejorando la interfaz, para que sea mas intuitivo y adaptable, tomando de ejemplo PINTEREST.

### Avance 3 (Incompleto)
Interfaz donde mostrara mas informacion de cada determinado show

### Avance 3 (Incompleto)
Interfaz donde mostrara las temporadas y episodios
