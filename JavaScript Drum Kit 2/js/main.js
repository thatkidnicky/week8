(() => {
	console.log("fired! ready to jam");

	function playDrumKitSound(event) {
		//debugger;
		//select corresponding audio element and make it play
		let audio = document.querySelector(`audio[data-key="${event.keyCode}"]`)
		console.log(audio);

		//debugging / error handling
		//if we dont have matching audio element, kill function
		if (!audio) { return; } //return  stops code execution

		//rewind audio on every click and make it play
		audio.currentTime = 0
		audio.play();

	}

	window.addEventListener("keydown", playDrumKitSound);
})();