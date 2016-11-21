  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-86943591-8', 'auto');
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
				ga('send', 'timing', 'Login', 'Login', timeSincePageLoad, sessionStorage.getItem('InvitationID'));
			}

			ga('send', 'event', 'Login', 'Login', sessionStorage.getItem('InvitationID'), {
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
				ga('send', 'timing', 'Start Survey', 'Start Survey', timeSincePageLoad, sessionStorage.getItem('InvitationID'));
			}
		
		ga('send', 'event', 'Start Survey', 'Start Survey', sessionStorage.getItem('InvitationID'), {
		'transport': 'beacon',
		'hitCallback': function(){document.location = url;}
		});
	}
	else {
		document.location = url;
	}

}

function questionFinish(url, Qnum, type, totInputs){
	
	if(sessionStorage.getItem('questionTrack'+window.location.href) === null){
	
		sessionStorage.setItem('questionTrack'+window.location.href, 1);
		
		if (window.performance) {
			var timeSincePageLoad = Math.round(performance.now());
			ga('send', 'timing', 'Question Answered','Question '+Qnum, timeSincePageLoad, sessionStorage.getItem('InvitationID'));
		}
		
		if(type == "text")
		{
			var n=document.getElementById('form-input-0').value;
    
			if (n.length < 1)
			{
				ga('send', 'event', 'Question Incomplete', 'Question '+Qnum, sessionStorage.getItem('InvitationID'), {
					'transport': 'beacon',
					'hitCallback': function(){document.location = url;}
				});
			}
			else
			{
				ga('send', 'event', 'Question Complete', 'Question '+Qnum, sessionStorage.getItem('InvitationID'), {
					'transport': 'beacon',
					'hitCallback': function(){document.location = url;}
				});
			}
		}
		else
		{
			var checked = false
			
			for(i=0;i<totInputs;i++)
			{
				if(document.getElementById('form-input-' + i).checked)
				{
					checked = true;
				}
			}
			
			if(checked)
			{
				ga('send', 'event', 'Question Complete', 'Question '+Qnum, sessionStorage.getItem('InvitationID'), {
					'transport': 'beacon',
					'hitCallback': function(){document.location = url;}
				});
			}
			else
			{
				ga('send', 'event', 'Question Incomplete', 'Question '+Qnum, sessionStorage.getItem('InvitationID'), {
					'transport': 'beacon',
					'hitCallback': function(){document.location = url;}
				});
			}
		}

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
				ga('send', 'timing', 'Submit', 'Submit', timeSincePageLoad, sessionStorage.getItem('InvitationID'));
			}
		
		ga('send', 'event', 'Submit', 'Submit', sessionStorage.getItem('InvitationID'), {
		'transport': 'beacon',
		'hitCallback': function(){document.location = url;}
		});
	}
	else {
		document.location = url;
	}

}