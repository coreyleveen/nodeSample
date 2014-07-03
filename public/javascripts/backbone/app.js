var aBathingApp = aBathingApp || { Models: {}, Collections: {}, Views: {}, };

aBathingApp.initialize = function() {

  var collection = new aBathingApp.Collections.GorillaCollection();

  var listeView = new aBathingApp.Views.GorillaListView({
    collection: collection,
    el: $('.gorilla-list')
  });

  collection.fetch();

  $('.monkeys').find('form').on('submit', function(e) {
    e.preventDefault();
    var monkeyName = $('input').val();
    $('input').val('');
    collection.create({name: monkeyName});
  });

};

$(function(){
  $('body').hide();
  aBathingApp.initialize();
  $('body').fadeIn(1200);
});
