const names = require('./names')
const sayHi = require('./namesprinter')
const data = require('./alternate-flavor')
console.log(data)

sayHi(names.name2)
sayHi(names.name3)
sayHi(data.singlePerson.name)

