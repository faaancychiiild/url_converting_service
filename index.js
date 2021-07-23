const express = require('express'),
dbconnection = require('./config/db');

const app = express();
dbconnection();
app.use(express.json());
app.use(express.static('build'));
app.use('/auth', require('./routes/auth'));
app.use('/post/service', require('./routes/postroute'));
app.use('/', require('./routes/getroute'));

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
