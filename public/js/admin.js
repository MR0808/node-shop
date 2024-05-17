document
    .getElementById('deleteButton')
    .addEventListener('click', function (event) {
        const btn = event.target; // Get the button that was clicked
        const prodId = btn.parentNode.querySelector('[name=productId]').value;
        const csrf = btn.parentNode.querySelector('[name=CSRFToken]').value;

        const productElement = btn.closest('article');

        fetch('/admin/product/' + prodId, {
            method: 'DELETE',
            headers: {
                'x-csrf-token': csrf
            }
        })
            .then((result) => {
                return result.json();
            })
            .then((data) => {
                console.log(data);
                // productElement.remove(); not supported in Internet Explorer
                productElement.parentNode.removeChild(productElement);
            })
            .catch((err) => {
                console.log(err);
            });
    });
