document.write('\
<link rel="stylesheet" type="text/css" href="headerfooter.css">\
<div id="hd">\
<div class="header">\
			<center id="hdr">\
				<div class="punchline"><h4>Di raw masyandong masarap pero pwede na!</h4></div>\
			<div class="banner">\
				<div id="banner"><img src="Background2.png"></img></div>\
				<div id="logo"><a href="HomePage.html" class="home"><img src="logo_banner_3.png"></a></img>\
				</div>\
			</div>\
			</center>\
		</div>\
		<div id="navbar">\
			<div class="navbar">\
				<div class="dropdown">\
					<button class="dropbtn">\
					<div><a href="HomePage.html">Home</a></div>\
					</button>\
				</div>\
				<div class="dropdown"><button class="dropbtn">\
					<a href="menu.html" class="currentPage">I\'m hungry!</a></button>\
					<div class="dropdown-content">\
					</div>\
				</div>\
						\
				<div class="dropdown">\
					<button class="dropbtn"><a href="news.html">News and Blogs</a></button>\
					<div class="dropdown-content">\
					</div>\
					</div>\
				\
				<div class="dropdown">\
					<button class="dropbtn"><a href="about.html">About us</a></button>\
					<div class="dropdown-content">\
					</div>\
					</div>\
				\
				<div class="dropdown">\
					<button class="dropbtn"><a href="yes.html">Now Hiring</a></button>\
					<div class="dropdown-content">\
					</div>\
				</div>\
			</div>		\
		</div>	\
		<center>\
		</div>\
');
	window.onscroll = function() {myFunction()};

	// Get the navbar
	var divHeight;
var obj = document.getElementById('banner');

if(obj.offsetHeight) {
    divHeight=obj.offsetHeight;

} else if(obj.style.pixelHeight) {
    divHeight=obj.style.pixelHeight;

}
	// Get the offset position of the navbar
	var navbar = document.getElementById("navbar");
	var sticky = navbar.offsetTop;
	// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
	function myFunction() {
	  if (window.pageYOffset >= sticky) {
	    navbar.classList.add("sticky")
	  } else {
	    navbar.classList.remove("sticky");
	  }
	}