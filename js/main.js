const toggle = (element, classIn, classOut) => {
	element.classList.add(classIn);
	element.classList.remove(classOut);
}

const cards = document.querySelectorAll('.link-wrapper');

cards.forEach( ( card, index) => {
	card.addEventListener('mouseover', () => {
		toggle(card.children[0], 'moveup', 'movedown');
	})

	card.addEventListener('mouseleave', () => {
		toggle(card.children[0], 'movedown', 'moveup');
	})
	
} )