require('dotenv').config()

const {inquirerMenu,
    readInput,
    readPlaces,
    pause} = require('./helpers/inquirer')

const Searches = require('./models/searches')

const search = new Searches


const main = async () => {
   
    let key

    do {

        key = await inquirerMenu()
        
        switch (key) {

                case 1: 
                    const cityName = await readInput('Type a city name')
                    
                    //Find Places
                    const cities = await search.findCities(cityName)
                    
                    //Select Place
                    const cityId = await readPlaces(cities)
                    if(cityId === '0') continue;

                    const city = cities.find( c => c.id ===cityId)
                    
                    //Save city in record
                    search.addCityRecord(city.name)
                    
                    //Take weather
                    const weather = await search.findWeather(city.lat,city.lng)

                    //Show messages
                    console.clear()
                    console.log('\n City info\n'.green)
                    console.log('City: ',city.name)
                    console.log('Lat: ', city.lat)
                    console.log('Lng: ', city.lng)
                    console.log('Temperature: ', weather.temp)
                    console.log('Max: ', weather.max)
                    console.log('Min: ', weather.min)
                    console.log('Current weather desc: ', weather.desc)
                
                break;

                case 2:
                    search.capitalizeHistory.forEach((c,i) => console.log(`${i + 1} - ${c}`))
                
                break;
            }
    
       if (key !== 0) await pause()
    }
    
    while( key !== 0)
}

main()