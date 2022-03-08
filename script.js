

	var check = document.getElementById('submit') 

check.addEventListener("click",()=>{
	var form = document.getElementById('form')
	var first_name = document.getElementById('first_name').value
	var last_name = document.getElementById('last_name').value
	var email = document.getElementById('email').value
	var phone = document.getElementById('phone').value
	var url = document.getElementById('url').value
	var errorElement = document.getElementById('error')

	var numberonly = /^\d+$/;
	var textonly =/^[A-Za-z]*$/;
	var emailonly =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	var urlonly = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;

	document.getElementById('fn_error').innerHTML = '';
	document.getElementById('ln_error').innerHTML = '';
	document.getElementById('ph_error').innerHTML = '';
	document.getElementById('em_error').innerHTML = '';
	document.getElementById('wb_error').innerHTML = '';

	var has_errors = '0';

	if(first_name == ""){
		document.getElementById('fn_error').innerHTML = "Please Enter Your First Name";
		has_errors = '1'
	}
	if(!textonly.test(first_name)){
		document.getElementById('fn_error').innerHTML = "Only characters allowed";
		has_errors = '1'
	}

	if(last_name ==""){
		document.getElementById('ln_error').innerHTML = "Please Enter Your Last Name";
		has_errors = '1'
	}
	if(!textonly.test(last_name)){
		document.getElementById('ln_error').innerHTML = "Only characters allowed";
		has_errors = '1'
	}

	if(email ==""){
		document.getElementById('em_error').innerHTML = "Please Enter A Valid Email";
		has_errors = '1'
	}
	if(!emailonly.test(email)){
		document.getElementById('em_error').innerHTML = "Please enter a valid email";
		has_errors = '1'
	}

	if(phone ==""){
		document.getElementById('ph_error').innerHTML = "Please Enter Your Phone";
		has_errors = '1'
	}
	if(!numberonly.test(phone)){
		document.getElementById('ph_error').innerHTML = "Please enter a valid phone";
		has_errors = '1'
	}
	var ele = document.getElementsByName('has_website');
    
	for(i = 0; i < ele.length; i++) {
			
		if(ele[i].type="radio") { 
			
			if(ele[i].checked && ele[i].value == '0'){
				

				if(url ==""){
					document.getElementById('wb_error').innerHTML = "Please Enter Your Website";
					has_errors = '1'
				}
				if(!urlonly.test(url)){
					document.getElementById('wb_error').innerHTML = "Please enter a valid website";
					has_errors = '1'
				}
			}
		
		}
	}
	if(has_errors=='0'){
		alert("‘Form submitted successfully!")
	}

	
	
});


