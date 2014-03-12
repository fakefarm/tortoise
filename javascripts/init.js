function clearForm() { $(':input').not(':button, :submit, :reset, :hidden').val(''); }

$(function(){
  var act, template;

  $("#new-button").click(function(){
    $('.new-activity').toggleClass('open-drawer');
    $('.m-content').toggleClass('m-content-pushed');
  });

  $('form').submit(function(e){
    var $text = $('#activity-text').val();
    var $category = $("input:radio[name=category]:checked").val();
    var $duration = $("#duration option:selected").val();
    var $frequency = $("#frequency option:selected").val();
    act = new Activity({
      _text: $text,
      _category: $category,
      _duration: $duration,
      _frequency: $frequency
    });

    template = function(act){
      return "<div draggable=true class='gutter-activity " + act.category + "'>" +
      act.text +
      "</div>";
    };

    e.preventDefault();
    $('#gutter').append(template(act));
    clearForm();
    $('.new-activity').toggleClass('open-drawer');
    $('.m-content').toggleClass('m-content-pushed');
  });
});
