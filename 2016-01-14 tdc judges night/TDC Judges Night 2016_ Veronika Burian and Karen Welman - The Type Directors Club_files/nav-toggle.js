$(document).ready(function(){
	
	$('#nav > li').hover(function () {
				
				// Get the menu to expand
				var submenu = $(this).children(".sub-menu");
				
				// Now slide down this menu
				submenu.slideDown(100);
				
			}, function () {
				
				// Get the menu to expand
				var submenu = $(this).children(".sub-menu");
				
				// Now slide down this menu
				submenu.slideUp(100);
				
			});
			
	$('.entry-content img, #right-sidebar img').width("auto").height("auto");
	
});	



/*

$('.sub-toggle').click(function () {
var menuToggledOut;

	// Get the menu to expand
	var submenu = $(this).children(".sub-menu");

	// If there's a menu currently out and its the same menu as this
	if (menuToggledOut != null && menuToggledOut[0] === submenu[0]) {
		// Shut the toggled out menu
		menuToggledOut.slideToggle(300);
		// Show that no menu is toggled out
		menuToggledOut = null;
		// Stop moving forward
		return;
	}
	
	// If there's a menu currently out and it's NOT the same menu, slide-up the currently out menu
	if (menuToggledOut != null) menuToggledOut.slideToggle(300);

	// Now slide down this menu
	submenu.slideToggle(300);
	menuToggledOut = submenu;

});
*/

/*
$(document).ready(function(){
	var $menuToggledOut;
	
	$('.sub-toggle').click(function () {
				
				var $submenu = $(this).next(".sub-menu");
				
				if ($submenu === $menuToggledOut) return;
				if ($menuToggledOut != null) $menuToggledOut.slideToggle();
				
				$submenu.slideToggle();
				$menuToggledOut = $submenu;
				
			});
});
*/