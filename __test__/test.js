const parse = require('../parse')

try {
  parse('./__test__/', process.argv[2] || '', process.argv[3] || '', (err, version) => {
    if (err) {
      console.error(err.message)
    } else {
      console.log('version', version)
    }
  })
} catch (error) {
  console.error(error.message)
}
