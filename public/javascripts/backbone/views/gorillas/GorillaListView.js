var aBathingApp = aBathingApp || { Models: {}, Collections: {}, Views: {}, };

aBathingApp.Views.GorillaListView = Backbone.View.extend({
  initialize: function(){
    this.listenTo(this.collection, 'add', this.render);
  },
  render: function(){
    var that = this;
    this.$el.empty();
    _.each(this.collection.models, function(gorilla){
      var gorillaView = new aBathingApp.Views.GorillaView({model: gorilla});
      that.$el.prepend(gorillaView.render().el);
    })
  }
});
