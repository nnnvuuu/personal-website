const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require("path");
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

const uri = process.env.ATLAS_URI;

app.use(cors());
app.use(express.json());
 
mongoose.connect(uri,{ useNewUrlParser:true, useCreateIndex:true, useUnifiedTopology: true }  );
const connection = mongoose.connection;
connection.once('open', ()=>{
  console.log('MongoDB database connection estabilished successfully');
})


// This endpoint is pinged every 5 mins by uptimerobot.com to prevent 
// free services like Heroku and Now.sh from letting the app go to sleep.
// This endpoint is also pinged every time the client starts in the 
// componentDidMount of App.js. Once the app is confirmed to be up, we allow 
// the user to perform actions on the client.
app.get('/wake-up', (req, res) => res.json('👌'))


const articlesRouter = require('./routes/articles');
const credentialRouter = require('./routes/credentials');

app.use('/articles',articlesRouter);
app.use('/credentials',credentialRouter);


  // Serve static assets if in production
  if (process.env.NODE_ENV === 'production') {
    // Set static folder
  //  app.use(express.static('client/build'));

  app.use(express.static("client/build"));
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });

    
  } 

app.listen(port,()=> {
  console.log(`Server is running on port: ${port}`);
}); 
