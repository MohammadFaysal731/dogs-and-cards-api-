const cardsContainer = document.getElementById('cards-container');
const searchCards = () => {
    const searchInput = document.getElementById('search-Field');
    const searchText = searchInput.value;
    const error = document.getElementById('error');
    searchInput.value = '';
    if (isNaN(searchText)) {
        error.innerText = 'please give a number';
        cardsContainer.textContent = '';
    }
    else if (searchText == '') {
        error.innerText = 'you do not search emty';
        cardsContainer.textContent = '';
    }
    else if (searchText <= 0) {
        error.innerText = 'please give a positive number';
        cardsContainer.textContent = '';
    }
    else {
        const url = (`https://deckofcardsapi.com/api/deck/new/draw/?count=${searchText}`)
        fetch(url)
            .then(res => res.json())
            .then(data => displayCards(data.cards))
        error.textContent = '';
    }

};
const displayCards = cards => {
    cardsContainer.textContent = '';
    cards.forEach(card => {
        // console.log(card)
        const div = document.createElement('div');
        div.className = 'col-lg-4';
        div.innerHTML = `
       <div class="card" style="width: 18rem;">
                <img src="${card.images.png}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${card.code}</h5>
                    <h5>Name:${card.value}</h5>
                    <p class="card-text">${card.suit}</p>
                    <button onclick="cardDetails('${card.code}')"class="btn btn-primary">See Details</button>
                </div>
        </div>
            `;
        cardsContainer.appendChild(div);
    });
}
const cardDetails = (code) => {
    // console.log(code)
    const url = (`https://deckofcardsapi.com/api/deck/new/draw/?count=52`)
    fetch(url)
        .then(res => res.json())
        .then(data => {
            const allcards = data.cards;
            const singleCard = allcards.find(card => card.code === code)
            cardsContainer.textContent = '';
            const div = document.createElement('div');
            div.innerHTML = `
            <div class="card" style="width: 18rem;">
                <img src="${singleCard.images.png}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${singleCard.code}</h5>
                    <h5>Name:${singleCard.value}</h5>
                    <p class="card-text">${singleCard.suit}</p>
                </div>
            </div>
            `;
            cardsContainer.appendChild(div);

        })
}

