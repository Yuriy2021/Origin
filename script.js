const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/'
const searchInput = document.querySelector('.goods-search');
const searchBtn = document.querySelector('.search-button');


// function send(onError, onSuccess, url, method = 'GET', data = null, headers = [], timeout = 60000) {
//     let xhr;

//     if (window.XMLHttpRequest) {
//         // Chrome, Mozilla, Opera, Safari
//         xhr = new XMLHttpRequest();
//     } else if (window.ActiveXObject) {
//         // Internet Explorer
//         xhr = new ActiveXObject("Microsoft.XMLHTTP");
//     }

//     xhr.open(method, url, true);


//     headers.forEach((header) => {
//         xhr.setRequestHeader(header.key, header.value);
//     })


//     xhr.timeout = timeout;

//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4) {
//             if (xhr.status >= 400) {
//                 onError(xhr.statusText)
//             } else {
//                 onSuccess(xhr.responseText)
//             }
//         }
//     }

//     xhr.send(data);
// }
/* const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
];

const $goodsList = document.querySelector('.goods-list');

const renderGoodsItem = ({ title, price }) => {
    return `<div class="goods-item"><h3>${title}</h3><p>${price}</p></div>`;
};

const renderGoodsList = (list = goods) => {
    let goodsList = list.map(
        (item) => {
            return renderGoodsItem(item)
        }
    ).join('');

    $goodsList.insertAdjacentHTML('beforeend', goodsList);
}

renderGoodsList(); */

// class GoodsItem {
//     constructor(title, price, id) {
//         this.title = title;
//         this.price = price;
//         this.id = id;
//     }

//     render() {
//         return `<div data-id="${this.id}" class="goods-item"><h3>${this.title}</h3><p>${this.price}</p></div>`;
//     }
// }

// class GoodsList {
//     constructor(cart) {
//         this.goods = [];
//         this.filtred = [];
//         this._cart = cart;
//         this._el = document.querySelector('.goods-list')
//         this._el.addEventListener('click', this._onClick.bind(this))
//     }
//     filter(searchString) {
//         searchString = searchString.trim();
//         if (searchString.length === 0) {
//             this.filtred = this.goods
//             this.render()
//             return
//         }
//         const reg = new RegExp(searchString, 'i');
//         this.filtred = this.goods.filter((good) => reg.test(good.title))
//         this.render()
//     }

// fetchGoods() {
//     function send(url) {
//         return new Promise(function (resolve, reject) {
//             const xhr = new XMLHttpRequest()
//             xhr.open('GET', url, true);
//             xhr.onload = function () {
//                 if (this.status == 200) {
//                     resolve(this.response);
//                 } else {
//                     const error = new Error(this.statusText);
//                     error.code = this.status;
//                     reject(error);
//                 }
//             };
//             xhr.onerror = function () {
//                 reject(new Error("Network Error"));
//             };
//             xhr.send();
//         })
//     }
//     send(`${API_URL}catalogData.json`)
//         .then((request) => {
//             this.goods = JSON.parse(request).map(good => ({ title: good.product_name, price: good.price }))
//             this.render();
//         })
//         .catch((err) => {
//             console.log(err.text)
//         })
// }
//     fetchGoods() {
//         return fetch(`${API_URL}catalogData.json`)
//             .then((response) => {
//                 return response.json();
//             })
//             .then((request) => {
//                 this.goods = request.map(good => ({ title: good.product_name, price: good.price, id: good.id_product }))
//                 this.filtred = this.goods;
//                 return this.goods
//             })
//             .catch((err) => {
//                 console.log(err.text)
//             })
//     }

//     _onClick(e) {
//         const id = e.target.getAttribute('data-id');
//         console.log(id)
//         if (id) {
//             fetch(`${API_URL}addToBasket.json`)
//                 .then(() => {
//                     console.log(id, this.goods)
//                     this._cart.add(this.goods.find((good) => good.id == id))
//                 })
//         }
//     }



//     render() {
//         let listHtml = '';
//         this.filtred.forEach(good => {
//             const goodItem = new GoodsItem(good.title, good.price, good.id);
//             console.log(goodItem)
//             listHtml += goodItem.render();
//         });
//         this._el.innerHTML = listHtml;
//     }
// }
//     calculateGoodList() {
//         let sum = 0
//         this.goods.forEach(element => sum += element.price)
//         return ("Сумма товаров = " + sum)
//     }

// }

// class CartItem extends GoodsItem {
//     constructor(title, price, id) {
//         super(title, price, id)
//     }
// }

// class Cart {
//     constructor() {
//         this._list = [];
//         this._btn = document.querySelector('.cart-button')
//         this._el = document.querySelector('.cart')
//         this._btn.addEventListener('click', this._onToggleCart.bind(this))
//         this._el.addEventListener('click', this._onClick.bind(this))
//     }
//     add(good) {
//         this._list.push(good)
//         console.log(good)
//         this.render()
//     }
//     _onClick(e) {
//         const id = e.target.getAttribute('data-id');
//         fetch(`${API_URL}deleteFromBasket.json`)
//             .then(() => {
//                 const index = this._list.findIndex((good) => good.id == id)
//                 this._list.splice(index, 1)
//                 this.render()
//             })
//     }

//     _onToggleCart() {
//         this._el.classList.toggle('active');
//     }
//     render() {
//         let listHtml = '';
//         this._list.forEach(good => {
//             console.log(good)
//             const goodItem = new CartItem(good.title, good.price, good.id);
//             console.log(goodItem)
//             listHtml += goodItem.render();
//         });
//         this._el.innerHTML = listHtml;
//     }

//     load() {
//         fetch(`${API_URL}getBasket.json`)
//             .then((response) => {
//                 return response.json()
//             })
//             .then((goods) => {
//                 this._list = goods.contents.map(good => ({ title: good.product_name, price: good.price, id: good.id_product }))
//                 this.render()
//             })
//     }
// }
// const cart = new Cart();
// const list = new GoodsList(cart);
// // searchBtn.addEventListener('click', () => {
// //   list.filter(searchInput.value);
// // })

// searchInput.addEventListener('input', () => {
//     list.filter(searchInput.value);
// })

// document.querySelector('.goods-list').addEventListener('click', (e) => {
//     if (e.target.classList.contains('goods-item')) {
//         const id = e.target.getAttribute('data-id');
//         console.log(id)
//     }
// })

// list.fetchGoods()
//     .then((goods) => {
//         list.render()
//     })
// cart.load();
//     //Вывод корзины временно в консоль вместо вывода на страницу корзины.
//     getBasket() {
//         return fetch(`${API_URL}getBasket.json`)
//             .then((response) => response.json())
//             .catch((err) => console.log(err));
//     }
//     deleteFromBasket() {
//         fetch(`${API_URL}/deleteFromBasket.json`)
//             .then((response) => { return response.json(); })
//             .then((data) => {
//                 console.log(data)
//                 if (data.result == 1) {
//                     const delBtn = document.querySelectorAll('.buy_btn__del');
//                     delBtn.forEach(item => {
//                         item.addEventListener('click', () => {

//                             this.basketGoods.contents.splice(item, 1)
//                             console.log(this.basketGoods)
//                         });
//                     });
//                 } else {
//                     return;
//                 }
//             })
//             .catch((err) => console.log(err));
//     }

//     addToBasket() {
//         fetch(`${API_URL}/addToBasket.json`)
//             .then((response) => {
//                 return response.json();
//             })
//             .then((data) => {
//                 console.log(data)
//                 if (data.result == 1) {
//                     const buyBtn = document.querySelectorAll('.buy-btn');
//                     buyBtn.forEach(item => {
//                         item.addEventListener('click', () => {
//                             this.basketGoods.contents.push(item)
//                             console.log(this.basketGoods)
//                         });
//                     });

//                 } else {
//                     return;
//                 }
//             })
//             .catch((err) => console.log(err));
//     }
// }

// class BasketItem {
//     constructor(product) {
//         this.title = product.product_name;
//         this.price = product.price;
//         this.id = product.id_product;

//     }
//     render() {
//         return `<div class="goods-item"><h3>${this.title}</h3><p>${this.price}</p><button class = "buy_btn__del" > Удалить из корзины </button></div>`;

//     }
// }
// const basketCatalog = new Basketlist();
new Vue({
    el: "#app",
    data: {
        goods: [],
        filteredGoods: [],
        cart: [],
        searchLine: '',
        isVisibleCart: false
    },
    methods: {
        loadGoods() {
            fetch(`${API_URL}catalogData.json`)
                .then((request) => request.json())
                .then((data) => {
                    this.goods = data;
                    this.filteredGoods = data;
                })
        },
        loadCart() {
            fetch(`${API_URL}getBasket.json`)
                .then((request) => request.json())
                .then((data) => {
                    this.cart = data.contents;
                })
        },
        addToCart(good) {
            fetch(`${API_URL}addToBasket.json`)
                .then(() => {
                    this.cart.push(good)
                })
        },
        removeFromCart(good) {
            fetch(`${API_URL}deleteFromBasket.json`)
                .then(() => {
                    const index = this.cart.findIndex((item) => item.id_product == good.id_product)
                    this.cart.splice(index - 1, 1)
                })
        },
        onSearch() {
            const reg = new RegExp(this.searchLine, 'i')
            this.filteredGoods = this.goods.filter((good) => reg.test(good.product_name))
        },
        onToggleCart() {
            this.isVisibleCart = !this.isVisibleCart
        }
    },
    mounted() {
        this.loadGoods();
        this.loadCart();
    }
})
