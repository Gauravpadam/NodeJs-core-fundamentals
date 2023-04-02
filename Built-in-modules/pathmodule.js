const path = require('path')

console.log(path.sep)

//const filePath = path.join('Append a path like this "'/Path', 'insider','/insider 2'"')
//console.log(filePath)

const base = path.basename(path.sep)
console.log(base)

const absolute = path.resolve(__dirname)
console.log(absolute)
