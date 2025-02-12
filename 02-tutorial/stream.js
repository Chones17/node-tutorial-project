const { createReadStream, createWriteStream } = require('fs')
const path = require('path')

const readStream = createReadStream(path.join(__dirname, 'files', 'lorem.txt'), {encoding: 'utf8'})
const writeStream = createWriteStream(path.join(__dirname, 'files', 'new-lorem.txt'))

readStream.on('data', (data) => {
    console.log(data)
})

// readStream.pipe(writeStream)