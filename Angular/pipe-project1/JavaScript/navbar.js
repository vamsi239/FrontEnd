let container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);

fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => {
        data.forEach(product => {
            let card = document.createElement("div");
            card.classList.add("card");

            card.innerHTML = `
                <img src="${product.image}" alt="">
                <h4>${product.title}</h4>
                <p>$${product.price}</p>
            `;

            container.appendChild(card);
        });
    })
    .catch(err => console.log(err));