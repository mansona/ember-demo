export default Ember.Route.extend({
    model: function(params){
        return Ember.$.getJSON("https://api.github.com/repos/mansona/ember-demo/issues")
    }
})
