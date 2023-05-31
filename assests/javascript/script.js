// first step is to make cards turn when clicking, followed by card active period will be until next card is clicked.
// If correct, will hold cards over and remain visible, if wrong cards will flip back around and return to starting poisiton.

const cards = document.querySelectorAll('.card');

function flipcard() {
    this.classlist.toggle('flip');
}

cards.forEach(card => card.addEventListener('click', flipcard));
