

 /*$(document).ready(function() {
    $('#fullpage').fullpage()
});



$(document).ready(function(){
  $('.slider').slider();
});

init();

function init(){
	$(document).ready(function() {
	var scrolloverflowed;
	if ($('#fullpage').width() < 600) { // check the width (window.width() or other method)
		scrolloverflowed = false;
	} else {
		scrolloverflowed = true;
	}
    $('#fullpage').fullpage({
    });
}

//adding a section dynamically
$('button').click(function(){
    $('#fullpage').append('<div class="section">New section</div>');

    //remembering the active section / slide
    var activeSectionIndex = $('.fp-section.active').index();
    var activeSlideIndex = $('.fp-section.active').find('.slide.active').index();

    $.fn.fullpage.destroy('all');

    //setting the active section as before
    $('.section').eq(activeSectionIndex).addClass('active');

    //were we in a slide? Adding the active state again
    if(activeSlideIndex > -1){
        $('.section.active').find('.slide').eq(activeSlideIndex).addClass('active');
    }

    init();
});*/

$(document).ready(function() {
	var scrolloverflowed;
	if ($('#fullpage').width() <=400) { // check the width (window.width() or other method)
		scrolloverflowed = false;
	} else {
		scrolloverflowed = true;
	}
	$('#fullpage').fullpage({
		scrollingSpeed: 1000,
		scrollOverflow: scrolloverflowed,
	});
});

jQuery(document).ready(function(){
    jQuery('.skillbar').each(function(){
        jQuery(this).find('.skillbar-bar').animate({
            width:jQuery(this).attr('data-percent')
        },6000);
    });
});