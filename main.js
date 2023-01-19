let row = document.querySelector(".row");
fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((show) => {
        show.forEach((item) => {
            row.innerHTML += `
            <div class="card">
                <h2>${item.category}</h2>
                <p>${item.title}</p>
                <img src="${item.image}" class="images"/>
                <p>${item.description}</p>
                <p>${item.rating.rate}</p>
                <span class="qw"><i>${item.price}</i></span>
            </div>
        `
        });
    });