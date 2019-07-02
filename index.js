const express = require('express')
const path = require('path')
const fs = require('fs')
const pug = require('pug')
const app = express()
const port = process.env.PORT || 3333

const viewFile = path.resolve(__dirname, 'resources/views/index.pug')
const htmlFile = path.resolve(__dirname, 'index.html')

app.use('/assets', express.static(path.join(__dirname, 'assets')))

app.get('/', (req, res) => {
  let html = pug.renderFile(viewFile, { pretty: true })
  fs.writeFileSync(htmlFile, html)

  res.header('Content-Type', 'text/html')
  res.send(html)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))