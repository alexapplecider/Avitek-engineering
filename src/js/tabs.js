// Табы на странице Обьекты
function openTypeObjects(evt, cityName) {
	// Declare all variables
	var i, tabcontent, tablinks;
	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("object__tabs-content");
	for (i = 0; i < tabcontent.length; i++) {
			tabcontent[i].style.display = "none";
	}
	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("objects__tabs-tablinks");
	for (i = 0; i < tablinks.length; i++) {
			tablinks[i].className = tablinks[i].className.replace(" objects__tabs-tablinks--active", "");
	}
	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(cityName).style.display = "flex";
	evt.currentTarget.className += " objects__tabs-tablinks--active";
}
document.getElementById("defaultOpen").click();