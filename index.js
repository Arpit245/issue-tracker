const express = require('express');
const app = express()
const port = 8000


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