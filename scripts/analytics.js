  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-86943591-5', 'auto');
  ga('send', 'pageview');

function login(url){

	var inputValue = $("input[name='1']").val();
    sessionStorage.setItem('Invitation ID', inputValue);

	ga('send', 'event', 'Login', 'click', sessionStorage.getItem('InvitationID'), {
	'transport': 'beacon',
	'hitCallback': function(){document.location = url;}
    });

}

function questionFinish(url){

	var inputValue = $("input[name='1']").val();
    sessionStorage.setItem('Invitation ID', inputValue);

	ga('send', 'event', window.location.href, 'Finished', sessionStorage.getItem('InvitationID'), {
	'transport': 'beacon',
	'hitCallback': function(){document.location = url;}
    });

}