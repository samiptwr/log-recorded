
const fsPromises = require('fs').promises

async function writeLogs(path, date, uuid, reqMethods, reqHeaderOrigin, reqUrl){
   const logItem = `${date}\t${uuid}\t${reqMethods}\t${reqHeaderOrigin}\t${reqUrl}\n`
   try{
      await fsPromises.appendFile(path, logItem)
   } catch (err) {
      console.log('Error: ', err)
   }
}

module.exports = {writeLogs}