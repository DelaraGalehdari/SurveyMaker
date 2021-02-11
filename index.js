const express = require('express');
const mongoose = require('mongoose');
const cookieSession=require('cookie-session');
const passport=require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./models/Survey');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();
//cookie session
app.use(cookieSession({
    maxAge:30*24*60*60*1000,
    keys:[keys.cookieKey]
})
);
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
require('./routes/surveyRoute')(app);

//just in production mood
if(process.env.NODE_ENV=== 'production'){
    //Express will serve up preduction assets like main.js or main.css
    app.use(express.static('client/build'));

    //Express will serve up index.html if it doesnt recognize the route
    const path=require('path');
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    })
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
