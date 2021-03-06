const grid = document.querySelector('.grid')

const characters = [
    'beth',
    'jerry',
    'jessica',
    'morty',
    'pessoa-passaro',
    'pickle-rick',
    'rick',
    'summer',
    'meeseeks',
    'scroopy',
];


let firstCard = '';
let secondCard = '';

const checkCards = () => {

}

const revealCard = ({ target }) => {
    if(target.parentNode.className.includes('reveal-card')) {
        return;
    }

    if(firstCard === ''){
        target.parentNode.classList.add('reveal-card')
        firstCard = target.parentNode;
    }else if(secondCard === ''){
        target.parentNode.classList.add('reveal-card')
        secondCard = target.parentNode;
    }

}

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

const createCard = (character) => {
    const card  = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url('../images/${character}.png')`

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revealCard);
    card.setAttribute('data-character', character);

    return card;
}

const loadGame = () => {
    const duplicatedCharacters = [ ...characters, ...characters];

    const suffledCharacters = duplicatedCharacters.sort(() => Math.random() - 0.5)

    suffledCharacters.forEach((character) => {
        const card = createCard(character);
        grid.appendChild(card);
    });
}

loadGame();