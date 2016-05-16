// does this user have a name saved
if ( localStorage.getItem('full-name') ) {
	// put the name in the name feild
	document.querySelector('#full-name').value = localStorage.getItem('full-name');
}

// has this user picked a country
if( localStorage.getItem('country') ){
	//loop over each option
	var selectElement = document.querySelector('#country');
	for( var i = 0; i<selectElement.length; i++ ){
		//is this the option the user chose?
		if( localStorage.getItem('country') == selectElement[i].value ){
			//select this option
			selectElement[i].setAttribute('selected', 'selected');
		}
	}
}

// listen to input on the name feild or key strokes
document.querySelector('#full-name').onkeyup = function(){
	localStorage.setItem('full-name', this.value);
}

//listen for changes in the country options
document.querySelector('#country').onchange = function(){
	localStorage.setItem('country', this.value);
}