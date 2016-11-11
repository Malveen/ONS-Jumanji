(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
    ga('create', 'UA-86943591-4', 'auto');
    ga('send', 'pageview');
	
function questionFinish(url){

		if (window.performance) {
			var timeSincePageLoad = Math.round(performance.now());
			ga('send', 'timing', 'JS Dependencies', 'load', timeSincePageLoad, document.title);
		}

		ga('send', 'event', 'QuestionFinish', 'click', document.title, {
		'transport': 'beacon',
		'hitCallback': function(){document.location = url;}
        });

}

function textInteraction() {
	ga('send', 'event', 'textInteraction', 'click', document.title);
}

function radioEvent() {
	ga('send', 'event', 'RadioSelect', 'click', document.title);
}

function invalidInput() {
	ga('send', 'event', 'InvalidInput', 'input', document.title);
}

function CheckboxEvent() {
	ga('send', 'event', 'CheckboxSelect', 'click', document.title);
}

function surveySubmit(url){
	
		if (window.performance) {
			var timeSincePageLoad = Math.round(performance.now());
			ga('send', 'timing', 'JS Dependencies', 'load', timeSincePageLoad, 'Submission');
		}
	
		ga('send', 'event', 'SurveyFinish', 'click', 'Submission', {
		'transport': 'beacon',
		'hitCallback': function(){document.location = url;}
        });

}

function questionBack(url){

		if (window.performance) {
			var timeSincePageLoad = Math.round(performance.now());
			ga('send', 'timing', 'JS Dependencies', 'load', timeSincePageLoad, document.title);
		}

		ga('send', 'event', 'QuestionBack', 'click', url, {
		'transport': 'beacon',
		'hitCallback': function(){document.location = url;}
        });
}