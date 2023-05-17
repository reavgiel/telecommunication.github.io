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
	let ind = true;
		window.addEventListener('resize', invision);

		function invision() {
			
			if (window.innerWidth <= 1080 || window.innerHeight/window.innerWidth>0.7) {
				$('.menu-button').show();
				if(ind == false){$('#popup-menu').show();}
				$('#invision').hide();
			} else {
				$('.menu-button').hide();
				$('#popup-menu').hide();
				$('#invision').show();
			}
			if (window.innerWidth< window.innerHeight){$("body").css("font-size","2vw");}else{$("body").css("font-size","2vh");}
		}
		function createMenuButton() {
			let menuButton = $('<button class="menu-button"></button>');

			for (let i = 0; i < 3; i++) {
				let menuButtonLine = $('<div class="menu-button-line"></div>');
				menuButton.append(menuButtonLine);
			}

			menuButton.click(function() {
				ind = !ind;
				$('#popup-menu').show();
				$('.block').hide();
			});

			$('#menu-button-container').append(menuButton);
			invision();
		}
		
		$('#close-menu-button').click(function() {
			$('#popup-menu').hide();
			$('.block').show();
			ind = !ind;
		});
		  // handle click event on scroll buttons
		  $(".scroll-button").click(function() {
			  if(ind == false){
				$('#popup-menu').hide();
				$('.block').show();
				ind = !ind;
			  }
		});
		  
		$(".fa-instagram").mouseenter(function() {$(this).css("text-shadow", "1vh 0.1vh 2vh red");}).mouseleave(function(){$(this).css("text-shadow", "");});
		createMenuButton();
  };