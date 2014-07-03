var aBathingApp = aBathingApp || { Models: {}, Collections: {}, Views: {}, };

aBathingApp.initialize = function() {

  var collection = new aBathingApp.Collections.GorillaCollection();

  var listeView = new aBathingApp.Views.GorillaListView({
    collection: collection,
    el: $('.gorilla-list')
  });

  collection.fetch();

  $('.gorillas').find('form').on('submit', function(e) {
    e.preventDefault();
    var gorillaName = $('input').val();
    $('input').val('');
    collection.create({name: gorillaName});
  });

};

$(function(){
  $('body').hide();
  aBathingApp.initialize();
  $('body').fadeIn(1200);
});
