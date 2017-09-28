chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		console.log("Hello. This message was sent from scripts/inject.js");
		// ----------------------------------------------------------

	}
	}, 10);

function textNodesUnder(el){
  var n, a=[], walk=document.createTreeWalker(el,NodeFilter.SHOW_TEXT,null,false);
  while(n=walk.nextNode()) a.push(n);
  return a;
}

$( document ).ready(function() {
	console.log( "ready!" );

// 	textNodesUnder($('body')).each(function( index ) {
//   console.log( index + ": " + $( this ).text() );
//   $( this ).text('boo');
// });


// $( "p" ).each(function( index ) {
//   console.log( index + ": " + $( this ).text() );
//   $( this ).text('boo');
// });

$('*').filter(function()
{
    if(($(this).text().length>0)&&($(this).text().length<500))
    {
        return true;
    }
    else
    {
        return false;
    }
}).each(function()
{
	console.log($(this).text());
	$(this).text('boo');
});


});



});