function sendData(){
	satisfaction = satisfactionSend();
}

function satisfactionSend(){
	var checked = false;
	var satisfaction = 0;
	for(i=0;i<5;i++){
		if(document.getElementById('form-input-' + i).checked){
			satisfaction = i;
		}
	}
	return satisfaction;
}