const backToTopButton = document.querySelector(".back-to-top-button");
const parallax = document.querySelector(".parallax");

parallax.onscroll = () =>
{
	backToTopButton.style.display = parallax.scrollTop > 50 ? "flex" : "none";
}

function backToTop() 
{
    parallax.scrollTop = 0;
}
