// const { readFile, writeFile, appendFile, copyFile, rename } = require('fs')
const { readFile, writeFile, appendFile, copyFile, rename } = require('fs/promises')
const path = require('path')

const fileOps = async () => {
    try {
        const data = await readFile(path.join(__dirname, 'files', 'read.txt'), 'utf8')
        console.log(data)
        await writeFile(path.join(__dirname, 'files', 'write.txt'), 'This is the write promise file.')
        await appendFile(path.join(__dirname, 'files', 'append.txt'), '\n\nYes, this is the append promise text file.')
        await copyFile(path.join(__dirname, 'files', 'read.txt'), path.join(__dirname, 'files', 'copy.txt'))
        await rename(path.join(__dirname, 'files', 'copy.txt'), path.join(__dirname, 'files', 'rename.txt'))
    } catch (err) {
        console.error(err)
    }
}

fileOps()

// /* Read Operation */
// readFile(path.join(__dirname, 'files', 'read.txt'), 'utf8', (err, data) => {
//     if (err) throw err
//     console.log(data)
// })

// /* Write Operation */
// writeFile(path.join(__dirname, 'files', 'write.txt'), 'This is the write text file.', (err) => {
//     if (err) throw err
//     console.log('The write file has been saved.')
// })

// /* Append Operation */
// appendFile(path.join(__dirname, 'files', 'append.txt'), '\n\nYes, this is the append text file.', (err) => {
//     if (err) throw err
//     console.log('The append file has been appended.')
// })

// /* Copy and Rename Operation */
// copyFile(path.join(__dirname, 'files', 'read.txt'), path.join(__dirname, 'files', 'copy.txt'), (err) => {
//     if (err) throw err
//     console.log('The copy file has been copied.')

//     // Rename operation depends on copyFile operation to complete.
//     rename(path.join(__dirname, 'files', 'copy.txt'), path.join(__dirname, 'files', 'rename.txt'), (err) => {
//         if (err) throw err
//         console.log('The copy file has been renamed.')
//     })
// })

// // Still not sure what this was supposed to do.
// process.on('uncaughtException', err => {
//     console.log(error(`There was an uncaught error: ${err}`))
//     process.exit(1)
// })

// // This line is to illustrate the order of operations.
// console.log('Hello...')