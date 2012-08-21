$(document).ready( function() {
	var $projectName = $(".project-name")
	var $projectDescriptions = $('.project-description')
	
	$projectName.on("click", function() {
		$projectDescriptions.hide();
		$("#"+this.innerHTML).show("slide", { direction: "left" }, 500);
	});
});