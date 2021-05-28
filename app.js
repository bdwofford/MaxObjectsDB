const express = require('express')
const favicon = require('serve-favicon')
const path = require('path')

const app = express()
const PORT =  process.env.PORT || 3000


///////////////////////////////////// Server Setup /////////////////////////////////////

//set folder for serving static files, CSS, Images and JavaScript
app.use(express.static(__dirname +'/public'))

//serve the favicon
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')))



///////////////////////////////////// Server Routes /////////////////////////////////////


app.get('/', function (req, res) {
    res.sendFile(__dirname + '/views/index.html')
})


///////////////////////////////////// Bind and Listen /////////////////////////////////////

app.listen(PORT, ()=>{
    console.log(`Express server listening on http://localhost:${PORT}.`)
})
