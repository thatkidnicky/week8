(() => {
	console.log("fired! ready to jam");

	function playDrumKitSound(event) {
		//debugger;
		//select corresponding audio element and make it play
		let audio = document.querySelector(`audio[data-key="${event.keyCode}"]`)
		console.log(audio);

		//debugging / error handling
		//if we dont have matching audio element, kill function
		// ! is a "not" operator or a bang
		if (!audio) { return; } //return  stops code execution

		//rewind audio on every click and make it play
		audio.currentTime = 0
		audio.play();

		//grab div and animate it
		let key = document.querySelector(`div[data-key="${event.keyCode}"]`)
		key.classList.add('playing');
	}

	function removePlayingClass(event){
		//debugger;
		if (event.propertyName !== "transform") {
			return;
		} else {
			//remove playing class here from active div
			console.log('transition is done!', `${event.propertName}`);
			event.target.classList.remove('playing');
		}
	}

	const keys = Array.from(document.querySelectorAll('.keys'));

	keys.forEach(key => key.addEventListener("transitionend", removePlayingClass));

	window.addEventListener("keydown", playDrumKitSound);
})();