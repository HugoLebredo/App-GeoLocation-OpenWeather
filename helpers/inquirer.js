const inquirer = require('inquirer')
require('colors')

const optList = require('../utils/menuOptions.json')


const questions = [{
        type:`list`,
        name: 'opt',
        message: 'What do you want to do?',
        choices: optList
    }
]

const inquirerMenu = async () => {

    console.clear()
    
    console.log(`===========================`.cyan)
    console.log(`\tSelect Option`)
    console.log(`===========================`.cyan)

    const {opt} = await inquirer.prompt(questions)

    return opt
}

const pause = async () => {

    const question = [{
        type:`input`,
        name: 'opt_pause',
        message: `Press ${'ENTER'.green} key`,
    }
    ]

    await inquirer.prompt(question)
}

const readInput = async (message) => {

    const question = [{
        type:`input`,
        name: 'desc',
        message, // this is the same that message:message
        validate( value ) {

            if (value.length === 0) {
                return("Type anything")
            } 
            return true
        }
    }]

    const {desc} = await inquirer.prompt(question)

    return desc

}

const confirm = async (message) => {

    const question = [{
        type: 'confirm',
        name: 'ok',
        message
    }]

    const {ok} = await inquirer.prompt(question)

    return ok

}

const readPlaces = async (data = [] ) => {

    const choices = data.map( (p,i) => {

            const idx = i+1
            const {name,id} = p

            return  {
                value: id,
                name: `${String(idx).green} ${name}`
            }

        })

    choices.unshift({
        value:"0",
        name: "0. ".green + "Cancel"
    })    
    
    const questions = [{
            type:`list`,
            name: 'id',
            message: 'Choose a city',
            choices
        }]

    const {id} = await inquirer.prompt(questions)

    return id
}

const checkTasks = async (data = [] ) => {

    const choices = data.map( (t,i) => {

            const idx = i+1
            const {desc,id,completed} = t

            return  {
                value: id,
                name: `${String(idx).green} ${desc}`,
                checked: completed
            }

        }) 
    
    const questions = [{
            type:`checkbox`,
            name: 'ids',
            message: 'Select several tasks',
            choices
        }]

    const {ids} = await inquirer.prompt(questions)

    return ids
}

module.exports = {inquirerMenu, 
                    pause, 
                    readInput, 
                    readPlaces, 
                    confirm,
                    checkTasks
                }