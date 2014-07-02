var express       = require('express');
global.mongoose   = require('mongoose');
global.path       = require('path');

// Connect to db
global.db = mongoose.connect('mongodb://localhost/bananas');

// Get app object
var app = express();

// Config app
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
var gorillasController = require(path.join(__dirname, 'gorillasController'));

app.get('/api/gorillas', gorillasController.index);
app.post('/api/gorillas', gorillasController.create);
app.put('/api/gorillas/:id', gorillasController.update);
app.delete('/api/gorillas/:id', gorillasController.delete);

app.listen(8000, function(){
  console.log('listening on port 8000');
});
