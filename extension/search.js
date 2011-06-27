var url = "http://www.vtc.com/modules/products/titleList.php?searchStr=";

window.onscroll = function() {
  document.getElementById('fixedDiv').style.top = '0px';
};

  function init() {
    $('#searchStr').focus();
  }
  
  function searchTheSite() {
    var toFind = $('#searchStr').val();
    $.post(url, { searchStr: toFind }, function(response) {
      var tableAnswer = $(response).find('.boxContentMainAlt');
      console.log('Here\'s what came back', tableAnswer);
      if (!tableAnswer.text()) {
        $('#answer').html('<p>Sorry, No Results.</p>');
        return;
      }
      $('#answer').html(tableAnswer);
      $('#answer a').attr('target', '__blank');
      $('#answer div table tbody tr').each(function() {
        $('td:nth-child(3)').remove();
      });
    });
    return false;
  }

  $(document).ready(function() {
    
    $('#searchStr').keypress(function(e) {
      if (e.keyCode == 13) {
        e.preventDefault();
      }
    var timeout = setTimeout("searchTheSite()",1500);
  });
    // $('#searchStr').mousedown(function(){
    //       $(this).val("");
    //       $('#answer').html('<p>What would you like to learn today?</p>');
    //     });
  });
  
  chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.create({url:
      chrome.extension.getURL('popup.html')});
  });