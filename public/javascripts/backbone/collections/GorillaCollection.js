var aBathingApp = aBathingApp || { Models: {}, Collections: {}, Views: {}, };

aBathingApp.Collections.GorillaCollection = Backbone.Collection.extend({
  model: aBathingApp.Models.Gorilla,
  url: '/api/gorillas'
});
