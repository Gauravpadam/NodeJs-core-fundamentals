const {readFile, writeFile} = require('fs')

readFile('./content/test.txt','utf8',(err,result) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(result)
})

writeFile('./content/result-fsm2.txt', 'This is the result of fsm2 \n' , { flag: 'a' }, (err) =>{
    if (err) {
        console.log(err)
    }
})

readFile('./content/result-fsm2.txt','utf8',(err,result) => {
    if (err) {
        console.log(err)
    }
    console.log(result)
})