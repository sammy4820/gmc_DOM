window.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card-body .card');
  const totalDisplay = document.querySelector('.total');

  const updateTotal = () => {
    let total = 0;
    cards.forEach(card => {
      const price = parseFloat(card.querySelector('.unit-price').textContent);
      const quantity = parseInt(card.querySelector('.quantity').textContent);
      total += price * quantity;
    });
    totalDisplay.textContent = `${total} $`;
  };

  cards.forEach(card => {
    const plus = card.querySelector('.fa-plus-circle');
    const minus = card.querySelector('.fa-minus-circle');
    const quantityEl = card.querySelector('.quantity');
    const trash = card.querySelector('.fa-trash-alt');
    const heart = card.querySelector('.fa-heart');

    plus.addEventListener('click', () => {
      quantityEl.textContent = parseInt(quantityEl.textContent) + 1;
      updateTotal();
    });

    minus.addEventListener('click', () => {
      let qty = parseInt(quantityEl.textContent);
      if (qty > 0) {
        quantityEl.textContent = qty - 1;
        updateTotal();
      }
    });

    trash.addEventListener('click', () => {
      card.parentElement.remove(); // Removes the .card-body
      updateTotal();
    });

    heart.addEventListener('click', () => {
      heart.classList.toggle('text-danger');
    });
  });

  updateTotal(); // Initial total
});