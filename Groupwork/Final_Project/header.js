document.write('\
<link rel="stylesheet" type="text/css" href="headerfooter.css">\
<div id="hd">\
<div class="header" id="header">\
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
					<a href="menu.html">I\'m hungry!</a></button>\
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
			</div>\
		</div>	\
		<center>\
		</div>\
		<div id="placeholder" style height="0" ></div>\
');
window.onscroll = function() {myFunction()};
var divHeight;
var obj = document.getElementById('navbar');

if(obj.offsetHeight) {
    divHeight=obj.offsetHeight;
} else if(obj.style.pixelHeight) {
    divHeight=obj.style.pixelHeight;
}

var placeholder = document.getElementById("placeholder");
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
	if (window.pageYOffset >= sticky) {
	    navbar.classList.add("sticky");
	document.getElementById('placeholder').style.height = divHeight;
	} else {
		navbar.classList.remove("sticky");
	    document.getElementById('placeholder').style.height = 0;
	}
}
var node = document.getElementById('pagetag');
var text = node.innerHTML;
document.write(text);

var headHeight;
var headObj = document.getElementById('banner');

if(headObj.offsetHeight){
	headHeight=obj.offsetHeight;
}else if(headObj.style.pixelHeight){
	headHeight=headObj.style.pixelHeight;
}

document.write(headHeight);