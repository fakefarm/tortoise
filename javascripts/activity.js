(function(){
  window.Activity = Activity;

  var $submitButton;

  function Activity(features){
      var self = this;
      this.text = features._text;
      this.category = features._category;
      this.duration = features._duration;
      this.frequency = features._frequency;
  }

  Activity.prototype = {};
})();
