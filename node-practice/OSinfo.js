const os = require("os");

let osType = os.type();

console.log(`Operating System: ${osType}`);
console.log(`Platform: ${os.platform()}`);
// Convert bytes to gigabytes
console.log(`Total Memory: ${(os.totalmem() / 1e9).toFixed(2)} GB`);
console.log(`Free Memory: ${(os.freemem() / 1e9).toFixed(2)} GB`);
