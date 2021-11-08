// const restourant = 'db/tanuki';
const cardsMenu = document.querySelector('.cards-menu');

const changeTitle = (restarount) => {
 const restarountTitle = document.querySelector('.restaurant-title');
 restarountTitle.textContent = restarount.name;
}


const renderItems = (data) => {
  data.forEach(({ description, id, image, name, price }) => {
    const card = document.createElement('div');
    
   
    card.classList.add('card');

    card.innerHTML = `
    <img src="${image}" alt="image" class="card-image" />
    <div class="card-text">
      <div class="card-heading">
        <h3 class="card-title card-title-reg">${name}</h3>
      </div>
      <!-- /.card-heading -->
      <div class="card-info">
        <div class="ingredients">${description}
        </div>
      </div>
      <!-- /.card-info -->
      <div class="card-buttons">
        <button class="button button-primary button-add-cart">
          <span class="button-card-text">В корзину</span>
          <span class="button-cart-svg"></span>
        </button>
        <strong class="card-price-bold">${price}</strong>
      </div>
    </div>
    `
 cardsMenu.append(card);
  })
}

console.log(localStorage.getItem('restarount'));

if (localStorage.getItem('restarount')) {
const restarount = JSON.parse(localStorage.getItem('restarount')) ;
changeTitle(restarount);
// console.log(restarount)
fetch(`./db/${restarount.products}`)
  .then((response) => response.json())
  .then((data) => {
    renderItems(data)
  })
  .catch((error) => {
    console.log(error)
  })
} else {
  window.location.href = '/';
}

