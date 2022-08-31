const express = require('express');
const app = express();
const mongoose = require('mongoose');
const user = require('./routes/user');
const book = require('./routes/book');
const category = require('./routes/category');
require('dotenv/config');

// config
const port = process.env.PORT || 3000;
// express
app.use(express.json());
app.use(express.urlencoded({extended: true}));
// mongoose
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/biblio').then(() => {
	console.log('Banco de dados conectado com sucesso');
	app.listen(port, () => console.log(`Server rodando em http://localhost:${port}`));
}).catch((err) => console.log(`falha ao se conectar: ${err}`));

// routes
app.use('/user', user);
app.use('/book', book);
app.use('/category', category);