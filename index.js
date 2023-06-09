const express = require('express');
const app = express()
const port = 8000
const db = require('./config/mongoose')
const expressLayouts = require('express-ejs-layouts')

app.use(express.urlencoded())
app.use(express.static('./assets'))
app.use(expressLayouts)
//extract styles and scripts from subpages into the layout

app.set('layout extractStyles',true);
app.set('layout extractScripts',true);


//use express router 
app.use('/',require('./routes'))
//set up view engine
app.set('view engine','ejs');
app.set('views','./views')

app.listen(port,function(err){
    if(err){
        console.log(`Error running on server: ${err}`)
    }

    console.log(`Server running on port: ${port}`)
})