console.log('Handling file in Node.js');
//reading file in node.js
const fs = require('fs');
fs.readFile('intro.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error('Error reading file', err);
        return
    }
    console.log('File Content:',data)
})

//appending new text to file without deleting the existing content
fs.appendFile('intro.txt', '\nLearn Backend Development', (err) => {
    if (err) throw err;
    console.log('File Updated')
})
