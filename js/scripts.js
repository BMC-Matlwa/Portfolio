var TxtType = function(el, toRotate, period) {
	this.toRotate = toRotate;
	this.el = el;
	this.loopNum = 0;
	this.period = parseInt(period, 10) || 2000;
	this.txt = '';
	this.tick();
	this.isDeleting = false;
};

TxtType.prototype.tick = function() {
	var i = this.loopNum % this.toRotate.length;
	var fullTxt = this.toRotate[i];

	if (this.isDeleting) {
	this.txt = fullTxt.substring(0, this.txt.length - 1);
	} else {
	this.txt = fullTxt.substring(0, this.txt.length + 1);
	}

	this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

	var that = this;
	var delta = 200 - Math.random() * 100;

	if (this.isDeleting) { delta /= 2; }

	if (!this.isDeleting && this.txt === fullTxt) {
	delta = this.period;
	this.isDeleting = true;
	} else if (this.isDeleting && this.txt === '') {
	this.isDeleting = false;
	this.loopNum++;
	delta = 500;
	}

	setTimeout(function() {
	that.tick();
	}, delta);
};

window.onload = function() {
	var elements = document.getElementsByClassName('typewrite');
	for (var i=0; i<elements.length; i++) {
		var toRotate = elements[i].getAttribute('data-type');
		var period = elements[i].getAttribute('data-period');
		if (toRotate) {
		  new TxtType(elements[i], JSON.parse(toRotate), period);
		}
	}
	// INJECT CSS
	var css = document.createElement("style");
	css.type = "text/css";
	css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
	document.body.appendChild(css);
};
$(document).ready(function() {
	$('a.shownav').on('click', function(){
		$('nav.headernav').slideDown();
		$(this).next('a.hidenav').fadeIn();
		$(this).hide();
		$('header').css('z-index', '10');
		$('body').addClass('scrolloff');
	});
	$('a.hidenav').on('click', function(){
		$('nav.headernav').fadeOut();
		$(this).prev('a.shownav').fadeIn();
		$(this).hide();
		$('header').css('z-index', '2');
		$('body').removeClass('scrolloff');
	});

	var setscreen_width = $(window).width();
	if(setscreen_width < 1100){
		$('nav ul li').on('click', function(){
			$('nav.headernav').fadeOut('slow');
			$('a.hidenav').hide();
			$('a.shownav').fadeIn();
		});
	}


	$(window).scroll(function() {
		if($(this).scrollTop() >= 100){
			$('header').addClass('fixed');
		}else{
			$('header').removeClass('fixed');
		}
	});
	$(function(){
		$(".typed").typed({
			strings: ["Developers.", "Designers.", "People."],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 30,
			// time before typing starts
			startDelay: 1200,
			// backspacing speed
			backSpeed: 20,
			// time before backspacing
			backDelay: 500,
			// loop
			loop: true,
			// false = infinite
			loopCount: 5,
			// show cursor
			showCursor: false,
			// character for cursor
			cursorChar: "|",
			// attribute to type (null == text)
			attr: null,
			// either html or text
			contentType: 'html',
			// call when done callback function
			callback: function() {},
			// starting callback function before each string
			preStringTyped: function() {},
			//callback for every typed string
			onStringTyped: function() {},
			// callback for reset
			resetCallback: function() {}
		});
	});
	

	var owl = $('.owl-carousel').owlCarousel({
		autoplay: true,
		autoplayTimeout: 4000,
		slideTransition: 'ease',
		autoplayHoverPause: true,
	    loop:true,
	    //center: true,
	    margin:55,
	    nav:false,
	    dots: false,
	    responsive:{
	        0:{
	            items:1
	        },
	        440:{
	            items:2
	        },
	        960:{
	            items:3
	        },
	        2200:{
	            items:4
	        }
	    }
	});

	$( function() {
	    $( "#datepicker" ).datepicker({ minDate: 0, maxDate: "+1M +10D" });
	    $( "#datepicker" ).datepicker('option', 'dateFormat', 'DD, d MM, yy');
	});
});

// PROGRESS BAR

$(function () { 
	$('[data-toggle="tooltip"]').tooltip({trigger: 'manual'}).tooltip('show');
  });  
  
  // $( window ).scroll(function() {   
   // if($( window ).scrollTop() > 10){  // scroll down abit and get the action   
	$(".progress-bar").each(function(){
	  each_bar_width = $(this).attr('aria-valuenow');
	  $(this).width(each_bar_width + '%');
	});
		 
   //  }  
  // });
  
  