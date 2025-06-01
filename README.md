# log-recorded
A lightweight node js package to store log records for websites.

# Installation
To install this package, run this commad:

```bash
 npm i log-recorded
```
# How to use
We have a function ```writeLogs()``` which accepts multiple parameters such as path, date, uuid, request method, request headers origin and request url. 

```js
const { writeLogs } = require('log-recorded')
const { v12 } = require('ranuuid')
const http = require('http')

http.createServer((req, res) => {
   if(req.url === '/'){
      const uuid = v12(45)

      writeLogs(path.join(__dirname, 'log.txt'), new Date(), uuid, req.method, req.headers.origin, req.url)

      res.write('Welcome')
      res.end()
   }
})
.listen(5000)
```

For uuid you can use ranuuid package from https://github.com/samiptwr/ranuuid.

**Note: In order to use this you must have log.txt or any files already made. This package will not create it automatically.**