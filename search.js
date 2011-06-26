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
  $('#searchStr').keypress(function() {
    var timeout = setTimeout("searchTheSite()",1500);
  });
  // $('#searchStr').mousedown(function(){
  //     $(this).val("");
  //     $('#answer').html('<p>What would you like to learn today?</p>');
  //   });
});
var href = [];
function searchTheSite() {
  $('#answer').html("<img src='22.gif' />");
  var toFind = $('#searchStr').val();
  $.post('search.php', { searchStr: toFind }, function(response) {
    var tableAnswer = $(response).find('.boxContentMainAlt');
    handleTable(tableAnswer);
    console.log('Here what came back', tableAnswer);
    $('#answer').html(tableAnswer);
  });
  return false;
}

function handleTable(table) {
  table.find('tbody tr').each(function() {
    var href = $('a', this).attr('href');
    var newHref = ("javascript:chrome.tabs.create({'url':" +href+ ", 'selected':true});window.close();");
    var linkTitle = $('a', this).text();
    console.log('href ', newHref);
    console.log('title ', linkTitle);
  });
}