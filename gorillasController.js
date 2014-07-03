var Gorilla = require(path.join(__dirname, 'gorilla'));

exports.index = function(req, res){
  Gorilla.find(function(error, gorillas){
    if (error) return console.log(error);
    res.send(gorillas);
  });
};

exports.create = function(req, res){
  Gorilla.create({name: req.body.name}, function(error, gorilla){
    if (error) return console.log(error);
    res.send(gorilla);
  });
};

exports.update = function(req, res){
  Gorilla.findById(req.params.id, function(error, gorilla){
    if (error) return console.log(error);
    gorilla.update({name: req.body.name}, function(error, updated){
      if (error) return console.log(error);
      res.send(updated);
    });
  });
};

exports.delete = function(req, res){
  Gorilla.findById(req.params.id, function(error, gorilla){
    if (error) return console.log(error);
    gorilla.remove(function(error){
      if (error) return console.log(error);
      return res.send({'success': 'ok'});
    });
  });
};
