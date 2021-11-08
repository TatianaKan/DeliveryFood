const cart = () => {
  const buttonCart = document.getElementById('cart-button');
  const modalCard = document.querySelector('.modal-cart');
  const close = modalCard.querySelector('.close');
  const modalBody = modalCard.querySelector('.modal-body');

  const incCount = (id) => {
    const cartArray = JSON.parse(localStorage.getItem('cart'))
  
    cartArray.map((item) => {
      if (item.id === id) {
      item.count++
      }
      return item
    });
    localStorage.setItem('cart', JSON.stringify(cartArray))
    renderItems(cartArray)
  }

  const dicCount = (id) => {
    const cartArray = JSON.parse(localStorage.getItem('cart'))
    
    cartArray.map((item) => {
      if (item.id === id) {
        item.count = item.count>0 ? item.count-1 :0;
      // if (item.count>0) {
      //   item.count--
      // } else {
      //   item.count=0
      // }
      }
      return item
    });
    localStorage.setItem('cart', JSON.stringify(cartArray))
    renderItems(cartArray)
  }

  const renderItems = (data) => {
    modalBody.innerHTML = ''
    data.forEach(({ name, price, id, count }) => {

      //food-row
      const cartElem = document.createElement('div');
      cartElem.classList.add('food-row');
      cartElem.innerHTML = `
<span class="food-name">${name}</span>
					<strong class="food-price">${price}₽</strong>
					<div class="food-counter">
						<button class="counter-button btn-dec">-</button>
						<span class="counter">${count}</span>
						<button class="counter-button btn-inc">+</button>
`

      cartElem.querySelector('.btn-dec').addEventListener('click', () => {
        dicCount(id)
      })

      cartElem.querySelector('.btn-inc').addEventListener('click', () => {
        incCount(id)
      })
      modalBody.append(cartElem);

    })
  }

  buttonCart.addEventListener('click', () => {
    console.log(JSON.parse(localStorage.getItem('cart')));

    if (localStorage.getItem('cart')) {
      renderItems(JSON.parse(localStorage.getItem('cart')))
    }
    modalCard.classList.add('is-open');
  })

  close.addEventListener('click', () => {
    modalCard.classList.remove('is-open');
  })
}

cart();