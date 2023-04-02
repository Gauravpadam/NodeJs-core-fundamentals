const os = require('os')

//  info about current user
const user = os.userInfo()
console.log(user)

//  method returns system uptime in seconds
console.log(`The system uptime is ${Math.ceil(os.uptime()/3600)} hours`);
