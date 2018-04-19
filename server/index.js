const express = require('express');
const app = express();

app.set('port', process.env.PORT || 4568);

app.use(express.static('dist'));

app.listen(app.get('port'));
console.log(`sdtcpa is listening on ${app.get('port')}`);
