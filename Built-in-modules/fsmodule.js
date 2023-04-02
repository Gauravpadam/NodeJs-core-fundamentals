const {readFileSync, writeFileSync} = require('fs') // Destructuring import
const fs = require('fs') // Normal import

const first = readFileSync('./content/test.txt','utf8')

console.log(first)

const second = writeFileSync('./content/result-sync.txt',`Here is the result : ${first}`, {flag: 'a'}) // creates a new file, If there the flag a appends to it everytime

console.log(second)