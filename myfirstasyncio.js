var fs = require('fs'),
    buf = fs.readFile(process.argv[2], function callback (err, data) {
      console.log(data.toString().split('\n').length - 1)
    })
