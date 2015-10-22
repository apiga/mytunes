// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td class="songInfo">(<%= artist %>)</td><td class="songInfo"><%= title %></td><td><%= plays %></td><td class="addToPlaylist"><button>Add to Playlist</button></td>'),

  events: {
    'click button': function() {
      this.model.addToPlaylist();
    },
    'click .songInfo': function() {
      this.model.enqueue();
    }
  },
  
  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
