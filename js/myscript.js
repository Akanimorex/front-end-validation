let userNames = ['rex', 'peace', 'collins', 'jojo','drax'];
let passwords =['zyzzx', 'riches', 'atada','baby','knife'];

function time(){
	let username = document.getElementById('name');
	let password =document.getElementById('pass');
	let display = document.getElementById('display')

	// array.indexOf(username.value) 
	// if (username.value == userNames)
	// checking if the username and password are in the array

	if ((userNames.indexOf(username.value)) >= 0  && passwords[ userNames.indexOf(username.value) ] == password.value ){
		//matching the right username and password  
		console.log('valid stuff');
		display.innerHTML='its valid';
	

	}else{

		display.innerHTML='invalid username';
	}
}

