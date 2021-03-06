# App-GeoLocation-OpenWeather

Aplicaci贸n de consola que muestra la temperatura actual de una ciudad seleccionada por el usuario.

## Dependencias

1. [Axios](https://github.com/axios/axios "Axios") Paquete muy util para gestionar las peticiones a las APIs. 
2. [inquirer](https://github.com/SBoudrias/Inquirer.js#readme "inquirer") Utilizado para gestionar los menus de la aplicaci贸n.
3. [dotenv](https://github.com/motdotla/dotenv#readme "dotenv") Muy util para a帽adir **variables de entorno**.
4. [colors](https://github.com/Marak/colors.js "colors") Una peque帽a libreria para cambiar el color del texto mostrado por consola. 馃拝

## APIs utilizadas

1. [Mapbox -> Geocoding](https://docs.mapbox.com/api/search/geocoding/ "Mapbox"). 馃Л **Mapbox** tiene APIs muy recomendables. Con esta API vamos a recibir una lista de ciudades y sus coordenadas (*latitud* y *longitud*) que concuerden con nuestra b煤squeda.

**Mapbox** es una muy buena alternativa a **google maps**, nos permite hacer muchas cosas **gratis**. Para este tipo de ejercicios es muy recomendable 馃憤.

2. [OpenWeatherMap -> Current Weather Data](https://openweathermap.org/current "OpenWeather"). 馃尅 馃寛 馃對 Un cl谩sico. Esta API da mucho juego en su plan gratuito. En esta aplicaci贸n le pasaremos las coordenadas que nos retorne **Mapbox** y recibiremos los siguientes datos de ese lugar:
    - La temperatura actual.
    - La temperatura m谩xima.
    - La temperatura m铆nima.
    - Una breve descripci贸n de la situaci贸n meteorol贸gica.

[馃憟 Venimos de](https://github.com/HugoLebredo/inquirer-console-menu-app "Before")