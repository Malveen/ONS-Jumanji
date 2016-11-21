function checkboxResponse(Qnum, totInputs){
	
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
	
	for(i=0;i<totInputs;i++){
		
		if(sessionStorage.getItem('Response'+Qnum+''+i) == 1){
			
			document.getElementById('form-input-' + i).checked = true;
		}
	}	
}