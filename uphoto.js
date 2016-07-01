'use strict'
$.('#uphoto_team-img').click(function({
$.getJSON( 'https://projects.useeds.de/useeds/umoments/branches/master/data/', function( data ) {
  var items = [];
  $.each( data, function( key, val ) {
    $("#uphoto_team-img").attr('src', val.Fotowand.gifs.image);
  });
}); 
});
