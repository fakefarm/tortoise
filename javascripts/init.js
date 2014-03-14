function clearForm() {
  $(':input').not(':button, :radio, :submit, :reset, :hidden').val('');
  $("input:radio[name=category]:checked").removeAttr('checked');
}

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

    function addToDom (act){
      return "<div data-drag='true' class='gutter-activity " +
       act.category +
       "' id=activity_'" +
       act.countId +
       "'>" +
       act.text +
       "</div>";
    }

    e.preventDefault();
    console.log(act);
    $('#gutter').append(addToDom(act));
    $('[data-drag=true]').draggable();
    clearForm();
    $('.new-activity').toggleClass('open-drawer');
    $('.m-content').toggleClass('m-content-pushed');
  });

  $("#thing").on('drag', function(){
    console.log('hey');
  });
});
