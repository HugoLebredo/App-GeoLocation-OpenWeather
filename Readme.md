# App-GeoLocation-OpenWeather

Aplicación de consola que muestra la temperatura actual de una ciudad seleccionada por el usuario.

## Dependencias

1. [Axios](https://github.com/axios/axios "Axios") Paquete muy util para gestionar las peticiones a las APIs. 
2. [inquirer](https://github.com/SBoudrias/Inquirer.js#readme "inquirer") Utilizado para gestionar los menus de la aplicación.
3. [dotenv](https://github.com/motdotla/dotenv#readme "dotenv") Muy util para añadir **variables de entorno**.
4. [colors](https://github.com/Marak/colors.js "colors") Una pequeña libreria para cambiar el color del texto mostrado por consola. 💅

## APIs utilizadas

1. [Mapbox -> Geocoding](https://docs.mapbox.com/api/search/geocoding/ "Mapbox"). 🧭 **Mapbox** tiene APIs muy recomendables. Con esta API vamos a recibir una lista de ciudades y sus coordenadas (*latitud* y *longitud*) que concuerden con nuestra búsqueda.

**Mapbox** es una muy buena alternativa a **google maps**, nos permite hacer muchas cosas **gratis**. Para este tipo de ejercicios es muy recomendable 👍.

2. [OpenWeatherMap -> Current Weather Data](https://openweathermap.org/current "OpenWeather"). 🌡 🌈 🌦 Un clásico. Esta API da mucho juego en su plan gratuito. En esta aplicación le pasaremos las coordenadas que nos retorne **Mapbox** y recibiremos los siguientes datos de ese lugar:
    - La temperatura actual.
    - La temperatura máxima.
    - La temperatura mínima.
    - Una breve descripción de la situación meteorológica.

[👈 Venimos de](https://github.com/HugoLebredo/inquirer-console-menu-app "Before")