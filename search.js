function foo() {
  $('#answer').html("<img src='22.gif' />");
  var toFind = $('#searchStr').val();
  $.post('search.php', { searchStr: toFind }, function(response) {
    var tableAnswer = $(response).find('.boxContentMainAlt');
    if (tableAnswer) {
    $('#answer').html(tableAnswer);
    console.log('The table ', tableAnswer);
  } else {
    $('#answer').html("Sorry, we do not offer that title currently.");
  }
  });
}

window.onscroll = function() {
  document.getElementById('fixedDiv').style.top = '0px';
};

$(document).ready(function() {
  $('button').click(function() {
    $('#answer').html("<img src='22.gif' />");
    var toFind = $('#searchStr').val();
    $.post('search.php', { searchStr: toFind }, function(response) {
      var tableAnswer = $(response).find('.boxContentMainAlt');
      console.log('Here what came back', tableAnswer);
      $('#answer').html(tableAnswer);
    });
    return false;
  });
  $('#searchStr').mousedown(function(){
    $(this).val("");
  });
});