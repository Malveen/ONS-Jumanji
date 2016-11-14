  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-86943591-5', 'auto');
  ga('send', 'pageview');
  
function login(url){
	
	if($("input[name='1']").val()==(1 || 2 || 3 || 4)){
		
		if(sessionStorage.getItem('loginTrack') === null){
			var inputValue = $("input[name='1']").val();
			sessionStorage.setItem('InvitationID', inputValue);
	
			sessionStorage.setItem('loginTrack', 1);

			ga('send', 'event', window.location.href, 'Login', sessionStorage.getItem('InvitationID'), {
			'transport': 'beacon',
			'hitCallback': function(){document.location = url;}
			});
		}
		else {
			document.location = url;
		}
	}
	else {
		window.alert("invalid input");
	}
}

function surveyStart(url){
	
	if(sessionStorage.getItem('startTrack') === null){
	
		sessionStorage.setItem('startTrack', 1);

		ga('send', 'event', window.location.href, 'surveyStart', sessionStorage.getItem('InvitationID'), {
		'transport': 'beacon',
		'hitCallback': function(){document.location = url;}
		});
	}
	else {
		document.location = url;
	}

}

function questionFinish(url){
	
	if(sessionStorage.getItem('questionTrack') === null){
	
		sessionStorage.setItem('questionTrack', 1);

		ga('send', 'event', window.location.href, 'Finished', sessionStorage.getItem('InvitationID'), {
		'transport': 'beacon',
		'hitCallback': function(){document.location = url;}
		});
	}
	else {
		document.location = url;
	}
}

function surveySubmit(url){

	if(sessionStorage.getItem('startTrack') === null){
	
		sessionStorage.setItem('startTrack', 1);

		ga('send', 'event', window.location.href, 'SurveyFinished', sessionStorage.getItem('InvitationID'));
	}
	else {
		document.location = url;
	}

}