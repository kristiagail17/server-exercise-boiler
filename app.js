let express = require('express');
let app = express();


app.set('port', process.env.PORT || 6000);

app.listen(app.get('port'), function () {
    console.log('Express server listening on %d', app.get('port'));
});


/*

    insert code here

*/



module.exports = app;