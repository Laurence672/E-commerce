const phoneData = [
    
        {
        phone: "Iphone 13 pro max",
        price: 29000,
        condition: "used",
        image: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13-pro-max.jpg",
        description: "Lady owned, used for 1 year only, rfs: need to pay bills",
    },
    {
        phone: "Xiaomi 14T",
        price: 13000,
        condition: "like new",
        image: "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-14t.jpg",
        description: "Excellent condition, barely used",
    },
    {
        phone: "Xiaomi 13T",
        price: 11000,
        condition: "good",
        image: "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-13t.jpg",
        description: "Works perfectly, minor scratches on back",
    },
    {
        phone: "Samsung S22 Ultra",
        price: 32000,
        condition: "like new",
        image: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s22-ultra-5g.jpg",
        description: "Pristine condition, all accessories included",
    }
];


phoneData.forEach((phone) => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML =    `
    <img src="${phone.image}">
    <h3>${phone.phone}</h3>
    <p>₱${phone.price}</p>
    <p>${phone.condition}</p>
    <p>${phone.description}</p>
    <button class="add-to-cart-btn" data-phone-name="${phone.phone}"data-phone-price="${phone.price}"> Add to Cart</button>
    
`;
    
    
    
    const productsContainer = document.querySelector('#products');
    productsContainer.appendChild(card);

});



const addToCartButton = document.querySelectorAll(`.add-to-cart-btn`);

addToCartButton.forEach((buton) => {
    const phoneName = this.getAttribute(`data-phone-name`);
    const phonePrice = this.getAttribute(`data-phone-price`);


    cart.push({
    name: phoneName,
    price: parseInt(phonePrice)


    });


    localStorage.setItem(`cartData`, JSON.stringify(cart));

    console.log(`Cart updated:`, cart);
    alert('${phoneName} added to cart!');

});




