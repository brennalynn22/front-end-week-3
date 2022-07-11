
//Change the event listener that is listening for the Contact Us form to submit. Instead of doing a console.log message on submit, the form should alert the user that the form has been submitted successfully. Use the alert function in Javascript.

// Add an event listener that listens for a mouseover event. When the user mouses over the picture on the page (cat or rubber duck) the page should alert give the user a compliment.


console.log("hello world");
//const message= document.querySelector('contact')


function handleSubmit(evt) {
	evt.preventDefault();
	//form.textContent="Submitted successfully"
	//console.log('form submit');
	alert ('Submitted sucessfully')
}

function easterEgg(event){
	alert ('Wow! Way to go! Keep up the hard work ')
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit)

let kitty = document.querySelector('img')

kitty.addEventListener('mouseover', easterEgg)