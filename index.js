const fs = require('fs')
const path = require('path')

const js = `<script>\n${fs.readFileSync(path.join(__dirname, './setRem.js'))}\n</script>`

module.exports = {
    js
}