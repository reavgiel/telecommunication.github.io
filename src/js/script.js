window.onload = function() {
	$(document).ready(function() {
		let igLink = $('<a href="https://www.instagram.com/" target="_blank" id="inst"></a>');
		let ytLink = $('<a href="https://www.youtube.com/" target="_blank" id="yout"></a>');
		let fbLink = $('<a href="https://www.facebook.com/" target="_blank" id="faceb"></a>');
		let fbIcon = $('<i class="fab fa-facebook"></i>');
		let igIcon = $('<i class="fab fa-instagram"></i>');
		let ytIcon = $('<i class="fab fa-youtube"></i>');
		igLink.append(igIcon);
		ytLink.append(ytIcon);
		fbLink.append(fbIcon);
		$('#social-icons').append(igLink);
		$('#social-icons').append(ytLink);
		$('#social-icons').append(fbLink);
	  });
	
	$(document).ready(function(){
		$('.scroll__element').click(function(event){
			$('body').toggleClass('lock');
			$('.header__menu__button,.header__menu').toggleClass('active');
		});
		});
	var swiper = new Swiper('.blog-slider', {
		spaceBetween: 30,
		effect: 'fade',
		loop: true,
		mousewheel: {
			invert: false,
		},
		// autoHeight: true,
		pagination: {
			el: '.blog-slider__pagination',
			clickable: true,
		}
	});
	var score = true;
	function createMenuButton() {
		let menuButton = $('<button class="menu-button"></button>');

		for (let i = 0; i < 3; i++) {
			let menuButtonLine = $('<div class="menu-button-line"></div>');
			menuButton.append(menuButtonLine);
		}
		menuButton.click(function() {
			score = !score;
			if(score == false){
				
				$("span#invision").show();
				$("span#invision").animate({ top: '+=100vh' }, 500);
				
			}else{
				$("span#invision").animate({ top: '-=100vh' }, 500);
				$("span#invision").hide();
			}
		});
		let m = $("a.navigation");
		
			m.click(function(){
				if(score==false){
			$("span#invision").animate({ top: '-=100vh' }, 500);
			$("span#invision").hide();
			score = !score;}
		});
		$('#menu-button-container').append(menuButton);
	}
	createMenuButton();
	$("span#invision").animate({ top: '-=100vh' }, 5);
//	$(window).scroll(function(){
//		$(".head").css("top",$(this).scrollTop() + "px");
//	});
  };
