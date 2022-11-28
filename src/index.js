const express = require('express')
const path = require('path');
const app = express()

const port = process.env.PORT || 3000
const publicDirPath = path.join(__dirname, '../public')

app.use(express.static(publicDirPath))

app.get('/', (req, res) => {
    res.send('Hello brou')
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})