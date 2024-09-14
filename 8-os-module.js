const os = require("os");

// Info about user
const user = os.userInfo();
console.log(user);

// System uptime in seconds

console.log(`System uptime ${os.uptime()} seconds`);

const cuurentOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freemem: os.freemem(),
};

console.log(cuurentOs);
