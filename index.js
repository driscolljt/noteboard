const express = require('express');
const exphbs  = require('express-handlebars');
const path = require('path');
const session = require('express-session');

const app = express();

// Handlebars Middleware
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
  }));
  app.set('view engine', 'handlebars');

// Static folder
app.use(express.static(path.join(__dirname, 'public')));

// Express session midleware
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  }));

// Index Route
app.get('/', (req, res) => {
    const title = 'Welcome';
    res.render('index', {
      title: title
    });
  });


const port = process.env.PORT || 5009;

app.listen(port, () =>{
  console.log(`Server started on port ${port}`);
});