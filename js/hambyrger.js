$(document).ready(function () {
	var touch = $('.touch-menu');
	var menu = $('.nav');

	$(touch).on('click', function (e) {
		e.preventDefault();
		menu.slideToggle();
	});
	$(window).resize(function () {
		var wid = $(window).width();
		if (wid > 760 && menu.is(':hidden')) {
			menu.removeAttr('style');
		}
	});
});










(function() {

	"use strict";

	var toggles = document.querySelectorAll(".cmn-toggle-switch");

	for (var i = toggles.length - 1; i >= 0; i--) {
		var toggle = toggles[i];
		toggleHandler(toggle);
	};

	function toggleHandler(toggle) {
		toggle.addEventListener( "click", function(e) {
			e.preventDefault();
			(this.classList.contains("active") === true) ? this.classList.remove("active") : this.classList.add("active");
		});
	}

})();






(function(){
	var gitFork = document.createElement("iframe");
	gitFork.setAttribute( "src", "http://ghbtns.com/github-btn.html?user=callmenick&repo=Animating-Hamburger-Icons&type=fork&count=true" );
	gitFork.setAttribute( "allowtransparency", "true" );
	gitFork.setAttribute( "frameborder", "0" );
	gitFork.setAttribute( "scrolling", "0" );
	gitFork.style.width = "95px";
	gitFork.style.height = "20px";
	document.getElementById("github-icons").appendChild(gitFork);

	var gitWatch = document.createElement("iframe");
	gitWatch.setAttribute( "src", "http://ghbtns.com/github-btn.html?user=callmenick&repo=Animating-Hamburger-Icons&type=watch&count=true" );
	gitWatch.setAttribute( "allowtransparency", "true" );
	gitWatch.setAttribute( "frameborder", "0" );
	gitWatch.setAttribute( "scrolling", "0" );
	gitWatch.style.width = "110px";
	gitWatch.style.height = "20px";
	document.getElementById("github-icons").appendChild(gitWatch);
})();







