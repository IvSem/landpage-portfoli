'use strict';
document.addEventListener('click', documentClick);
function documentClick(e) {
	const targetItem = e.target;
	if (targetItem.closest('.icon-menu')) {
		document.documentElement.classList.toggle('menu__open');
	}
}

//?=======================Scroll===============================

// window.addEventListener('load', windowLoad);
// function windowLoad() {
// 	document.addEventListener('click', documentActions);
// }
// function documentActions(e) {
// 	const targetElement = e.target;

// 	if (targetElement.hasAttribute('data-goto')) {
// 		const gotoElement = document.querySelector(`${targetElement.dataset.goto}`);
// 		const headerHeight = document.querySelector('.header').offsetHeight;
// 		if (gotoElement) {
// 			window.scrollTo({
// 				top: gotoElement.offsetTop - headerHeight,
// 				behavior: 'smooth',
// 			});
// 		}

// 		e.preventDefault();
// 	}

// 	//?===========================works filter===========================

// 	if (
// 		targetElement.classList.contains('items-works__type') &&
// 		!targetElement.classList.contains('active')
// 	) {
// 		const activeElement = document.querySelector('.items-works__type.active');
// 		const elements = document.querySelectorAll('.items-works__item');
// 		const elementType = targetElement.dataset.workType;

// 		activeElement.classList.remove('active');
// 		targetElement.classList.add('active');
// 		elements.forEach((element) => {
// 			!elementType || element.dataset.workType === elementType
// 				? (element.hidden = false)
// 				: (element.hidden = true);
// 		});
// 	}
// }
