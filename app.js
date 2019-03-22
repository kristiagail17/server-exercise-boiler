const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const app = express();


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('port', process.env.PORT || 6000);

app.listen(app.get('port'), () => {
    console.log('Express server listening on %d', app.get('port'));
});

app.get('/hello', (req,res) => {
    // console.log(req);
    console.log(req.body);
    res.send(200);
});


/*

    insert code here

*/



module.exports = app;