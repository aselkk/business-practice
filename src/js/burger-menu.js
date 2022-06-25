export const renderBurgerMenu = () => {
	const menuBtn = document.querySelector('.menu-btn');
	const menu = document.querySelector('.menu');

	menuBtn.addEventListener('click', function() {
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
	document.body.classList.toggle('overflow');
	});
};