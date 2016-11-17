  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-86943591-7', 'auto');
  ga('send', 'pageview');
  
function login(url){
	var v = $("input[name='1']").val();
	if( v==1 || v==2 || v==3 || v==4 ){
		
		if(sessionStorage.getItem('loginTrack') === null){
			var inputValue = $("input[name='1']").val();
			sessionStorage.setItem('InvitationID', inputValue);
	
			sessionStorage.setItem('loginTrack', 1);
			
			if (window.performance) {
				var timeSincePageLoad = Math.round(performance.now());
				ga('send', 'timing', window.location.href, 'Login', timeSincePageLoad, sessionStorage.getItem('InvitationID'));
			}

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

		if (window.performance) {
				var timeSincePageLoad = Math.round(performance.now());
				ga('send', 'timing', window.location.href, 'surveyStart', timeSincePageLoad, sessionStorage.getItem('InvitationID'));
			}
		
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
	
	if(sessionStorage.getItem('questionTrack'+window.location.href) === null){
	
		sessionStorage.setItem('questionTrack'+window.location.href, 1);
		
		if (window.performance) {
				var timeSincePageLoad = Math.round(performance.now());
				ga('send', 'timing', window.location.href, 'question', timeSincePageLoad, sessionStorage.getItem('InvitationID'));
			}
		
		ga('send', 'event', window.location.href, 'questionFinished', sessionStorage.getItem('InvitationID'), {
		'transport': 'beacon',
		'hitCallback': function(){document.location = url;}
		});
	}
	else {
		document.location = url;
	}
}

function surveySubmit(url){

	if(sessionStorage.getItem('submitTrack') === null){
	
		sessionStorage.setItem('submitTrack', 1);

		if (window.performance) {
				var timeSincePageLoad = Math.round(performance.now());
				ga('send', 'timing', window.location.href, 'submission', timeSincePageLoad, sessionStorage.getItem('InvitationID'));
			}
		
		ga('send', 'event', window.location.href, 'surveyFinished', sessionStorage.getItem('InvitationID'), {
		'transport': 'beacon',
		'hitCallback': function(){document.location = url;}
		});
	}
	else {
		document.location = url;
	}

}