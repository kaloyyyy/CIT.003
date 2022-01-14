document.write('<center>\
<div class="header" id="header">\
			<center id="hdr">\
				<div class="punchline"><h4>Di raw masyandong masarap pero pwede na!</h4></div>\
			<div class="banner">\
				<div id="banner"><img src="Background2.png"></img></div>\
				<div id="logo"><a href="HomePage.html" class="home"><div id="imglogo"><img src="logo_banner_3.png"></a></img>\
				</div></div>\
			</div>\
		</div>\
		<div id="navbar">\
			<div class="navbar">\
				<div class="dropdown">\
					<button class="dropbtn">\
					<div id="home" class="pagenow"><a href="HomePage.html">Home</a></div>\
					</button>\
				</div>\
				<div class="dropdown"><button class="dropbtn">\
					<div id="menu" class="pagenow"><a href="menu.html">I\'m hungry!</a></div>\
					</button>\
					<div class="dropdown-content">\
					</div>\
				</div>\
						\
				<div class="dropdown">\
					<button class="dropbtn">\
					<div id="news" class="pagenow"><a href="news.html">News and Blogs</a></div>\
					</button>\
					<div class="dropdown-content">\
					</div>\
					</div>\
				\
				<div class="dropdown">\
					<button class="dropbtn">\
					<div id="about" class="pagenow"><a href="about.html">About us</a></div>\
					</button>\
					<div class="dropdown-content">\
					</div>\
					</div>\
				\
				<div class="dropdown">\
					<button class="dropbtn">\
					<div id="hire" class="pagenow"><a href="hire.html">Now Hiring</a></div>\
					</button>\
					<div class="dropdown-content">\
					</div>\
				</div>\
			</div>\
		</div><br>\
		<div id="placeholder"></div>\	\
		</center>\
		</center>');
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

if(text=="home"){
	bordercurr();
}
if(text=="menu"){
	bordercurr();
}
if(text=="news"){
	bordercurr();
}
if(text=="about"){
	bordercurr();
}
if(text=="hire"){
	bordercurr();
}

function bordercurr(){
	document.getElementById(text).style.borderBottom = "5px solid yellow";
}

