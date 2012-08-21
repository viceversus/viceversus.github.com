$(document).ready( function() {
	var $projectName = $(".project-name")
	var $projectDescriptions = $('.project-description')
	var $description
	
	$projectName.on("click", function(e) {
        e.preventDefault();
		var that = this;
		if($description) {
			console.log($description);
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