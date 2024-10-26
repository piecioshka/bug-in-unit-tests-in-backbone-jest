import Backbone from 'backbone';

export const LikeButton = Backbone.View.extend({
  tagName: 'button',
  events: {
    click: 'handleClick',
  },
  render: function () {
    this.$el.text('Click me');
    return this;
  },
  handleClick: function () {
    console.log('Button clicked');
  },
});
