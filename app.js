const express = require('express');
const ejs = require('ejs'); // Burada require etmek zorunda değiliz.
const expressLayouts = require('express-ejs-layouts');
const { PublicRoutes, ImageRoutes } = require('./router');
const loaders = require('./loaders');
const config = require('./config');

config();
loaders();

const app = express();


// Template Engine
app.set('view engine', 'ejs');

// Middlewares
app.use(express.static('public'));
app.use(expressLayouts);
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Routes
app.use('/', PublicRoutes);
app.use('/image', ImageRoutes);

app.listen(process.env.APP_PORT, () => {
  console.log(`Server is started at https://localhost:${process.env.APP_PORT}/`);
});
