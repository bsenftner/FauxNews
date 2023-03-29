
function replacer() {
	document.body.innerHTML = document.body.innerHTML.replace(/Fox says/gi, "Faux News Liar says");
	document.body.innerHTML = document.body.innerHTML.replace(/Fox contributor/gi, "Faux News Liar");
	document.body.innerHTML = document.body.innerHTML.replace(/Fox News/gi, "Faux News");
	document.body.innerHTML = document.body.innerHTML.replace(/Fox Breaking News/gi, "Faux Fake Breaking News");
	document.body.innerHTML = document.body.innerHTML.replace(/Fox contributor/gi, "Faux News Paid Liar");
	document.body.innerHTML = document.body.innerHTML.replace(/Rupert Murdoch/gi, "professional liar Rupert Murderoch");
	document.body.innerHTML = document.body.innerHTML.replace(/Attorneys for Fox/gi, "Scum-bag Attorneys for Faux");
	document.body.innerHTML = document.body.innerHTML.replace(/Fox's attorneys/gi, "Faux's lying Attorneys");
	document.body.innerHTML = document.body.innerHTML.replace(/Fox attorney/gi, "Faux lying attorney");
}

replacer();
window.setTimeout( replacer, 6000 );	// catch and replace progressively loaded content

    