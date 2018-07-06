export function isValidZip(zip){
	return /^\d{5}(-\d{4})?$/.test(zip);
}

//Display Alert Message

export function showAlert(message, className){
	//Create a Div
	const div = document.createElement('div');

//Add Classes
	div.className = `alert alert-${className}`;
//Add Text
	div.appendChild(document.createTextNode(message));
//Get Form
	const container = document.querySelector('.container');
//
const form = document.querySelector('#pet-form');

//Insert Alert
container.insertBefore(div, form);
setTimeout(()=> document.querySelector('.alert').remove(), 3000);


}