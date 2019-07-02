const pug = require('pug')
const path = require('path')
const fs = require('fs')

const viewFile = path.resolve(__dirname, 'resources/views/index.pug')
const htmlFile = path.resolve(__dirname, 'index.html')
let html = pug.renderFile(viewFile, { pretty: true })

fs.writeFileSync(htmlFile, html)


