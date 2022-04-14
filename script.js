const popupCats = document.querySelector(".popup_type_cats-info");
const catImages = document.querySelectorAll(".cat__image");

const popupCatsImage = popupCats.querySelector('.popup__image');
const popupCatsName = popupCats.querySelector(".popup__name");
const popupCatsText = popupCats.querySelector('.popup__text');
const closePopupCats = document.querySelector(".popup_close");
const cardTemplate = document.querySelector("#card-template");
const cardListContainer = document.querySelector('.cats-list');

function openPopup(popup) {
  popup.classList.add("popup_opened");
}

function closePopup() {
  const popupActive = document.querySelector(".popup_opened");
  if (popupActive) {
    popupActive.classList.remove("popup_opened");
  }
}



function handleCloseCatPopup() {
  closePopup(popupCats);
}


function createCardCat(dataCat) {
  const newCardElement = cardTemplate.content.querySelector(".cats-list__item").cloneNode(true);
  const cardImage = newCardElement.querySelector(".cat__image");
  const cardName = newCardElement.querySelector(".cat__title");
  
  
  console.log(newCardElement);
  
  cardImage.src = dataCat.img_link;
  cardName.textContent = dataCat.name;
  

  function handleClickCatImage() {
    popupCatsImage.src = dataCat.img_link;
    popupCatsName.textContent = dataCat.name;
    popupCatsText.textContent = dataCat.description;
    openPopup(popupCats);
  }


  cardImage.addEventListener("click", handleClickCatImage);
  return newCardElement;
  
}

function cardAddToContainer(elementNode, container) {
    container.append(elementNode)
}

cats.forEach(dataCat => cardAddToContainer(createCardCat(dataCat), cardListContainer))





closePopupCats.addEventListener("click", handleCloseCatPopup);


