  var fs = require('fs'),
      buf = fs.readFileSync(process.argv[2]),
      str = buf.toString(),
      newString = str.split('\n'),
      counter = newString.length - 1

  console.log(counter)
