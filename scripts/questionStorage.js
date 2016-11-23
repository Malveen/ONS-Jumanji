function checkboxResponse(Qnum, totInputs){
	//stores the response for checkbox question number Qnum in sessionStorage
	var checked = false

	for(i=0;i<totInputs;i++){
		if(document.getElementById('form-input-' + i).checked){
			sessionStorage.setItem('Response'+Qnum+''+i, 1);
		}
		else{
			sessionStorage.setItem('Response'+Qnum+''+i, 0);
		}
	}
}

function checkboxInit(Qnum, totInputs){
	//ticks question boxes that have previously been clicked in the session using sessionStorage
	for(i=0;i<totInputs;i++){
		if(sessionStorage.getItem('Response'+Qnum+''+i) == 1){
			document.getElementById('form-input-' + i).checked = true;
		}
	}
}

function textResponse(Qnum){
	//stores the response for text question number Qnum in sessionStorage
	var n=document.getElementById('form-input-0').value;

	sessionStorage.setItem('Response'+Qnum, n);
}

function textInit(Qnum){
	//fills text box for question Qnum with previously entered data from sessionStorage
	if(sessionStorage.getItem('Response'+Qnum) != null){
		document.getElementById('form-input-0').value = sessionStorage.getItem('Response'+Qnum);
	}
}
function removeStorage(noInput){
	/*for(int i=0;i<4;i++){
		if(sessionStorage.getItem('Response1' + i) != null){
			sessionStorage.removeItem('Response1' + i);
		}
	}*/

	if(sessionStorage.getItem('Response21') != null){
		sessionStorage.removeItem('Response21');
	}
	if(sessionStorage.getItem('Response22') != null){
		sessionStorage.removeItem('Response22');
	}
	if(sessionStorage.getItem('Response2 1') != null){
		sessionStorage.removeItem('Response2 1');
	}
	if(sessionStorage.getItem('Response3') != null){
		sessionStorage.removeItem('Response3');
	}

}
