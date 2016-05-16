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

if( localStorage.getItem('tac') == "true" ){
	document.querySelector('#tac').checked = true;
}

if( localStorage.getItem('shipping') ){
	//get all rafio buttons
	var shippingOptions = document.querySelectorAll('[name=shipping]')
	for( var i=0; i<shippingOptions.length; i++ ) {
		if ( shippingOptions[i].id == localStorage.getItem('shipping') ){
			shippingOptions[i].setAttribute('checked','checked')
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

document.querySelector('#tac').onclick = function(){
	localStorage.setItem('tac',this.checked)
}

// document.querySelector('#shipping-int').onclick = function() {
// 	localStorage.setItem('shipping', this.id)
// }
// document.querySelector('#shipping-ni').onclick = function() {
// 	localStorage.setItem('shipping', this.id)
// }
// document.querySelector('#shipping-si').onclick = function() {
// 	localStorage.setItem('shipping', this.id)
// }

var allShippingOptions = document.querySelectorAll('[name=shipping]');

for(var i=0; i<allShippingOptions.length; i++){
	allShippingOptions[i].onclick = shipping;

	}
	function shipping(){
		localStorage.setItem('shipping', this.id);
}


































