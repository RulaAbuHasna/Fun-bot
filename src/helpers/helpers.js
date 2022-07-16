
const BotReponses = {
    'hey' : 'Hey there firend are you calling me?',
    'wake up': 'I am up friend 😴'
}

const prefix = '_'

const isMessageValid = (message) => {
    const msg = message.toLowerCase()
    return msg.startsWith(prefix) && msg.slice(1) in BotReponses 
}

const response =(msg) => BotReponses[msg.slice(1).toLocaleLowerCase()]

module.exports = {
    response,
    isMessageValid
}