const express = require('express');
const app = express();

app.use(express.static('frontend/build'))

const PORT = 3500;
app.listen(PORT, () => {
    console.log(`running on port ${PORT}`)
})