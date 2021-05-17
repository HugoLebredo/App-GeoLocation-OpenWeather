const fs = require('fs')

const { default: axios } = require("axios")

class Searches{

    history = []
    dbPath = './db/database.json'

    constructor(){
        this.readDB()
    }

    get capitalizeHistory(){
        
        const capitalized = this.history.map(i => {
            let words = i.split(' ')
            words = words.map(w => (w.charAt(0).toUpperCase() + w.slice(1) ) )
            return words.join(' ')
            
        })
        return capitalized
    }

    get paramsMapbox() {
        return {
            'access_token': process.env.MAPBOX_KEY,
            'limit': 5,
            'language': 'en'
        }
    }

    get paramsOpenweather() {
        return{
            'units':'metric',
            'lang':'en',
            'appid':process.env.OPENWEATHER_KEY
        }
    }


    async findWeather(lat,lon) {
        try{
            
            const resp = axios.create({
                baseURL:`https://api.openweathermap.org/data/2.5/weather`,
                params: {...this.paramsOpenweather, lat,lon}
                
            })

            const temp = await resp.get()

            const {weather, main} = temp.data

            return ({
                desc: weather[0].description,
                min: main.temp_min,
                max: main.temp_max,
                temp: main.temp,
            })

        }
        catch(error){
            return[]
        }

    }

    async findCities(places = '') {
       try {
           const resp = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${ places }.json`,
                params: this.paramsMapbox
            })

            const response = await resp.get()
            return response.data.features.map( place => ({
                id: place.id,
                name: place.place_name,
                lng: place.center[0],
                lat: place.center[1],
            }))
        }
        catch(error) {
            return[]
        }
    }

    addCityRecord(city = '') {

        if ( this.history.includes( city.toLocaleLowerCase() ) ) {
            return
        }

        this.history.unshift( city.toLocaleLowerCase() )

        //save in db
        this.saveDB()

    }

    saveDB(){
        
        console.log(this.history)
        
        const payload = {
            history: this.history
        }
        
        fs.writeFileSync(this.dbPath,JSON.stringify(payload) )
    }

    readDB(){

        if ( !fs.existsSync(this.dbPath) ) {
            return null
        }

        const info = fs.readFileSync(this.dbPath,{encoding:'utf-8'} )
        const data = JSON.parse(info)
        
        this.history = data.history
    }
    
}
    
module.exports = Searches