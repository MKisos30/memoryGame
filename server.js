const express = require('express');
const app = express();
const path = require('path')

app.use(express.static('frontend/build'))

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, './frontend/build/index.html'), function(err) {
      if (err) {
        res.status(500).send(err)
      }
    })
  })

const PORT = 3500;
app.listen(PORT, () => {
    console.log(`running on port ${PORT}`)
})