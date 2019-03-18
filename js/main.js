(() => {
	// stub
	console.log('fired!');

	const sigils = document.querySelectorAll('.sigil-container'),
		  lightbox = document.querySelector('.lightbox'),
		  video = document.querySelector('video');
		  lbClose = document.querySelector(".lightbox-close")


	function openLightbox() {
		let targetHouse = this.className.split(" ")[1];

		//this gives us a lowercase house name -> the second class on 
		//all of the shields ie stark, baratheon
		//flip this to uppercase

		let targetVid = targetHouse.charAt(0).toUpperCase() + targetHouse.slice(1);

		video.src = `video/House-${targetVid}.mp4`;
		lightbox.classList.add('lightbox-on');

		video.load();
		video.play();
	}

	function closeLightbox() {
		lightbox.classList.remove('lightbox-on');

	//rewind the current video and pause it
	video.currentTime = 0
	video.pause();
   }
	sigils.forEach(sigil => sigil.addEventListener('click', openLightbox));

	lbClose.addEventListener('click', closeLightbox);

	video.addEventListener('ended', closeLightbox);
})();