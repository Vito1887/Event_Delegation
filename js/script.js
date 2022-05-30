const menuBody = document.querySelector('.menu');

document.addEventListener("click", menu);

function menu(event) {
	if (event.target.closest('.menu__button')) {
		menuBody.classList.toggle('_active');
	}
	if (!event.target.closest('.menu')) {
		menuBody.classList.remove('_active');
	}
}

document.addEventListener('keyup', function (event) {
	if (event.code === 'Escape') {
		menuBody.classList.remove('_active');
	}
});
