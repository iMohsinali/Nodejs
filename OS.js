const Os=require('os')

const Osobj=Os.hostname()
const Osobj2=Os.freemem()

console.log(`Hostname ${Osobj}\nFree mamory ${Osobj2}`)