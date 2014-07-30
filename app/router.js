import Ember from 'ember';

var Router = Ember.Router.extend({
  location: DemoENV.locationType
});

Router.map(function() {
    this.resource("posts", {path: "/posts/:id"});

    this.resource("people", function(){
    });
});

export default Router;
