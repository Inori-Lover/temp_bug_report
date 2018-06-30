const del = require('del')

del(['dist/**', '!dist', '.wepycache']).then(paths => {
  // console.log('Files and folders that had deleted:\n', paths.join('\n'))
})
