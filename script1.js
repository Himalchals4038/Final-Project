let productContainer = document.getElementById('productContainer');
let smartphones = document.getElementById('smartphones');
let laptops = document.getElementById('laptops');
let fragrances = document.getElementById('fragrances');
let skincare = document.getElementById('skincare');
let groceries = document.getElementById('groceries');

let womens_fashion = document.getElementById('womens_fashion');
let mens_fashion = document.getElementById('mens_fashion');

// fetch('https://api.storerestapi.com/categories/mens-fashion')
// .then(response => response.json())
// .then(json => {
//     let products = json.products;

fetch('https://api.storerestapi.com/categories/womens-fashion')
.then(response => response.json())
.then(json => {
    let data = json.data;
    data.forEach((info) => {
        console.log(info);
        let products = json.products;
        products.forEach((product) => {
            console.log(product);
            let productCard = document.createElement('div');
            let title = document.createElement('h3');
            let price = document.createElement('div');
            let description = document.createElement('p');
            let img = document.createElement('img');
        
            title.innerHTML=`${product.title}`;
            price.innerHTML=`${product.price}`;
            description.innerHTML=`${product.description}`;
            img.setAttribute('src', product.imageSource);
        
            // img.style.width = '250px';
            // img.style.height = '250px';
            
            productCard.appendChild(img);
            productCard.appendChild(title);
            productCard.appendChild(price);
            productCard.appendChild(description);
            womens_fashion.appendChild(productCard);
        });
    });
}).catch(error=>{
    console.log(error);
})

fetch('https://api.storerestapi.com/categories/jewlary-and-watches')
.then(response => response.json())
.then(json => console.log(json))

fetch('https://api.storerestapi.com/categories/bags-and-shoes')
.then(response => response.json())
.then(json => console.log(json))

fetch('https://api.storerestapi.com/categories/computers')
.then(response => response.json())
.then(json => console.log(json))

fetch('https://api.storerestapi.com/categories/phone-and-tablets')
.then(response => response.json())
.then(json => console.log(json))

fetch('https://api.storerestapi.com/categories/tools-and-hardware')
.then(response => response.json())
.then(json => console.log(json))

fetch('https://api.storerestapi.com/categories/home-and-furniture')
.then(response => response.json())
.then(json => console.log(json))


fetch('https://dummyjson.com/products/category/smartphones')
.then(res => res.json())
.then(json => {
    let products = json.products;
    products.forEach((product) => {
        smartphones[product.id] = product;
        smartphones = product;
        let productCard = document.createElement('div');
        let title = document.createElement('h1');
        let brand = document.createElement('h3');
        let description = document.createElement('p');
        let price = document.createElement('div');
        let rating = document.createElement('div');
        let img = document.createElement('img');

        title.innerHTML=`${product.title}`;
        brand.innerHTML=`${product.brand}`;
        description.innerHTML=`${product.description}`;
        price.innerHTML=`${product.price}`;
        rating.innerHTML=`${product.rating}`;
        img.setAttribute('src', product.thumbnail);

        img.style.width = '250px';
        img.style.height = '250px';
        
        productCard.appendChild(img);
        productCard.appendChild(title);
        productCard.appendChild(brand);
        productCard.appendChild(description);
        productCard.appendChild(price);
        productCard.appendChild(rating);
        productContainer.appendChild(productCard);
    });
}).catch(error=>{
    console.log(error);
})

console.log(smartphones);

fetch('https://dummyjson.com/products/category/laptops')
.then(res => res.json())
.then(json => {
    let products = json.products;
    products.forEach((product) => {
        console.log(product);
        laptops = product;
        let productCard = document.createElement('div');
        let title = document.createElement('h1');
        let brand = document.createElement('h3');
        let description = document.createElement('p');
        let price = document.createElement('div');
        let rating = document.createElement('div');
        let img = document.createElement('img');

        title.innerHTML=`${product.title}`;
        brand.innerHTML=`${product.brand}`;
        description.innerHTML=`${product.description}`;
        price.innerHTML=`${product.price}`;
        rating.innerHTML=`${product.rating}`;
        img.setAttribute('src', product.thumbnail);

        img.style.width = '250px';
        img.style.height = '250px';
        
        productCard.appendChild(img);
        productCard.appendChild(title);
        productCard.appendChild(brand);
        productCard.appendChild(description);
        productCard.appendChild(price);
        productCard.appendChild(rating);
        productContainer.appendChild(productCard);
    });
}).catch(error=>{
    console.log(error);
})

console.log(laptops);

fetch('https://dummyjson.com/products/category/fragrances')
.then(res => res.json())
.then(json => {
    let products = json.products;
    products.forEach((product) => {
        console.log(product);
        fragrances = product;
        let productCard = document.createElement('div');
        let title = document.createElement('h1');
        let brand = document.createElement('h3');
        let description = document.createElement('p');
        let price = document.createElement('div');
        let rating = document.createElement('div');
        let img = document.createElement('img');

        title.innerHTML=`${product.title}`;
        brand.innerHTML=`${product.brand}`;
        description.innerHTML=`${product.description}`;
        price.innerHTML=`${product.price}`;
        rating.innerHTML=`${product.rating}`;
        img.setAttribute('src', product.thumbnail);

        img.style.width = '250px';
        img.style.height = '250px';
        
        productCard.appendChild(img);
        productCard.appendChild(title);
        productCard.appendChild(brand);
        productCard.appendChild(description);
        productCard.appendChild(price);
        productCard.appendChild(rating);
        productContainer.appendChild(productCard);
    });
}).catch(error=>{
    console.log(error);
})

console.log(fragrances);

fetch('https://dummyjson.com/products/category/skincare')
.then(res => res.json())
.then(json => {
    let products = json.products;
    products.forEach((product) => {
        console.log(product);
        skincare = products;
        let productCard = document.createElement('div');
        let title = document.createElement('h1');
        let brand = document.createElement('h3');
        let description = document.createElement('p');
        let price = document.createElement('div');
        let rating = document.createElement('div');
        let img = document.createElement('img');

        title.innerHTML=`${product.title}`;
        brand.innerHTML=`${product.brand}`;
        description.innerHTML=`${product.description}`;
        price.innerHTML=`${product.price}`;
        rating.innerHTML=`${product.rating}`;
        img.setAttribute('src', product.thumbnail);

        img.style.width = '250px';
        img.style.height = '250px';
        
        productCard.appendChild(img);
        productCard.appendChild(title);
        productCard.appendChild(brand);
        productCard.appendChild(description);
        productCard.appendChild(price);
        productCard.appendChild(rating);
        productContainer.appendChild(productCard);
    });
}).catch(error=>{
    console.log(error);
})

console.log(skincare);

fetch('https://dummyjson.com/products/category/groceries')
.then(res => res.json())
.then(json => {
    let products = json.products;
    products.forEach((product) => {
        console.log(product);
        groceries = products;
        let productCard = document.createElement('div');
        let title = document.createElement('h1');
        let brand = document.createElement('h3');
        let description = document.createElement('p');
        let price = document.createElement('div');
        let rating = document.createElement('div');
        let img = document.createElement('img');

        title.innerHTML=`${product.title}`;
        brand.innerHTML=`${product.brand}`;
        description.innerHTML=`${product.description}`;
        price.innerHTML=`${product.price}`;
        rating.innerHTML=`${product.rating}`;
        img.setAttribute('src', product.thumbnail);

        img.style.width = '250px';
        img.style.height = '250px';
        
        productCard.appendChild(img);
        productCard.appendChild(title);
        productCard.appendChild(brand);
        productCard.appendChild(description);
        productCard.appendChild(price);
        productCard.appendChild(rating);
        productContainer.appendChild(productCard);
    });
}).catch(error=>{
    console.log(error);
})

console.log(groceries);

// .then(json => {
//     let products = json.products;

//     products.forEach((product) => {
//         console.log(product);
//         let productCard = document.createElement('div');
//         let title = document.createElement('h1');
//         let brand = document.createElement('h3');
//         let description = document.createElement('p');
//         let price = document.createElement('div');
//         let rating = document.createElement('div');
//         let img = document.createElement('img');

//         title.innerHTML=`${product.title}`;
//         brand.innerHTML=`${product.brand}`;
//         description.innerHTML=`${product.description}`;
//         price.innerHTML=`${product.price}`;
//         rating.innerHTML=`${product.rating}`;
//         img.setAttribute('src', product.thumbnail);

//         img.style.width = '250px';
//         img.style.height = '250px';
        
//         productCard.appendChild(img);
//         productCard.appendChild(title);
//         productCard.appendChild(brand);
//         productCard.appendChild(description);
//         productCard.appendChild(price);
//         productCard.appendChild(rating);
//         productContainer.appendChild(productCard);
//     });
// }).catch(error=>{
//     console.log(error);
// })
