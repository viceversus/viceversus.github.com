$(document).ready( function() {
	var $projectName = $(".project-name")
	var $projectDescriptions = $('.project-description')
	var $tabs = $('.tab')
	var $description
	var $tab
	var $active
	
	$tabs.on("click", function(e) {
		e.preventDefault();
		
		if($active) {
			$active.removeClass('active');
		}
		
		$active = $(this)
		$active.addClass('active');

		var $that = $('#'+$(this).children().html());
		
		if($tab) {
			$tab.slideUp('slow');
			setTimeout(function() {
				$that.slideDown('slow');
			}, 600);
		} else {
			$that.slideDown('slow');
		}
		
		$tab = $that;
		
	})
	
	$projectName.on("click", function(e) {
        e.preventDefault();
		var that = this;
		if($description) {
			$description.hide("slide", { direction: "left" }, 500);
			setTimeout(function() {
				$("#"+that.innerHTML).show("slide", { direction: "left" }, 500);
			}, 600);
		} else {
			$("#"+that.innerHTML).show("slide", { direction: "left" }, 500);
		}
		
		$description = $("#"+this.innerHTML)
	});
});