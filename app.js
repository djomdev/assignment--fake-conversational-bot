
function setTimeOf(mseconds, query, str) {
	setTimeout(function() {
		document.querySelector('#' + query).innerText = str;
		document.querySelector('.box__content-' + query).classList.add('active');
	}, mseconds);
}

function getValueOfInput() {
	var form = document.querySelector('form').addEventListener('submit', function(e){
	  e.preventDefault();
	  var textOfTarget = e.target.elements.username.value; 
	  if (textOfTarget !== "") { 
		  if (textOfTarget.length > 6) {
			    setTimeOf(1000, 'four', "That’s a long name.");
		  } else {
			    setTimeOf(1000, 'four', "That’s a short name.");
		  }
	      setTimeOf(2000, 'five', "Nice to meet you, " + textOfTarget + ".");
      }
	});
}

function running() {
	setTimeOf(1000, 'one',  'Hello, my name is Diego!');
	setTimeOf(2000, 'two', 'I used to be an anarchist who would rather never accept to any higher responsibility, but now I am a student for aspiring to be a Web Developer.');
	setTimeOf(3000, 'three', 'I like watching films and reading books. Tell me, what about you.');
    setTimeout(function() {
	    var textInput = document.querySelector('.box__input').style.display = 'block';
		getValueOfInput();
	}, 4000);

}


running();