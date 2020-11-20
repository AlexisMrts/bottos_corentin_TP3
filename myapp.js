const express = require('express')
const app = express()
const port = 3000

app.get('/api', (req, res) => {
        res.json({message: 'Hello Word'});
})

app.listen(port, () => {
        console.log('http://localhost:3000/api')
})
