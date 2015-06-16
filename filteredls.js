var fs = require('fs'),
    path = require('path'),
    p = process.argv[2],
    extension = '.' + process.argv[3]

fs.readdir(p, function callback (err, files) {
  for (var i = 0; i < files.length; i++) {
    if (path.extname(files[i]) === extension) {
      console.log(files[i])
    }
  }
})
