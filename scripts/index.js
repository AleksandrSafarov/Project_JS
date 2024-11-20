

const createCard = (cardContent) => {
    const card = cardTemplate.querySelector(".places__item").cloneNode(true);
    const cardTitle = card.querySelector(".card__title");
    const cardImage = card.querySelector(".card__image");
    const likeButton = card.querySelector(".card__like-button");
    const deleteButton = card.querySelector(".card__delete-button");


    cardTitle.textContent = cardContent.name;
    cardImage.src = cardContent.link;
    cardTitle.alt = cardContent.name;
    return card;
};

const cardsContainer = document.querySelector(".places__list");
const cardTemplate = document.querySelector("#card-template").content;
initialCards.forEach(function (item) {cardsContainer.append(createCard(item));
    console.log(1);
});

